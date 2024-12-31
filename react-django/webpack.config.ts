import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './frontend/src/index.tsx',  // Your main entry point for React
  output: {
    filename: 'bundle.js',             // Output bundled file
    path: path.resolve(__dirname, 'frontend/dist'),  // Where the output will be saved
    clean: true,                       // Clean the output folder before each build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],  // Allow importing without extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,                    // Use TypeScript for .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,                     // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,  // Handle images
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html',  // Path to your HTML template
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'frontend/dist'),
    port: 3000,                             // Development server port
    hot: true,                               // Hot module replacement (HMR)
    proxy: {
      '/static': 'http://localhost:8000',     // Proxy static files to Django backend (assuming it's running on port 8000)
    },
  },
  mode: 'development',  // Can be 'production' for optimized builds
};

export default config;