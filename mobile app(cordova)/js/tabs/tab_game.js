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
        game_close()
        {
            let game_state = store.get("game_state");
            if(game_state =="end")
            {
                this.show.call(this);
            }
        },
        game_menu_close()
        {
            let game_menu_state = store.get("game_menu_state");
            if(game_menu_state =="off")
            {
                this.show.call(this);
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
        start_game()
        {
            store.set({game_state:"start"});
        },
        game_menu_open(name)
        {
            store.set({game_menu:name});
            store.set({game_menu_state:"on"});
        },
        get_content_html()
        {
            let html = `<div class="content_game_menu">
                    
            <div id="game_menu_name" class="head_content"> Игры
            </div>
            
            <div class="middle_game_list_menu">
                
                
                <div class="game_list">
                    
                    <div class="game_item" game="quiz">Викторина</div>
                </div>
                
            </div>
            
            <div class="bottom_game">
                
                
            </div>
            
        </div>`;
            return html;
        }
    };
    return tab_game;
}()