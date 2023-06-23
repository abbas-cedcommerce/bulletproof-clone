// const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
// const { addAfterLoader, removeLoaders, loaderByName, getLoaders, throwUnexpectedConfigError } = require('@craco/craco');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
module.exports = {
    mode: "development",
    devServer: {
        port: 8001
    },
    typescript: {
        enableTypeChecking: true /* (default value) */,
    },
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, "newbuild"),
        filename: "newbuild",
        clean: true,
        publicPath: './src',
        globalObject: 'this',
    },
    overrideWebpackConfig: ({ webpackConfig }) => {
        // Search for all instances of babel-loader.
        const { hasFoundAny, matches } = getLoaders(
            webpackConfig,
            loaderByName("babel-loader", "esbuild-loader", 'style-loader', 'css-loader', 'file-loader')
        );

        // If we can't find the loader then throw an error.
        if (!hasFoundAny) {
            throw new Error("could not find babel-loader");
        }

        let hasFoundRightLoader = false;

        // Loop through each match, enabling babelrc and clearing any presets.
        matches.forEach(({ loader }) => {
            if (loader.test.toString() === /\.(js|mjs|jsx|ts|tsx)$/.toString()) {
                hasFoundRightLoader = true;
                if (!loader.options) {
                    loader.options = {};
                }
                delete loader.include;
                loader.exclude = /node_modules/;
                loader.options.babelrc = true;
                loader.options.configFile = true;
                loader.options.rootMode = "upward-optional";
                delete loader.options.presets;
            }
        });

        if (!hasFoundRightLoader) {
            throw new Error("The correct babel-loader could not be found");
        }

        return webpackConfig;
    },
}

function getLoaders() {
    const esbuild = {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'esbuild-loader',
        options: {
            loader: 'tsx',
            target: 'es2015',
        },
        // exclude: /node_modules/,
    };

    const loaders = {
        rules: [
            esbuild,
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    };

    return esbuild;
}

// function getPlugins(env) {
//     const tsChecker = new ForkTsCheckerPlugin();
//     const html2 = new HtmlWebpackPlugin({
//         template: './src/index.html' //path.join(__dirname, 'public', 'index.html'),
//     });
//     // const dontenv2 = new Dotenv({
//     //     path: env['env_code'] ?
//     //         './envs/.env.' + env['env_code'] :
//     //         './envs/.env.development.local',
//     // });

//     return [tsChecker, html2];
// }