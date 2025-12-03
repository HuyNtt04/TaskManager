import {
    applyUrlDefaults,
    queryParams,
    type RouteDefinition,
    type RouteFormDefinition,
    type RouteQueryOptions,
} from '../../../../wayfinder';
/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});

index.definition = {
    methods: ['get', 'head'],
    url: '/lists',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
const indexForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::index
 * @see app/Http/Controllers/ListController.php:13
 * @route '/lists'
 */
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

index.form = indexForm;
/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
export const create = (
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
});

create.definition = {
    methods: ['get', 'head'],
    url: '/lists/create',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
const createForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::create
 * @see app/Http/Controllers/ListController.php:28
 * @route '/lists/create'
 */
createForm.head = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

create.form = createForm;
/**
 * @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:36
 * @route '/lists'
 */
export const store = (
    options?: RouteQueryOptions,
): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
});

store.definition = {
    methods: ['post'],
    url: '/lists',
} satisfies RouteDefinition<['post']>;

/**
 * @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:36
 * @route '/lists'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:36
 * @route '/lists'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:36
 * @route '/lists'
 */
const storeForm = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\ListController::store
 * @see app/Http/Controllers/ListController.php:36
 * @route '/lists'
 */
storeForm.post = (
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
});

store.form = storeForm;
/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
export const show = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
});

show.definition = {
    methods: ['get', 'head'],
    url: '/lists/{list}',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
show.url = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args };
    }

    if (Array.isArray(args)) {
        args = {
            list: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        list: args.list,
    };

    return (
        show.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
show.get = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
show.head = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
const showForm = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
showForm.get = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::show
 * @see app/Http/Controllers/ListController.php:53
 * @route '/lists/{list}'
 */
showForm.head = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

show.form = showForm;
/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
export const edit = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
});

edit.definition = {
    methods: ['get', 'head'],
    url: '/lists/{list}/edit',
} satisfies RouteDefinition<['get', 'head']>;

/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
edit.url = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args };
    }

    if (Array.isArray(args)) {
        args = {
            list: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        list: args.list,
    };

    return (
        edit.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
edit.get = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
edit.head = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
const editForm = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
editForm.get = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\ListController::edit
 * @see app/Http/Controllers/ListController.php:61
 * @route '/lists/{list}/edit'
 */
editForm.head = (
    args: { list: string | number } | [list: string | number] | string | number,
    options?: RouteQueryOptions,
): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'get',
});

edit.form = editForm;
/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
export const update = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
});

update.definition = {
    methods: ['put', 'patch'],
    url: '/lists/{list}',
} satisfies RouteDefinition<['put', 'patch']>;

/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
update.url = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args };
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { list: args.id };
    }

    if (Array.isArray(args)) {
        args = {
            list: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        list: typeof args.list === 'object' ? args.list.id : args.list,
    };

    return (
        update.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
update.put = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
});
/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
update.patch = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
});

/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
const updateForm = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
updateForm.put = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'post',
});
/**
 * @see \App\Http\Controllers\ListController::update
 * @see app/Http/Controllers/ListController.php:69
 * @route '/lists/{list}'
 */
updateForm.patch = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'post',
});

update.form = updateForm;
/**
 * @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:83
 * @route '/lists/{list}'
 */
export const destroy = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
});

destroy.definition = {
    methods: ['delete'],
    url: '/lists/{list}',
} satisfies RouteDefinition<['delete']>;

/**
 * @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:83
 * @route '/lists/{list}'
 */
destroy.url = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { list: args };
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { list: args.id };
    }

    if (Array.isArray(args)) {
        args = {
            list: args[0],
        };
    }

    args = applyUrlDefaults(args);

    const parsedArgs = {
        list: typeof args.list === 'object' ? args.list.id : args.list,
    };

    return (
        destroy.definition.url
            .replace('{list}', parsedArgs.list.toString())
            .replace(/\/+$/, '') + queryParams(options)
    );
};

/**
 * @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:83
 * @route '/lists/{list}'
 */
destroy.delete = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
});

/**
 * @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:83
 * @route '/lists/{list}'
 */
const destroyForm = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'post',
});

/**
 * @see \App\Http\Controllers\ListController::destroy
 * @see app/Http/Controllers/ListController.php:83
 * @route '/lists/{list}'
 */
destroyForm.delete = (
    args:
        | { list: number | { id: number } }
        | [list: number | { id: number }]
        | number
        | { id: number },
    options?: RouteQueryOptions,
): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        },
    }),
    method: 'post',
});

destroy.form = destroyForm;
const ListController = { index, create, store, show, edit, update, destroy };

export default ListController;
