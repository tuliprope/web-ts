let path = require( 'path' );
let webpack = require( 'webpack' );
const context = path.join( __dirname, '../' );

module.exports = {
    context,
    entry: {
        'vendor': [
            
        ]
    },
    output: {
        filename: 'vendor-[contenthash:8].js',
        path: path.resolve( context, './dist/js/' ),
    },
    plugins: [
        new webpack.DllPlugin( {
            path: 'dist/manifest.json',
            name: 'vendor_lib',
            context: context,
        } ),
        new webpack.NamedChunksPlugin()
    ]
}