let theme = function()
{
    let theme = 
    {
        change()
        {
            let theme = store.get("theme_name");
            $(".wrapper").attr("theme", theme);
            $(".tab").attr("theme", theme);
        },
        tabs_change()
        {
            let tabs_state = store.get("tabs_state");
            $(".tabs").attr("show", tabs_state);
        }
    };
    return theme;
}()