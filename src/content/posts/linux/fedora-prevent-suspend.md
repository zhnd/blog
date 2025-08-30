---
title: Fedora SSH 连接时智能防止系统挂起
excerpt: "解决 Fedora Workstation SSH 连接时自动挂起的问题。通过 systemd-inhibit 机制实现智能检测：有 SSH 连接时阻止挂起，无连接时恢复正常电源管理。包含完整配置步骤、监控脚本和故障排除方法。"
publishedDate: 2025-08-30
tags:
  - Linux
---

系统版本：Fedora 42 Workstation

在使用 Fedora Workstation 作为开发环境时，经常会遇到这样的困扰：通过 SSH 连接到服务器进行工作，但系统在空闲一段时间后会自动挂起，导致 SSH 连接断开，正在进行的任务中断。虽然可以完全禁用自动挂起，但这样会导致所有场景都不会自动休眠，不够灵活。

本文将介绍如何在 Fedora 42 Workstation 上实现智能的挂起管理：当检测到活跃的 SSH 连接时自动阻止系统挂起，而在没有 SSH 连接时恢复正常的电源管理，同时也不影响使用桌面环境时自动休眠。

## 问题分析

### 现有挂起机制

在 Fedora Workstation 中，系统挂起由多个组件协同管理：

```bash
systemd-inhibit --list
```

典型的输出包括：

- **ModemManager**: 管理调制解调器设备
- **NetworkManager**: 管理网络连接
- **UPower**: 电源管理
- **GNOME Shell**: 屏幕时间数据保存
- **GDM**: 处理电源键和挂起键

这些服务通过 `systemd-inhibit` 机制协调工作，我们的方案就是在此基础上增加 SSH 连接检测。

### 解决思路

1. **智能检测**: 实时监控 SSH 连接状态
2. **动态抑制**: 只在有 SSH 连接时阻止挂起
3. **系统集成**: 与现有电源管理机制协作
4. **自动恢复**: 连接断开后自动恢复正常挂起行为

## 实现方案

### 1. 系统环境检查

首先确认系统支持所需的功能：

```bash
# 检查当前挂起抑制状态
systemd-inhibit --list

# 检查 SSH 服务状态
systemctl status ssh
```

### 2. 核心监控脚本

创建智能 SSH 连接监控脚本：

```bash
sudo vi /usr/local/bin/ssh-monitor.sh
```

具体的脚本内容在：[ssh-monitor.sh](https://gist.github.com/zhnd/84fbf4c0c996dbc5cba55ee06927bbb5)

### 3. 系统服务集成

创建 systemd 服务实现开机自启：

```bash
sudo vi /etc/systemd/system/ssh-monitor.service
```

具体的脚本内容在：[ssh-monitor-systemd.service](https://gist.github.com/zhnd/120446e2b15ad18c5e65d76fbfad07ba)

服务配置要点：

- 在网络和 SSH 服务启动后运行
- 以 root 权限运行以确保有足够权限管理挂起
- 自动重启机制保证服务稳定性
- 日志输出到 systemd journal

### 4. 部署和启动

```bash
# 设置脚本权限
sudo chmod +x /usr/local/bin/ssh-monitor.sh

# 启用并启动服务
sudo systemctl daemon-reload
sudo systemctl enable ssh-monitor
sudo systemctl start ssh-monitor
```

## 验证效果

- 查看服务状态

```bash
# 检查服务运行状态
sudo systemctl status ssh-monitor

# 查看监控脚本状态
sudo /usr/local/bin/ssh-monitor.sh status
```

- 验证挂起抑制

```bash
# 建立 SSH 连接后检查
systemd-inhibit --list | grep SSH-Monitor
```

成功的输出应该包含：

```
SSH-Monitor    0   root 10922 systemd-inhibit sleep:idle     Active SSH connections detected
```

### 调试和故障排除

```bash
# 查看详细日志
sudo journalctl -u ssh-monitor -f

# 查看脚本日志
sudo tail -f /var/log/ssh-monitor.log

# 测试连接检测
sudo /usr/local/bin/ssh-monitor.sh test
```

如果你使用 SSH 连接也遇到了类似的问题，不妨尝试一下这个方案。

## 参考资料

- [systemd-inhibit Manual](https://www.freedesktop.org/software/systemd/man/systemd-inhibit.html)
- [Fedora Power Management](https://docs.fedoraproject.org/en-US/quick-docs/power-management/)
- [SSH Connection Management](https://man.openbsd.org/ssh)

---

_本文基于 Fedora 42 Workstation 环境测试，其他版本可能需要适当调整。_
