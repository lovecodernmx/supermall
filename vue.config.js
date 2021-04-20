module.exports = {
	publicPath: "./", // 基本路径
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	},
	devServer: {
                proxy: {
                        '^/api': {
                                // target: '自己的后台接口',
                                ws: true,
                                changOrigin: true,
                                // pathRewrite: {
                                //         '^/api': '',
                                // }

                        }
                }
        }
}
