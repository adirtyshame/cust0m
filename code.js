$(".user-info.user-only").prepend('<div class="cust0m_settings"> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Pro Reihe maximal:</div> \r\n' +
'        <div id="cust0m_input_anzahl" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">Vorschaubilder</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Vorschaubilder Größe:</div> \r\n' +
'        <div id="cust0m_input_thumbs" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">%</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Bilder Mindesthöhe:</div> \r\n' +
'        <div id="cust0m_input_width" class="cust0m_input" contenteditable="true"></div> \r\n' +
'        <div class="cust0m_label">px</div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Großes Bild laden</div> \r\n' +
'        <div id="cust0m_input_fullsize" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Kommentare in die Mitte:</div> \r\n' +
'        <div id="cust0m_input_pos" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Admin Sicht:</div> \r\n' +
'        <div id="cust0m_input_admin" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_middle"> \r\n' +
'        <div class="cust0m_label cust0m_lable_1">Benis anzeigen:</div> \r\n' +
'        <div id="cust0m_input_benis" class="cust0m_triggers"> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_on active" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\');">ON</div> \r\n' +
'             <div class="cust0m_trigger cust0m_trigger_off" onclick="$(this).parent().children().removeClass(\'active\'); $(this).addClass(\'active\'); ">OFF</div> \r\n' +
'        </div> \r\n' +
'    </div> \r\n' +
'    <div class="cust0m_line"></div> \r\n' +
'    <div id="cust0m_save" class="cust0m_button">speichern</div> \r\n' +
'    <div id="cust0m_info" class="cust0m_button" style="display: none">gespeichert</div> \r\n' +
'</div> ');

$(".user-name.head-link").after('<div class="cust0m_benis_head">mm</div><div class="cust0m_benis_num">1009</div>');
$("#tab-top").after('<a id="tab-top" class="head-tab" href="/top">beliebt</a>');

if($(".user-name.head-link").text() != "") setInterval(function() { $.ajax(
{
    url: "http://pr0gramm.com/api/user/info?name=" + $(".user-name.head-link").text() + "&flags=1&self=true",
    success: function(data)
    {
        $(".cust0m_benis_num").text(JSON.parse(data).user.score);
    }
}); }, 30000);

var g = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
g.text = 'cust0m = {};\r\n' +
'cust0m.fullsize = true;\r\n' +
'cust0m.benis = 500;\r\n' +
'\r\n' +
"setInterval(function() {if($(window).height() > $('body').height() - 400) {$(window).scroll(); console.log('scroll event');}}, 1500);\r\n" +
'\r\n' +
'p.Stream.prototype._processResponse = function (data) { \r\n' +
'        if (!data.items || !data.items.length) {\r\n' +
'            return null;\r\n' +
'        } debugger; \r\n' +
'       var tempItems = [];\r\n' +
'       for (var i = 0; i < data.items.length; i++) {\r\n' +
'           if ((cust0m.benis >= 0 && data.items[i].up - data.items[i].down > cust0m.benis) || (cust0m.benis < 0 && data.items[i].up - data.items[i].down < cust0m.benis)) {\r\n' +
'               tempItems.push(data.items[i]);\r\n' +
'           }\r\n' +
'       }\r\n' +
'\r\n' +
'       data.items = tempItems;\r\n' +
'        this.reached.start = data.atStart || this.reached.start;\r\n' +
'        this.reached.end = data.atEnd || this.reached.end;\r\n' +
'        var oldestId, newestId;\r\n' +
'        if (this.options.promoted) {\r\n' +
'            data.items.sort(p.Stream.sortByPromoted);\r\n' +
'            oldestId = data.items[data.items.length - 1].promoted;\r\n' +
'            newestId = data.items[0].promoted;\r\n' +
'        } else {\r\n' +
'            data.items.sort(p.Stream.sortById);\r\n' +
'            oldestId = data.items[data.items.length - 1].id;\r\n' +
'            newestId = data.items[0].id;\r\n' +
'        }\r\n' +
'        var position = (oldestId < this._oldestId) ? p.Stream.POSITION.APPEND : p.Stream.POSITION.PREPEND;\r\n' +
'        this._oldestId = Math.min(this._oldestId, oldestId);\r\n' +
'        this._newestId = Math.max(this._newestId, newestId);\r\n' +
'        var prev = null;\r\n' +
'        var itemVotes = p.user.voteCache.votes.items;\r\n' +
'        for (var i = 0; i < data.items.length; i++) {\r\n' +
'            var item = data.items[i];\r\n' +
'            item.thumb = CONFIG.PATH.THUMBS + item.thumb;\r\n' +
'            item.image = (cust0m.fullsize && item.fullsize) ? (CONFIG.PATH.FULLSIZE + item.fullsize) : (CONFIG.PATH.IMAGES + item.image);\r\n' +
'            item.fullsize = item.fullsize ? CONFIG.PATH.FULLSIZE + item.fullsize : null;\r\n' +
'            item.vote = itemVotes[item.id] || 0;\r\n' +
'            this.items[item.id] = item;\r\n' +
'        }\r\n' +
'        return position;\r\n' +
'    }; \r\n' +
'\r\n' +
"p.View.Stream.Main.prototype.buildItem = function (item) { return (item != undefined) ? ('<a class=\"silent thumb\" id=\"item-' + item.id + '\" href=\"' + this.baseURL + item.id + '\">' + '<img src=\"' + item.thumb + '\"/>' + '</a>') : '';}" ;
s.parentNode.insertBefore(g, s);

standard =
{
    anzahl: 20,
    width: 0,
    pos: "ON",
    thumbs: 100,
    thumbs_min: 30,
    admin: "OFF",
    benis: "OFF",
    fullsize: "OFF"
};

function save_options()
{
    set = {
        anzahl: $('#cust0m_input_anzahl').text(),
        width: $('#cust0m_input_width').text(),
        pos: $('#cust0m_input_pos .active').text(),
        admin: $('#cust0m_input_admin .active').text(),
        thumbs: $('#cust0m_input_thumbs').text(),
        benis: $('#cust0m_input_benis .active').text(),
        fullsize: $('#cust0m_input_benis .active').text()
    };
    chrome.storage.local.set(set,
    function ()
    {
        var status = $('#cust0m_info');
        $('#cust0m_info').fadeIn();
        setTimeout(function ()
        {
            $('#cust0m_info').fadeOut();
        }, 500);
    });
}

function restore_options()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        $('#cust0m_input_anzahl').text(items.anzahl);

        $('#cust0m_input_width').text(items.width);

        $('#cust0m_input_pos .cust0m_trigger').removeClass("active");
        if(items.pos == "ON") $('#cust0m_input_pos .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_pos .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_admin .cust0m_trigger').removeClass("active");
        if(items.admin == "ON") $('#cust0m_input_admin .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_admin .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_benis .cust0m_trigger').removeClass("active");
        if(items.benis == "ON") $('#cust0m_input_benis .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_benis .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_fullsize .cust0m_trigger').removeClass("active");
        if(items.fullsize == "ON") $('#cust0m_input_fullsize .cust0m_trigger_on').addClass("active");
        else $('#cust0m_input_fullsize .cust0m_trigger_off').addClass("active");

        $('#cust0m_input_thumbs').text(items.thumbs);
    });
}
restore_options();

$('#cust0m_save').click(save_options);
$('.cust0m_trigger').click(save_options);

$('#settings-link').mouseout(function () {$('.cust0m_settings').css('display', 'none');});
$('#settings-link').mouseover(function () {$('.cust0m_settings').css('display', 'block');});

$('.cust0m_input').keypress(function (event)
{
      if (event.keyCode == 10 || event.keyCode == 13) {
        save_options();
        event.preventDefault();
      }
});

function update_settings()
{
    chrome.storage.local.get(standard,
    function (items)
    {
        anzahl = standard.anzahl;
        if(parseInt(items.anzahl) == items.anzahl) anzahl = parseInt(items.anzahl);

        width = standard.width;
        if(parseInt(items.width) == items.width) width = parseInt(items.width);

        thumbs = standard.thumbs;
        if(parseInt(items.thumbs) == items.thumbs)
        {
            thumbs = parseInt(items.thumbs);
            if(thumbs < standard.thumbs_min) thumbs = standard.thumbs_min;
        }
        thumbs /= 100;

        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];
        g.text = "p.user.admin = " + (items.admin == "ON") + ";" +
            "cust0m.fullsize = " + (items.fullsize == "ON") + ";" +
            "CONFIG.AUTO_SYNC.INTERVAL = " + "1" + "; CONFIG.LAYOUT.THUMBS_PER_ROW.MAX = " + anzahl + "; CONFIG.LAYOUT.THUMB.WIDTH = " + (128 * thumbs) + "; CONFIG.LAYOUT.THUMB.HEIGHT = " + (128 * thumbs) + "; $(window).resize();";
        s.parentNode.insertBefore(g, s);

       changeCss('.item-image', 'min-height: ' + width + 'px;');

       changeCss('a.thumb, a.thumb img', 'height: ' + (128 * thumbs) + 'px; width: ' + (128 * thumbs) + 'px;');

        if(items.pos == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: auto; max-width: 1052px;');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('div.item-comments, div.item-info', 'margin: 0; max-width: 9999px');
            });
        }

        if(items.benis == "ON")
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: inline');
            });
        }
        else
        {
            $(window).resize().resize(function(event)
            {
                changeCss('.cust0m_benis_head, .cust0m_benis_num', 'display: none');
            });
        }
        $(window).resize();
    });
}

chrome.storage.onChanged.addListener(function(changes, namespace)
{
    update_settings();
});

function changeCss(className, classValue)
{
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}

update_settings();