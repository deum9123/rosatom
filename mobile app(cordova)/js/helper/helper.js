let helper = function()
{
    let helper = 
    {
        close()
        {
            
            $(".person_helper").attr("helper_state", "off");
            store.set({helper_state:"off"});
        },
        show()
        {
            $(".person_helper").attr("helper_state", "on");
            store.set({helper_state:"on"});
        }
    };
    return helper;
}()