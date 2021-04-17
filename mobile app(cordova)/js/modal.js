let modal = function()
{
    let modal =
    {
        show()
        {
            let model_state = store.get("modal_state");
            if(model_state == "on")
            {
                $(".modal").attr("modal_state", "on");
            }
        },
        close()
        {
            let model_state = store.get("modal_state");
            if(model_state == "off")
            {
                $(".modal").attr("modal_state", "off");
            }
            
        },
    } 
    return modal;
}()