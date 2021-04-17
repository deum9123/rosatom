let html_island = function()
{
    let html_island = 
    {
        name: "html_island",
        open_island()
        {
            let island = store.get("island");
            if(island == "html_island")
            {
                this.content_show.call(this);
            }
        },
        start_test()
        {
            this.close_modal.call(this);
            store.set({test_state:"start"});
        },
        close_test()
        {
            store.set({test_state:"end"});
            this.open_island.call(this);
        },
        open_modal(type)
        {
            let content = this.get_content_modal_html.call(this, type);
            $("#modal").html(content);
            store.set({modal_state:"on"});
        },
        close_modal()
        {
            store.set({modal_state:"off"});
        },
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            $('#island_html_name').text(store.get('currentIslandTitle'));
        },
        get_content_modal_html(type)
        {
            let html = `<div class="modal_island">
            <div class="modal_island_window" modal_island_state = "${type}">
                <div class="modal_circle" modal_circle_state="${type}"></div>
                <div modal_close class="modal_close">
                    <img src="img/html_island/modal_close.png"  >
                </div>  
                <div class="modal_name" >Построение сеток (80/100)</div>
                <div class="modal_btns" >
                    <div class="modal_btn_video" ><img src="img/html_island/play.png"  ></div>
                    <div class="modal_btn_text" ><img src="img/html_island/text.png"  ></div>
                    <div class="modal_btn_forum" ><img src="img/html_island/message.png"  ></div>
                    <div class="modal_btn_test" start_test>Тест</div>
                </div>
            </div>
        </div>`;
            return html;
        },
        get_content_html()
        {
            let res = `<div class="content_island_html">
                    
            <div class="head_content"> 
                <div id="island_html_name" ></div>
                <div id="island_html_name_close" class="island_html_close"  > 
                    <img class="island_html_close" close_island src="img/html_island/close.png"> 
                </div>
            </div>
            
            <div class="middle_island_html">
                <div class="island_html_item island_html_item_1" island_item_state = "end"></div>
                <div class="island_html_item island_html_item_2" island_item_state = "end"></div>
                <div class="island_html_item island_html_item_3" island_item_state = "end"></div>
                <div class="island_html_item island_html_item_4" island_item_state = "end"></div>
                <div class="island_html_item island_html_item_5" island_item_state = "arrow"></div>
                <div class="island_html_item island_html_item_6" island_item_state = "close"></div>
                <div class="island_html_item island_html_item_7" island_item_state = "close"></div>
                <div class="island_html_item island_html_item_8" island_item_state = "close"></div>
                <div class="arrow_html_item " ></div>
                <img class="island_bg_end_img" src="img/html_island/island_bg_end.png"> 
            </div>
            
            <div class="bottom_island">
                <div class="bottom_left">
                    
                    <div class="bottom_left_txt">Влево</div>
                    <div class="bottom_left_img"></div>
                </div>
                <div class="bottom_center">
                    2/3
                </div>
                <div class="bottom_right">
                    <div class="bottom_right_txt">Вправо</div>
                    <div class="bottom_right_img"></div>
                </div>
                
            </div>
            
        </div>
    </div>`;
            return res;
        },
    };
    return html_island;
}()