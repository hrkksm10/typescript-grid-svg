require.config({
    paths: {
        snapsvg: 'lib/snap.svg',
    },
    // shim: {},
    // キャッシュ防止(開発用)
    urlArgs: `bust=${(new Date()).getTime()}`,
});

require(['app'], (app: any) => {
    app.default.render();
});
