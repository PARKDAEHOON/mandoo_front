const dummy = {
	dsgnNo: "63a8f84c0c3961c8c81c85d4",
	coNo: "c123456",
	dsgnNm: "내가 만든 디자인",
	ver: 100,
	useYn: "Y",
	chgpId: "m123456",
	chgDtm: "2022-12-26T02:18:21.320Z",
	dsgnCntn: {
		header: {
			uuid: "6e67b58a-cd24-4c04-b48a-d6d09cb07538",
			type: "header",
			disabled: false,
			settings: [
				{
					type: "SELECT",
					key: "color_scheme",
					value: "background-1",
				},
				{
					type: "IMAGE_PICKER",
					key: "logo",
					value: "shopify://shop_images/self-serve-coffee-shop.jpg",
				},
				{
					type: "RANGE",
					key: "logo_width",
					value: "90",
				},
				{
					type: "SELECT",
					key: "logo_position",
					value: "middle-left",
				},
				{
					type: "LINK_LIST",
					key: "menu",
					value: "main-menu",
				},
				{
					type: "SELECT",
					key: "menu_type_desktop",
					value: "dropdown",
				},
				{
					type: "CHECKBOX",
					key: "show_line_separator",
					value: "true",
				},
				{
					type: "CHECKBOX",
					key: "enable_sticky_header",
					value: "true",
				},
				{
					type: "SELECT",
					key: "mobile_logo_position",
					value: "center",
				},
				{
					type: "RANGE",
					key: "margin_bottom",
					value: "0",
				},
				{
					type: "RANGE",
					key: "padding_top",
					value: "12",
				},
				{
					type: "RANGE",
					key: "padding_bottom",
					value: "20",
				},
			],
			blocks: [
				{
					uuid: "e1ea497f-808f-40cc-b88c-e8d52d37a703",
					type: "text",
					settings: [
						{
							type: "TEXT",
							key: "text",
							value:
								"Give customers details about the banner image(s) or content on the template.",
						},
						{
							type: "SELECT",
							key: "text_style",
							value: "body",
						},
					],
					disabled: false,
				},
			],
		},
		footer: {
			uuid: "3b50cee4-496b-44c3-b862-04fa8f103371",
			type: "footer",
			disabled: false,
			settings: [
				{
					type: "SELECT",
					key: "color_scheme",
					value: "background-1",
				},
				{
					type: "CHECKBOX",
					key: "newsletter_enable",
					value: "true",
				},
				{
					type: "TEXT",
					key: "newsletter_heading",
					value: "Subscribe to our emails",
				},
				{
					type: "CHECKBOX",
					key: "show_social",
					value: "true",
				},
				{
					type: "CHECKBOX",
					key: "enable_country_selector",
					value: "false",
				},
				{
					type: "CHECKBOX",
					key: "enable_language_selector",
					value: "false",
				},
				{
					type: "CHECKBOX",
					key: "payment_enable",
					value: "true",
				},
				{
					type: "RANGE",
					key: "margin_top",
					value: "48",
				},
				{
					type: "RANGE",
					key: "padding_top",
					value: "36",
				},
				{
					type: "RANGE",
					key: "padding_bottom",
					value: "36",
				},
			],
			blocks: [
				{
					uuid: "a4c3bc25-669f-47a4-a2a1-7724a580ddb1",
					type: "link_list",
					settings: [
						{
							type: "TEXT",
							key: "heading",
							value: "Quick links",
						},
						{
							type: "LINK_LIST",
							key: "menu",
							value: "footer",
						},
					],
					disabled: false,
				},
				{
					uuid: "dca1ef96-cdea-4ea4-bfa2-a9c30edcb527",
					type: "link_list",
					settings: [
						{
							type: "TEXT",
							key: "heading",
							value: "Info",
						},
						{
							type: "LINK_LIST",
							key: "menu",
							value: "footer",
						},
					],
					disabled: false,
				},
				{
					uuid: "0518a1bd-16bd-4881-9197-36b8ba0ecea7",
					type: "text",
					settings: [
						{
							type: "TEXT",
							key: "heading",
							value: "Our mission",
						},
						{
							type: "RICHTEXT",
							key: "subtext",
							value:
								"<p>Share contact information, store details, and brand content with your customers.</p>",
						},
					],
					disabled: false,
				},
			],
		},
		pages: [
			{
				type: "home",
				name: "홈",
				path: "/home",
				sections: [],
			},

			{
				type: "login",
				name: "로그인",
				path: "/login",
				sections: [],
			},
			{
				type: "custom",
				name: "커스텀",
				path: "/custom",
				sections: [
					{
						uuid: "6dc180fd-f906-462b-8b43-6fa23138b626",
						type: "rich-text",
						disabled: false,
						settings: [
							{
								type: "SELECT",
								key: "desktop_content_position",
								value: "center",
							},
							{
								type: "SELECT",
								key: "content_alignment",
								value: "center",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-2",
							},
							{
								type: "CHECKBOX",
								key: "full_width",
								value: "false",
							},
							{
								type: "HEADER",
								key: "header-1233112d84ec21553dc16def64aa5653",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "40",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "0",
							},
						],
						blocks: [
							{
								uuid: "42f398b6-ccbb-4c29-81c3-2699f506bc4f",
								type: "heading",
								settings: [
									{
										type: "RICHTEXT",
										key: "heading",
										value: "<p>smilk008!!</p>",
									},
									{
										type: "SELECT",
										key: "heading_size",
										value: "h1",
									},
								],
								disabled: false,
							},
							{
								uuid: "d4adf653-bbbb-419b-9bc5-bc7d23f7958e",
								type: "button",
								settings: [
									{
										type: "TEXT",
										key: "button_label",
										value: "Button label",
									},
									{
										type: "URL",
										key: "button_click",
										value: "",
									},
									{
										type: "CHECKBOX",
										key: "button_style_secondary",
										value: "false",
									},
									{
										type: "TEXT",
										key: "button_label_2",
										value: "",
									},
									{
										type: "URL",
										key: "button_link_2",
										value: "",
									},
									{
										type: "CHECKBOX",
										key: "button_style_secondary_2",
										value: "false",
									},
								],
								disabled: false,
							},
							{
								uuid: "d6f5fc20-7628-4973-8beb-5d28a20e1f24",
								type: "heading",
								settings: [
									{
										type: "RICHTEXT",
										key: "heading",
										value: "<p><strong>Talk a</strong>bout your brand</p>",
									},
									{
										type: "SELECT",
										key: "heading_size",
										value: "h1",
									},
								],
								disabled: false,
							},
							{
								uuid: "99167084-a3da-4ddd-ba51-758b3a2fcb48",
								type: "text",
								settings: [
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.</p>",
									},
								],
								disabled: false,
							},
							{
								uuid: "d338e979-67fd-42ab-8a59-051322221a46",
								type: "caption",
								settings: [
									{
										type: "TEXT",
										key: "caption",
										value: "Add a tagline",
									},
									{
										type: "SELECT",
										key: "text_style",
										value: "caption-with-letter-spacing",
									},
									{
										type: "SELECT",
										key: "text_size",
										value: "medium",
									},
								],
								disabled: false,
							},
						],
					},
					{
						uuid: "6de8771f-1951-49b8-81c7-ffb231fcceda",
						type: "image-banner",
						disabled: false,
						settings: [
							{
								type: "IMAGE_PICKER",
								key: "image",
								value:
									"shopify://shop_images/ironman_4237d1cd-70f9-41fb-9505-5144d4851577.png",
							},
							{
								type: "IMAGE_PICKER",
								key: "image_2",
								value: null,
							},
							{
								type: "RANGE",
								key: "image_overlay_opacity",
								value: "100",
							},
							{
								type: "SELECT",
								key: "image_height",
								value: "large",
							},
							{
								type: "CHECKBOX",
								key: "adapt_height_first_image",
								value: "false",
							},
							{
								type: "SELECT",
								key: "desktop_content_position",
								value: "bottom-center",
							},
							{
								type: "CHECKBOX",
								key: "show_text_box",
								value: "false",
							},
							{
								type: "SELECT",
								key: "desktop_content_alignment",
								value: "center",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-2c021826f5be4d0f93315270a3b3b757",
								value: null,
							},
							{
								type: "SELECT",
								key: "mobile_content_alignment",
								value: "center",
							},
							{
								type: "CHECKBOX",
								key: "stack_images_on_mobile",
								value: "false",
							},
							{
								type: "CHECKBOX",
								key: "show_text_below",
								value: "false",
							},
						],
						blocks: [
							{
								uuid: "45a9c832-27c8-4ec7-844f-20166170f7df",
								type: "heading",
								settings: [
									{
										type: "TEXT",
										key: "heading",
										value: "Image banner 이미지!!! smilk008",
									},
									{
										type: "SELECT",
										key: "heading_size",
										value: "h0",
									},
								],
								disabled: false,
							},
							{
								uuid: "7268cd3e-c75f-4e53-b09e-1b5afab1361f",
								type: "text",
								settings: [
									{
										type: "TEXT",
										key: "text",
										value:
											"Give customers details about the banner image(s) or content on the template.",
									},
									{
										type: "SELECT",
										key: "text_style",
										value: "body",
									},
								],
								disabled: false,
							},
							{
								uuid: "2c8933c8-6fd0-4051-b13a-93182531b255",
								type: "buttons",
								settings: [
									{
										type: "TEXT",
										key: "button_label_1",
										value: "Shop all gg",
									},
									{
										type: "URL",
										key: "button_link_1",
										value: "shopify://collections/all",
									},
									{
										type: "CHECKBOX",
										key: "button_style_secondary_1",
										value: "true",
									},
									{
										type: "TEXT",
										key: "button_label_2",
										value: "",
									},
									{
										type: "URL",
										key: "button_link_2",
										value: "",
									},
									{
										type: "CHECKBOX",
										key: "button_style_secondary_2",
										value: "false",
									},
								],
								disabled: false,
							},
						],
					},
					{
						uuid: "fbe144e4-55fe-499c-a33f-3c37f5f7cc15",
						type: "featured-collection",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "title",
								value: "Featured products",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h2",
							},
							{
								type: "RICHTEXT",
								key: "description",
								value: "",
							},
							{
								type: "CHECKBOX",
								key: "show_description",
								value: "false",
							},
							{
								type: "SELECT",
								key: "description_style",
								value: "body",
							},
							{
								type: "COLLECTION",
								key: "collection",
								value: "all",
							},
							{
								type: "RANGE",
								key: "products_to_show",
								value: "8",
							},
							{
								type: "RANGE",
								key: "columns_desktop",
								value: "4",
							},
							{
								type: "CHECKBOX",
								key: "full_width",
								value: "false",
							},
							{
								type: "CHECKBOX",
								key: "show_view_all",
								value: "true",
							},
							{
								type: "SELECT",
								key: "view_all_style",
								value: "solid",
							},
							{
								type: "CHECKBOX",
								key: "enable_desktop_slider",
								value: "false",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-18108a6d2c525a37e3cadde78dc082db",
								value: null,
							},
							{
								type: "SELECT",
								key: "image_ratio",
								value: "adapt",
							},
							{
								type: "CHECKBOX",
								key: "show_secondary_image",
								value: "true",
							},
							{
								type: "CHECKBOX",
								key: "show_vendor",
								value: "false",
							},
							{
								type: "CHECKBOX",
								key: "show_rating",
								value: "false",
							},
							{
								type: "CHECKBOX",
								key: "enable_quick_add",
								value: "false",
							},
							{
								type: "HEADER",
								key: "header-737788c8cc2271868e5bda8b58e51524",
								value: null,
							},
							{
								type: "SELECT",
								key: "columns_mobile",
								value: "2",
							},
							{
								type: "CHECKBOX",
								key: "swipe_on_mobile",
								value: "false",
							},
							{
								type: "HEADER",
								key: "header-614c28eaf813711b5d6e809cd0e7f62c",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "28",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [],
					},
					{
						uuid: "e7b82b08-db32-4f4a-9657-8903df5a192b",
						type: "video",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "heading",
								value: "",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h1",
							},
							{
								type: "IMAGE_PICKER",
								key: "cover_image",
								value: null,
							},
							{
								type: "VIDEO_URL",
								key: "video_url",
								value: "https://www.youtube.com/watch?v=_9VUPq3SxOc",
							},
							{
								type: "TEXT",
								key: "description",
								value: "",
							},
							{
								type: "CHECKBOX",
								key: "full_width",
								value: "false",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-c1b7b28c54d252c77441b9b1a65cce9e",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "36",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [],
					},
					{
						uuid: "1956aeb3-466b-468d-895c-6c1680f8081c",
						type: "multicolumn",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "title",
								value: "asd",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h2",
							},
							{
								type: "SELECT",
								key: "image_width",
								value: "full",
							},
							{
								type: "SELECT",
								key: "image_ratio",
								value: "adapt",
							},
							{
								type: "RANGE",
								key: "columns_desktop",
								value: "3",
							},
							{
								type: "SELECT",
								key: "column_alignment",
								value: "left",
							},
							{
								type: "SELECT",
								key: "background_style",
								value: "none",
							},
							{
								type: "TEXT",
								key: "button_label",
								value: "",
							},
							{
								type: "URL",
								key: "button_click",
								value: "",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "SELECT",
								key: "columns_mobile",
								value: "1",
							},
							{
								type: "CHECKBOX",
								key: "swipe_on_mobile",
								value: "false",
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "36",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [
							{
								uuid: "606e82dc-300c-44b4-98ae-722c0c74c6e1",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: "shopify://shop_images/1_2.jpg",
									},
									{
										type: "TEXT",
										key: "title",
										value: "as",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value: "",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "f5352dc3-8ab4-474b-a162-5642fcc73807",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "3158510a-cb80-41ad-8495-de7c37840f3d",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value: "<p>smilk</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "1ef74c3f-1eee-4219-953a-4cfb2bbcffda",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "b98e6f02-9a9a-4b4e-a62e-f806e6a145c3",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
						],
					},
					{
						uuid: "75eb78e2-d2ec-4689-a1b0-c5efc92f5151",
						type: "collage",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "heading",
								value: "Multimedia collage",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h2",
							},
							{
								type: "SELECT",
								key: "desktop_layout",
								value: "left",
							},
							{
								type: "SELECT",
								key: "mobile_layout",
								value: "collage",
							},
							{
								type: "SELECT",
								key: "card_styles",
								value: "product-card-wrapper",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-daf20ccaf76f836c3cde1a586ace55f5",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "36",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [
							{
								uuid: "264a2047-ee36-42e4-83a2-f0d99bdff06c",
								type: "collection",
								settings: [
									{
										type: "COLLECTION",
										key: "collection",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "b55f87d7-b50a-4d04-878e-656e185cc739",
								type: "product",
								settings: [
									{
										type: "PRODUCT",
										key: "product",
										value: "",
									},
									{
										type: "CHECKBOX",
										key: "second_image",
										value: "false",
									},
								],
								disabled: false,
							},
							{
								uuid: "fa3d336f-3c7e-459e-b589-4371f99e7cbf",
								type: "collection",
								settings: [
									{
										type: "COLLECTION",
										key: "collection",
										value: "",
									},
								],
								disabled: false,
							},
						],
					},
					{
						uuid: "51b93363-3e18-4f0b-b510-4c2585e938cc",
						type: "video",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "heading",
								value: "Video",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h1",
							},
							{
								type: "IMAGE_PICKER",
								key: "cover_image",
								value: null,
							},
							{
								type: "VIDEO_URL",
								key: "video_url",
								value: "https://www.youtube.com/watch?v=_9VUPq3SxOc",
							},
							{
								type: "TEXT",
								key: "description",
								value: "",
							},
							{
								type: "CHECKBOX",
								key: "full_width",
								value: "false",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-fff9807c28ab4fbf6181527dd5f1e45b",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "36",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [],
					},
					{
						uuid: "85989e2e-488f-4a7a-8723-7407fc58b073",
						type: "multicolumn",
						disabled: false,
						settings: [
							{
								type: "TEXT",
								key: "title",
								value: "Multicolumn",
							},
							{
								type: "SELECT",
								key: "heading_size",
								value: "h1",
							},
							{
								type: "SELECT",
								key: "image_width",
								value: "full",
							},
							{
								type: "SELECT",
								key: "image_ratio",
								value: "adapt",
							},
							{
								type: "RANGE",
								key: "columns_desktop",
								value: "3",
							},
							{
								type: "SELECT",
								key: "column_alignment",
								value: "left",
							},
							{
								type: "SELECT",
								key: "background_style",
								value: "primary",
							},
							{
								type: "TEXT",
								key: "button_label",
								value: "Button label",
							},
							{
								type: "URL",
								key: "button_click",
								value: "",
							},
							{
								type: "SELECT",
								key: "color_scheme",
								value: "background-1",
							},
							{
								type: "HEADER",
								key: "header-91026678dfead8440a8ae6f250cd2ccb",
								value: null,
							},
							{
								type: "SELECT",
								key: "columns_mobile",
								value: "1",
							},
							{
								type: "CHECKBOX",
								key: "swipe_on_mobile",
								value: "false",
							},
							{
								type: "HEADER",
								key: "header-82f27b5909077cf0fcd04c20ed4cd094",
								value: null,
							},
							{
								type: "RANGE",
								key: "padding_top",
								value: "36",
							},
							{
								type: "RANGE",
								key: "padding_bottom",
								value: "36",
							},
						],
						blocks: [
							{
								uuid: "624b0bb0-42be-4c59-9cdb-fd78172b1283",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "010b7828-2817-4736-9640-661346cd2118",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: null,
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
							{
								uuid: "b3c32df0-7931-4e53-973a-c7732aafd34f",
								type: "column",
								settings: [
									{
										type: "IMAGE_PICKER",
										key: "image",
										value: "Column",
									},
									{
										type: "TEXT",
										key: "title",
										value: "Column",
									},
									{
										type: "RICHTEXT",
										key: "text",
										value:
											"<p>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>",
									},
									{
										type: "TEXT",
										key: "link_label",
										value: "",
									},
									{
										type: "URL",
										key: "link",
										value: "",
									},
								],
								disabled: false,
							},
						],
					},
				],
			},
		],
	},
};

export { dummy };
