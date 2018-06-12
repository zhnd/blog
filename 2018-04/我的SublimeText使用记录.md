 Sublime Text作为一套轻量级的跨平台文本编辑器，具有启动速度快、方便配置、可通过包（package）扩充自身功能等特点，收到很多人的追捧和使用。

 本文主要是记录个人的使用配置，大家有需要的可以参考使用。需要注意的是，本文里面的扩展配置基于Mac环境，Windows以及Linux环境可进行参考，未进行测试。

## Sublime Text Package Control

作为Sublime Text的包管理器，使得Sublime Text更加方便的安装和更新扩展包。

安装方式：

启动Sublime Text程序，使用快捷键 ctrl + &apos;，也可以点击菜单栏：View，再点击Show Console进入到Sublime console界面中，随后根据软件版本输入以下内容，然后敲击回车键即可进行自动安装。

Sublime Text 3版本：

```
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

Sublime Text 2版本：

```
import urllib2,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

### 扩展包的安装方式：

Mac cmd+shift+p   → Package Control: Install Package → 输入扩展包名
Linux/Windows   ctrl+shift+p → Package Control: Install Package → 输入扩展包名


## Sublime Text常用扩展包

### [Side​Bar​Enhancements](https://packagecontrol.io/packages/SideBarEnhancements)

右键菜单功能扩展，丰富左侧文件栏的右键功能。

使用此扩展还可以实现在浏览器中打开功能，只需要在Key Bindings中添加以下内容，还可以使用快捷键打开：

```
{ "keys": ["f12"],
            "command": "side_bar_open_in_browser" ,
            "args":{"paths":[], "type":"testing", "browser":""}
        },
```

### [A File Icon](https://packagecontrol.io/packages/A%20File%20Icon)

文件栏显示图标扩展包。

### [BracketHighlighter](https://packagecontrol.io/packages/BracketHighlighter)

括号成对高亮提示，避免修改错误。

### [Doc​Blockr](https://packagecontrol.io/packages/DocBlockr)

帮助你在Javascript, PHP, CoffeeScript, Actionscript, C & C++更方便快捷的编写文档注释块。

在输入`/**` 以后按下enter或者tab键。

### [HTML5](https://packagecontrol.io/packages/HTML5)

增加HTML5语法模式和自动补全。

### [CSS3](https://packagecontrol.io/packages/CSS3)

增加CSS3支持。

如何你的编辑器不能使用tab补全，请在个人设置中添加以下内容：

```
"auto_complete_commit_on_tab": true,
"auto_complete_with_fields": true,
```

此外，还需将CSS3设置为你的默认css语法：

* 打开任意`.css`文件，然后进行以下操作：
* View → Syntax → Open all with current extension as… → CSS3

### [Emmet](https://packagecontrol.io/packages/Emmet)

>Emmet（以前名为Zen Coding[1]）是一套面向文本编辑器的插件，它允许通过内容辅助高速度的编写和编辑HTML、XML、XSL和其他结构化的代码格式。此项目2008年由Vadim Makeev发起[2]，并由Sergey Chikuyonok和其他Emmet用户基于Zen Coding 2.0的概念继续积极开发。[3]这套工具已经被一些高端的文本编辑器采纳，以及存在于Emmet团队开发或其他人独立实现的插件中。不过，Emmet独立于任何文本编辑器，它的引擎可以直接处理文本，而无需与任何特定软件相关。

他的更多使用方法请参考：[点击查看](https://docs.emmet.io/cheatsheet-a5.pdf)

### [Sublime​Code​Intel](https://packagecontrol.io/packages/SublimeCodeIntel)

代码提示和补全插件，支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等所有语言，是 Sublime Text 自带代码提示功能基础上一个更好的扩展，自带代码提示功能只可提示系统代码，而SublimeCodeIntel则可以提示用户自定义代码。SublimeCodeIntel支持跳转到变量、函数定义的功能，另外还有自动补全的功能，十分方便。

需要注意的是，这个插件体量相对很大， 建议使用git的方式进行下载：

点击preferences————browser packages，进入文件夹，使用以下命令进行下载：

```
git clone git://github.com/SublimeCodeIntel/SublimeCodeIntel.git
```

具体使用方式可进入：[点击查看](https://github.com/SublimeCodeIntel/SublimeCodeIntel)

### [Sublime​Linter](https://packagecontrol.io/packages/SublimeLinter)

代码检查插件，支持JavaScript、CSS、HTML、Java、PHP、Python、Ruby等十多种开发语言，但前提是需要配置相应语言的环境，要检查JavaScript代码需要安装node.js，检查PHP代码需要安装PHP并配置环境等。SublimeLinter可以及时提示编写代码中存在的不规范和错误的写法，并培养我们良好的编码习惯和风格。

在使用过程中我们可以结合需要安装相应的linter系统，比如检查eslint对应的插件为：[Sublime​Linter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint)
，相应的配置可以进入页面查看。

### [HTML-CSS-JS Prettify](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify)

格式化你的HTML, CSS, JavaScript以及JSON文件代码。

### [Sass](https://packagecontrol.io/packages/Sass)

这个扩展包用来高亮你的sass和scss语法文件。



### [Color Highlighter](https://packagecontrol.io/packages/Color%20Highlighter)

色值显示扩展包，能够在你在代码中直接根据颜色值显示出颜色，并有不同的显示样式。

### [React​JS](https://packagecontrol.io/packages/ReactJS)

ReactJS代码提示和自动补全插件。

### [Babel](https://packagecontrol.io/packages/Babel)

ES6 JavaScript和React JSX语法高亮扩展包。

安装完插件以后，需要对其进行设置：

1. 打开需要设置的js或者jsx文件，
2. 从菜单栏中选择View，
3. 然后依次点击Syntax → Open all with current extension as... → Babel → JavaScript (Babel).
4. 重复这个步骤(e.g.: .js and .jsx).

### [Python 3](https://packagecontrol.io/packages/Python%203)

为你的Python和Cython文件添加更好的语法高亮支持。

### [Anaconda](https://packagecontrol.io/packages/Anaconda)

是你的Sublime Text具有自动补全、代码提示、自动格式化等IDE功能。

此外，python文件默认建议缩进为4个长度，如何当前全局设置不是4，那么可以对python文件进行单独设置，方法为打开或者新建一个python文件，然后：preferences → setting-Syntax-Specific，接着输入内容，比如我的设置为：

```
{
    "tab_size": 4,
    "translate_tabs_to_spaces": true
}
```

### [Sublime​REPL](https://packagecontrol.io/packages/SublimeREPL)

可以使你在Sublime Text中运行解释器（REPL），还有对Python语言的特别支持。

可以在键盘设置中添加以下内容，以便使用快捷键调用解释器：

```
  {
    "keys": ["f5"],
    "caption": "SublimeREPL: Python - RUN current file",
    "command": "run_existing_window_command",
    "args": {
        "id": "repl_python_run",
        "file": "config/Python/Main.sublime-menu"
    }
},
```
Mac系统默认情况下使用python2.7进行编译，并且无法正确显示中文，所以需要对其进行设置：

依次点击：Preferences → Browser Packages → 进入文件夹SublimeREPL → 进入文件夹config → 进入文件夹Python → 打开文件Main.sublime-menu

在"caption": "Python - RUN current file",这部分添加以下内容：

```
                    {"command": "repl_open",
                     "caption": "Python - RUN current file",
                     "id": "repl_python_run",
                     "mnemonic": "R",
                     "args": {
                        "type": "subprocess",
                        "encoding": "utf8",
                        "cmd": ["/Library/Frameworks/Python.framework/Versions/3.6/bin/python3", "-u", "$file_basename"],
                        "cwd": "$file_path",
                        "syntax": "Packages/Python/Python.tmLanguage",
                        "external_id": "python",
                        "extend_env": {"PYTHONIOENCODING": "utf-8"}
                        }
                    },
```

## 其他使用记录

### 在Sublime Text直接运行js文件：

1. 安装NodeJs；
2. 打开软件，依次点击Tools → Build System → New Build System输入以下内容：

```
{
    "cmd": ["/usr/local/bin/node", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.javascript"
}
```

## 我的软件设置

```
{
    "auto_complete_commit_on_tab": true,
    "auto_complete_triggers":
    [
        {
            "characters": "<",
            "selector": "text.html"
        },
        {
            "characters": "\\",
            "selector": "text.tex.latex"
        }
    ],
    "auto_complete_with_fields": true,
    "bold_folder_labels": true,
    "caret_extra_bottom": 3,
    "caret_extra_top": 3,
    "caret_extra_width": 2,
    "color_scheme": "Packages/Dracula Color Scheme/Dracula.tmTheme",
    "disable_formatted_linebreak": true,
    "draw_white_space": "all",
    "ensure_newline_at_eof_on_save": true,
    "font_size": 14,
    "highlight_line": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "line_padding_bottom": 3,
    "line_padding_top": 3,
    "overlay_scroll_bars": "enabled",
    "rulers":
    [
        80
    ],
    "save_on_focus_lost": true,
    "scroll_past_end": true,
    "show_encoding": true,
    "tab_size": 2,
    "theme": "Adaptive.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_wrap": true,
    "wrap_width": 80
}

```

## 我的快捷键设置
```
[

  // view_in_browser
    { "keys": ["f12"],
                "command": "side_bar_open_in_browser" ,
                "args":{"paths":[], "type":"testing", "browser":""}
            },
   {
    "keys": ["tab"],
    "command": "expand_abbreviation_by_tab",

    // put comma-separated syntax selectors for which
    // you want to expandEmmet abbreviations into "operand" key
    // instead of SCOPE_SELECTOR.
    // Examples: source.js, text.html - source
    "context": [
      {
        "operand": "source.js",
        "operator": "equal",
        "match_all": true,
        "key": "selector"
      },

      // run only if there's no selected text
      {
        "match_all": true,
        "key": "selection_empty"
      },

      // don't work if there are active tabstops
      {
        "operator": "equal",
        "operand": false,
        "match_all": true,
        "key": "has_next_field"
      },

      // don't work if completion popup is visible and you
      // want to insert completion with Tab. If you want to
      // expand Emmet with Tab even if popup is visible --
      // remove this section
      {
        "operand": false,
        "operator": "equal",
        "match_all": true,
        "key": "auto_complete_visible"
      },
      {
        "match_all": true,
        "key": "is_abbreviation"
      }
    ]
  },
  {
    "keys": ["f5"],
    "caption": "SublimeREPL: Python - RUN current file",
    "command": "run_existing_window_command",
    "args": {
        "id": "repl_python_run",
        "file": "config/Python/Main.sublime-menu"
    }
}
]
```
