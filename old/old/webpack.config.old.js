module.exports = {
    entry: './app.jsx',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Greeter: 'components/Greeter.jsx',
            GreeterMessage: 'components/GreeterMessage.jsx',
            GreeterForm: 'components/GreeterForm.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /{node_modules|bower_components}/
            }
        ]
    }
};