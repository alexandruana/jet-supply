;(window.webpackJsonp =
	window.webpackJsonp ||
	[]).push([
	[0],
	{
		209: function (
			t,
			e,
			r
		) {
			'use strict'
			var n = {
					name: 'default'
				},
				l =
					r(
						25
					),
				component =
					Object(
						l.a
					)(
						n,
						function () {
							var t =
									this,
								e =
									t
										._self
										._c
							return e(
								'div',
								{
									staticClass:
										'flex flex-col h-screen justify-between'
								},
								[
									e(
										'NavBar'
									),
									t._v(
										' '
									),
									e(
										'Nuxt'
									),
									t._v(
										' '
									),
									e(
										'TailwindFooter'
									)
								],
								1
							)
						},
						[],
						!1,
						null,
						null,
						null
					)
			e.a =
				component.exports
			installComponents(
				component,
				{
					NavBar: r(
						295
					)
						.default,
					TailwindFooter:
						r(
							296
						)
							.default
				}
			)
		},
		210: function (
			t,
			e,
			r
		) {
			r(211),
				(t.exports =
					r(
						212
					))
		},
		295: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'NavBar',
					data: function () {
						return {
							isOpen: !1
						}
					},
					methods:
						{
							toggle: function () {
								this.isOpen =
									!this
										.isOpen
							}
						}
				},
				l =
					r(
						25
					),
				component =
					Object(
						l.a
					)(
						n,
						function () {
							var t =
									this,
								e =
									t
										._self
										._c
							return e(
								'div',
								{
									staticClass:
										'relative bg-white'
								},
								[
									e(
										'div',
										{
											staticClass:
												'mx-auto px-4 md:px-6 max-w-7xl'
										},
										[
											e(
												'div',
												{
													staticClass:
														'flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10'
												},
												[
													e(
														'div',
														{
															staticClass:
																'flex justify-start lg:w-0 lg:flex-1'
														},
														[
															e(
																'NuxtLink',
																{
																	staticClass:
																		'text-2xl font-semibold',
																	attrs: {
																		to: '/'
																	}
																},
																[
																	t._v(
																		'\n\t\t\t\t\tJet'
																	),
																	e(
																		'span',
																		{
																			staticClass:
																				'text-jet-light'
																		},
																		[
																			t._v(
																				'Supply'
																			)
																		]
																	)
																]
															)
														],
														1
													),
													t._v(
														' '
													),
													e(
														'div',
														{
															staticClass:
																'-my-2 -mr-2 md:hidden'
														},
														[
															e(
																'button',
																{
																	staticClass:
																		'inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
																	attrs: {
																		type: 'button',
																		'aria-expanded':
																			'false'
																	},
																	on: {
																		click: t.toggle
																	}
																},
																[
																	e(
																		'span',
																		{
																			staticClass:
																				'sr-only'
																		},
																		[
																			t._v(
																				'Open menu'
																			)
																		]
																	),
																	t._v(
																		' '
																	),
																	e(
																		'svg',
																		{
																			staticClass:
																				'h-6 w-6',
																			attrs: {
																				xmlns: 'http://www.w3.org/2000/svg',
																				fill: 'none',
																				viewBox:
																					'0 0 24 24',
																				'stroke-width':
																					'1.5',
																				stroke: 'currentColor',
																				'aria-hidden':
																					'true'
																			}
																		},
																		[
																			e(
																				'path',
																				{
																					attrs: {
																						'stroke-linecap':
																							'round',
																						'stroke-linejoin':
																							'round',
																						d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
																					}
																				}
																			)
																		]
																	)
																]
															)
														]
													),
													t._v(
														' '
													),
													e(
														'nav',
														{
															staticClass:
																'hidden space-x-10 md:flex'
														},
														[
															e(
																'NuxtLink',
																{
																	staticClass:
																		'text-base font-medium text-gray-500 hover:text-gray-900',
																	attrs: {
																		to: '/'
																	}
																},
																[
																	t._v(
																		'Home'
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'NuxtLink',
																{
																	staticClass:
																		'text-base font-medium text-gray-500 hover:text-gray-900',
																	attrs: {
																		to: '/privacypolicy'
																	}
																},
																[
																	t._v(
																		'Privacy policy'
																	)
																]
															)
														],
														1
													)
												]
											)
										]
									),
									t._v(
										' '
									),
									e(
										'transition',
										[
											e(
												'div',
												{
													directives:
														[
															{
																name: 'show',
																rawName:
																	'v-show',
																value: t.isOpen,
																expression:
																	'isOpen'
															}
														],
													staticClass:
														'absolute z-50 inset-x-0 top-0 origin-top-right transform transition md:hidden'
												},
												[
													e(
														'div',
														{
															staticClass:
																'rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'
														},
														[
															e(
																'div',
																{
																	staticClass:
																		'px-4 pt-5 pb-6'
																},
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'flex items-center justify-between'
																		},
																		[
																			e(
																				'NuxtLink',
																				{
																					staticClass:
																						'text-2xl font-semibold',
																					attrs: {
																						to: '/'
																					}
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tJet'
																					),
																					e(
																						'span',
																						{
																							staticClass:
																								'text-jet-light'
																						},
																						[
																							t._v(
																								'Supply'
																							)
																						]
																					)
																				]
																			),
																			t._v(
																				' '
																			),
																			e(
																				'div',
																				{
																					staticClass:
																						'-my-2 -mr-2'
																				},
																				[
																					e(
																						'button',
																						{
																							staticClass:
																								'inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
																							attrs: {
																								type: 'button'
																							},
																							on: {
																								click: t.toggle
																							}
																						},
																						[
																							e(
																								'span',
																								{
																									staticClass:
																										'sr-only'
																								},
																								[
																									t._v(
																										'Close menu'
																									)
																								]
																							),
																							t._v(
																								' '
																							),
																							e(
																								'svg',
																								{
																									staticClass:
																										'h-6 w-6',
																									attrs: {
																										xmlns: 'http://www.w3.org/2000/svg',
																										fill: 'none',
																										viewBox:
																											'0 0 24 24',
																										'stroke-width':
																											'1.5',
																										stroke: 'currentColor',
																										'aria-hidden':
																											'true'
																									}
																								},
																								[
																									e(
																										'path',
																										{
																											attrs: {
																												'stroke-linecap':
																													'round',
																												'stroke-linejoin':
																													'round',
																												d: 'M6 18L18 6M6 6l12 12'
																											}
																										}
																									)
																								]
																							)
																						]
																					)
																				]
																			)
																		],
																		1
																	),
																	t._v(
																		' '
																	),
																	e(
																		'div',
																		{
																			staticClass:
																				'mt-6'
																		},
																		[
																			e(
																				'nav',
																				{
																					staticClass:
																						'grid gap-y-8'
																				},
																				[
																					e(
																						'NuxtLink',
																						{
																							staticClass:
																								'-m-3 flex items-center rounded-md p-3 hover:bg-gray-50',
																							attrs: {
																								to: '/'
																							}
																						},
																						[
																							e(
																								'svg',
																								{
																									staticClass:
																										'h-6 w-6 flex-shrink-0 text-jet-light',
																									attrs: {
																										xmlns: 'http://www.w3.org/2000/svg',
																										fill: 'none',
																										viewBox:
																											'0 0 24 24',
																										'stroke-width':
																											'1.5',
																										stroke: 'currentColor'
																									}
																								},
																								[
																									e(
																										'path',
																										{
																											attrs: {
																												'stroke-linecap':
																													'round',
																												'stroke-linejoin':
																													'round',
																												d: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
																											}
																										}
																									)
																								]
																							),
																							t._v(
																								' '
																							),
																							e(
																								'span',
																								{
																									staticClass:
																										'ml-3 text-base font-medium text-gray-900'
																								},
																								[
																									t._v(
																										'Home'
																									)
																								]
																							)
																						]
																					),
																					t._v(
																						' '
																					),
																					e(
																						'NuxtLink',
																						{
																							staticClass:
																								'-m-3 flex items-center rounded-md p-3 hover:bg-gray-50',
																							attrs: {
																								to: '/privacypolicy'
																							}
																						},
																						[
																							e(
																								'svg',
																								{
																									staticClass:
																										'h-6 w-6 flex-shrink-0 text-jet-light',
																									attrs: {
																										xmlns: 'http://www.w3.org/2000/svg',
																										fill: 'none',
																										viewBox:
																											'0 0 24 24',
																										'stroke-width':
																											'1.5',
																										stroke: 'currentColor'
																									}
																								},
																								[
																									e(
																										'path',
																										{
																											attrs: {
																												'stroke-linecap':
																													'round',
																												'stroke-linejoin':
																													'round',
																												d: 'M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
																											}
																										}
																									)
																								]
																							),
																							t._v(
																								' '
																							),
																							e(
																								'span',
																								{
																									staticClass:
																										'ml-3 text-base font-medium text-gray-900'
																								},
																								[
																									t._v(
																										'Privacy policy'
																									)
																								]
																							)
																						]
																					)
																				],
																				1
																			)
																		]
																	)
																]
															)
														]
													)
												]
											)
										]
									)
								],
								1
							)
						},
						[],
						!1,
						null,
						null,
						null
					)
			e.default =
				component.exports
		},
		296: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'TailwindFooter'
				},
				l =
					r(
						25
					),
				component =
					Object(
						l.a
					)(
						n,
						function () {
							var t =
									this,
								e =
									t
										._self
										._c
							return e(
								'footer',
								{
									staticClass:
										'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900'
								},
								[
									e(
										'div',
										{
											staticClass:
												'max-w-7xl mx-auto'
										},
										[
											e(
												'div',
												{
													staticClass:
														'sm:flex sm:items-center sm:justify-between'
												},
												[
													e(
														'NuxtLink',
														{
															staticClass:
																'flex items-center mb-4 sm:mb-0 text-2xl font-semibold',
															attrs: {
																to: '/'
															}
														},
														[
															t._v(
																'\n\t\t\t\tJet'
															),
															e(
																'span',
																{
																	staticClass:
																		'text-jet-light'
																},
																[
																	t._v(
																		'Supply'
																	)
																]
															)
														]
													),
													t._v(
														' '
													),
													e(
														'div',
														{
															staticClass:
																'mb-8 md:mb-0'
														},
														[
															e(
																'h2',
																{
																	staticClass:
																		'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'
																},
																[
																	t._v(
																		'Navigation'
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'ul',
																{
																	staticClass:
																		'text-gray-600 dark:text-gray-400'
																},
																[
																	e(
																		'li',
																		{
																			staticClass:
																				'mb-4'
																		},
																		[
																			e(
																				'NuxtLink',
																				{
																					staticClass:
																						'hover:text-gray-900',
																					attrs: {
																						to: '/'
																					}
																				},
																				[
																					t._v(
																						'Home'
																					)
																				]
																			)
																		],
																		1
																	),
																	t._v(
																		' '
																	),
																	e(
																		'li',
																		[
																			e(
																				'NuxtLink',
																				{
																					staticClass:
																						'hover:text-gray-900',
																					attrs: {
																						to: '/privacypolicy'
																					}
																				},
																				[
																					t._v(
																						'Privacy policy'
																					)
																				]
																			)
																		],
																		1
																	)
																]
															)
														]
													),
													t._v(
														' '
													),
													t._m(
														0
													)
												],
												1
											)
										]
									),
									t._v(
										' '
									),
									e(
										'hr',
										{
											staticClass:
												'my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'
										}
									),
									t._v(
										' '
									),
									e(
										'span',
										{
											staticClass:
												'block text-sm text-gray-500 sm:text-center dark:text-gray-400'
										},
										[
											t._v(
												'\n\t\t© 2022 '
											),
											e(
												'NuxtLink',
												{
													attrs: {
														to: '/'
													}
												},
												[
													t._v(
														'JetSupply'
													)
												]
											),
											t._v(
												'. All Rights Reserved.\n\t'
											)
										],
										1
									)
								]
							)
						},
						[
							function () {
								var t =
										this,
									e =
										t
											._self
											._c
								return e(
									'div',
									{
										staticClass:
											'mb-8 md:mb-0'
									},
									[
										e(
											'h2',
											{
												staticClass:
													'mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'
											},
											[
												t._v(
													'Contact'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'ul',
											{
												staticClass:
													'text-gray-600 dark:text-gray-400'
											},
											[
												e(
													'li',
													{
														staticClass:
															'mb-4'
													},
													[
														e(
															'a',
															{
																attrs: {
																	href: 'mailto:sales@jet-supply.com'
																}
															},
															[
																t._v(
																	'sales@jet-supply.com'
																)
															]
														)
													]
												),
												t._v(
													' '
												),
												e(
													'li',
													{
														staticClass:
															'mb-4'
													},
													[
														e(
															'p',
															[
																t._v(
																	'+48 603 951 000'
																)
															]
														)
													]
												)
											]
										)
									]
								)
							}
						],
						!1,
						null,
						null,
						null
					)
			e.default =
				component.exports
		}
	},
	[[210, 14, 1, 15]]
])
