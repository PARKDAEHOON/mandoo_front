module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	// extends: [
	//   'plugin:react/recommended',
	//   // 'airbnb',
	//   'prettier'

	// ],
	extends: [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended", // 해당 플러그인의 권장 규칙을 사용합니다.
		// "plugin:prettier/recommended", // plugin과 eslint-config-prettier 설정을 한번에 합니다.
		// "next/core-web-vitals",
		// "next",
		// "airbnb",
		"plugin:@next/next/recommended",
		"prettier", // 포매팅 충돌 방지를 위해
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		// ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react/jsx-key": "off",
		"react/display-name": "off",
		"react/no-string-refs": "off",
		"react/no-unescaped-entities": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@next/next/no-img-element": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
