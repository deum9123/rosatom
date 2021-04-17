let tab_game = function()
{
    let tab_game =
    {
        name : "tab_game",
        theme_name : "blue",
        show()
        {
            let tab = store.get("tab");
            
            if(tab == this.name)
            {
                store.set({theme_name:this.theme_name});
                this.tab_on.call(this);
                this.content_show.call(this);
            }
        },

        tab_on()
        {
            $("#tab_game").addClass("tab_on");
            $("#tab_island").removeClass("tab_on");
            $("#tab_profile").removeClass("tab_on");
            $("#tab_event").removeClass("tab_on");
            $("#tab_forum").removeClass("tab_on");
            $("#tab_intern").removeClass("tab_on");
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
        },
        get_content_html()
        {
            let html = `<div class="content_game_menu">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
        </div>`;
            return html;
        }
    };
    return tab_game;
}()