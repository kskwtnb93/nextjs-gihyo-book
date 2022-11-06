/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: (() => {
		let compilerConfig = {
			// styledComponents の有効化
			styledComponents: true,
		}

		if (process.env.NODE_ENV === 'production') {
			compilerConfig = {
				...compilerConfig,
				// 本番環境では React Testing Library で使用する data-testid 属性を削除
				reactRemoveProperties: { properties: ['^data-testid$'] },
			}
		}

		return compilerConfig
	})(),
}

module.exports = nextConfig
