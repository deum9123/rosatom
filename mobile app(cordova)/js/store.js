let store = (function()
{
    let store =
    {
        data: {},
        listeners: {},
        get(prop)
        {
            if(this.data[prop] || this.data[prop] == 0) return this.data[prop];
            else if(window.localStorage.getItem(prop)) return window.localStorage.getItem(prop)
            else "";
        },
        set(props, is_local_storage)
        {
            for(let key in props)
            {
                this.data[key] = props[key];
            }
            for(let key in props)
            {
                if(this.listeners[key]) this.listeners[key].forEach(callback=>
                {
                    callback(props[key]);
                })
            }
            if(is_local_storage)
            {
                for(let key in props)
                {
                    window.localStorage.setItem(key, props[key])
                }
            }
        },
        add_listener(prop, callback)
        {
            if(!this.listeners[prop]) this.listeners[prop] = [];
            this.listeners[prop].push(callback);
        }
    }

    return store;
})()