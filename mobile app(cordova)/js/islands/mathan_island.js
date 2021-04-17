let mathan_island = function()
{
    let mathan_island = 
    {
        name: "mathan_island",
        open_island()
        {
            let island = store.get("island");
            if(island == "mathan_island")
            {
                this.content_show.call(this);
            }
        },
        
        content_show()
        {
            let content = this.get_content_html.call(this);
            $("#content").html(content);
            $('#island_html_name').text(store.get('currentIslandTitle'));
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
    return mathan_island;
}()