;(window.webpackJsonp =
	window.webpackJsonp ||
	[]).push([
	[13, 2, 3, 6, 10],
	{
		299: function (
			t,
			e,
			r
		) {
			var content =
				r(301)
			content.__esModule &&
				(content =
					content.default),
				'string' ==
					typeof content &&
					(content =
						[
							[
								t.i,
								content,
								''
							]
						]),
				content.locals &&
					(t.exports =
						content.locals)
			;(0,
			r(117)
				.default)(
				'662387eb',
				content,
				!0,
				{
					sourceMap:
						!1
				}
			)
		},
		300: function (
			t,
			e,
			r
		) {
			'use strict'
			r(299)
		},
		301: function (
			t,
			e,
			r
		) {
			var n = r(
				116
			)(function (
				i
			) {
				return i[1]
			})
			n.push([
				t.i,
				'.nuxt-logo{height:180px}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}',
				''
			]),
				(n.locals =
					{}),
				(t.exports =
					n)
		},
		303: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			r(20),
				r(21),
				r(29),
				r(30)
			var n = r(8),
				o =
					(r(
						73
					),
					r(
						40
					),
					r(
						22
					),
					r(
						41
					),
					r(9),
					r(
						17
					),
					r(
						89
					)),
				l =
					r.n(
						o
					)
			function d(
				object,
				t
			) {
				var e =
					Object.keys(
						object
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var r =
						Object.getOwnPropertySymbols(
							object
						)
					t &&
						(r =
							r.filter(
								function (
									t
								) {
									return Object.getOwnPropertyDescriptor(
										object,
										t
									)
										.enumerable
								}
							)),
						e.push.apply(
							e,
							r
						)
				}
				return e
			}
			var c = {
					name: 'ContactForm',
					data: function () {
						return {
							showModal:
								!1,
							show: !0,
							form: {
								firstName:
									'',
								lastName:
									'',
								email: '',
								message:
									''
							}
						}
					},
					methods:
						{
							encode: function (
								data
							) {
								return Object.keys(
									data
								)
									.map(
										function (
											t
										) {
											return ''
												.concat(
													encodeURIComponent(
														t
													),
													'='
												)
												.concat(
													encodeURIComponent(
														data[
															t
														]
													)
												)
										}
									)
									.join(
										'&'
									)
							},
							handleSubmit:
								function () {
									l.a.post(
										'/',
										this.encode(
											(function (
												t
											) {
												for (
													var i = 1;
													i <
													arguments.length;
													i++
												) {
													var source =
														null !=
														arguments[
															i
														]
															? arguments[
																	i
															  ]
															: {}
													i %
													2
														? d(
																Object(
																	source
																),
																!0
														  ).forEach(
																function (
																	e
																) {
																	Object(
																		n.a
																	)(
																		t,
																		e,
																		source[
																			e
																		]
																	)
																}
														  )
														: Object.getOwnPropertyDescriptors
														? Object.defineProperties(
																t,
																Object.getOwnPropertyDescriptors(
																	source
																)
														  )
														: d(
																Object(
																	source
																)
														  ).forEach(
																function (
																	e
																) {
																	Object.defineProperty(
																		t,
																		e,
																		Object.getOwnPropertyDescriptor(
																			source,
																			e
																		)
																	)
																}
														  )
												}
												return t
											})(
												{
													'form-name':
														'Contact'
												},
												this
													.form
											)
										),
										{
											header: {
												'Content-Type':
													'application/x-www-form-urlencoded'
											}
										}
									),
										(this.showModal =
											!this
												.showModal),
										console.log(
											this
												.form
										)
								},
							toggle: function () {
								;(this.showModal =
									!this
										.showModal),
									this.resetForm()
							},
							resetForm:
								function () {
									var t =
										this
									Object.keys(
										this
											.form
									).forEach(
										function (
											e,
											r
										) {
											t.form[
												e
											] =
												''
										}
									)
								}
						}
				},
				m = c,
				v =
					(r(
						300
					),
					r(
						25
					)),
				component =
					Object(
						v.a
					)(
						m,
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
										'max-w-7xl mx-auto'
								},
								[
									t._m(
										0
									),
									t._v(
										' '
									),
									e(
										'div',
										{
											staticClass:
												'mx-auto grid gap-y-5 md:gap-y-0 grid-cols-1 md:grid-cols-3 px-4 lg:px-8'
										},
										[
											e(
												'div',
												{
													staticClass:
														'p-8 md:p-12 border md:border-r-0 rounded-md md:rounded-tr-none md:rounded-br-none bg-gradient-tui'
												},
												[
													e(
														'h2',
														{
															staticClass:
																'mb-4 mt-0 text-xl text-white font-heavy'
														},
														[
															t._v(
																'\n\t\t\t\tContact information\n\t\t\t'
															)
														]
													),
													t._v(
														' '
													),
													e(
														'p',
														{
															staticClass:
																'text-base text-slate-400 mb-6'
														},
														[
															t._v(
																'\n\t\t\t\tRequest offers or find out more on how to travel hassle free through\n\t\t\t\tprivate charter.\n\t\t\t'
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
																'flex items-top mb-5 text-slate-400'
														},
														[
															e(
																'svg',
																{
																	staticClass:
																		'w-6 h-6',
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
																		'svg',
																		{
																			staticClass:
																				'w-6 h-6',
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
																						d: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
																					}
																				}
																			),
																			t._v(
																				' '
																			),
																			e(
																				'path',
																				{
																					attrs: {
																						'stroke-linecap':
																							'round',
																						'stroke-linejoin':
																							'round',
																						d: 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
																					}
																				}
																			)
																		]
																	)
																]
															),
															t._v(
																' '
															),
															t._m(
																1
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
																'flex items-center mb-5 text-slate-400'
														},
														[
															e(
																'svg',
																{
																	staticClass:
																		'w-6 h-6',
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
																				d: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
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
																		'ml-3'
																},
																[
																	t._v(
																		'\n\t\t\t\t\t+48 603 951 000\n\t\t\t\t'
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
																'flex items-center mb-5 text-slate-400'
														},
														[
															e(
																'svg',
																{
																	staticClass:
																		'w-6 h-6',
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
																				d: 'M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
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
																		'ml-3'
																},
																[
																	t._v(
																		'\n\t\t\t\t\tsales@jet-supply.com\n\t\t\t\t'
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
												'div',
												{
													staticClass:
														'col-span-2 p-8 md:p-12 bg-slate-50 border md:border-l-0 rounded-md md:rounded-tl-none md:rounded-bl-none'
												},
												[
													e(
														'p',
														{
															staticClass:
																'text-lg mb-6'
														},
														[
															t._v(
																'\n\t\t\t\tSend us a message\n\t\t\t'
															)
														]
													),
													t._v(
														' '
													),
													e(
														'form',
														{
															attrs: {
																name: 'Contact',
																method: 'POST',
																'data-netlify':
																	'true',
																'netlify-honeypot':
																	'bot-field'
															},
															on: {
																submit: function (
																	e
																) {
																	return (
																		e.preventDefault(),
																		t.handleSubmit.apply(
																			null,
																			arguments
																		)
																	)
																}
															}
														},
														[
															e(
																'input',
																{
																	attrs: {
																		type: 'hidden',
																		name: 'form-name',
																		value: 'Contact'
																	}
																}
															),
															t._v(
																' '
															),
															e(
																'div',
																{
																	staticClass:
																		'flex flex-wrap -mx-3'
																},
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0'
																		},
																		[
																			e(
																				'label',
																				{
																					staticClass:
																						'block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2',
																					attrs: {
																						for: 'first_name'
																					}
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tFirst name\n\t\t\t\t\t\t'
																					)
																				]
																			),
																			t._v(
																				' '
																			),
																			e(
																				'input',
																				{
																					directives:
																						[
																							{
																								name: 'model',
																								rawName:
																									'v-model',
																								value: t
																									.form
																									.firstName,
																								expression:
																									'form.firstName'
																							}
																						],
																					staticClass:
																						'appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
																					attrs: {
																						id: 'first_name',
																						type: 'text',
																						name: 'firstName',
																						placeholder:
																							'Jane',
																						required:
																							''
																					},
																					domProps:
																						{
																							value: t
																								.form
																								.firstName
																						},
																					on: {
																						input: function (
																							e
																						) {
																							e
																								.target
																								.composing ||
																								t.$set(
																									t.form,
																									'firstName',
																									e
																										.target
																										.value
																								)
																						}
																					}
																				}
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
																				'w-full md:w-1/2 px-3 mb-3 md:mb-6 md:mb-0'
																		},
																		[
																			e(
																				'label',
																				{
																					staticClass:
																						'block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2',
																					attrs: {
																						for: 'last_name'
																					}
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tLast name\n\t\t\t\t\t\t'
																					)
																				]
																			),
																			t._v(
																				' '
																			),
																			e(
																				'input',
																				{
																					directives:
																						[
																							{
																								name: 'model',
																								rawName:
																									'v-model',
																								value: t
																									.form
																									.lastName,
																								expression:
																									'form.lastName'
																							}
																						],
																					staticClass:
																						'appearance-none block w-full bg-transparent text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
																					attrs: {
																						id: 'last_name',
																						type: 'text',
																						name: 'lastName',
																						placeholder:
																							'Doe',
																						required:
																							''
																					},
																					domProps:
																						{
																							value: t
																								.form
																								.lastName
																						},
																					on: {
																						input: function (
																							e
																						) {
																							e
																								.target
																								.composing ||
																								t.$set(
																									t.form,
																									'lastName',
																									e
																										.target
																										.value
																								)
																						}
																					}
																				}
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
																		'flex flex-wrap -mx-3 mb-3 md:mb-6'
																},
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'w-full px-3'
																		},
																		[
																			e(
																				'label',
																				{
																					staticClass:
																						'block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2',
																					attrs: {
																						for: 'email'
																					}
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tE-mail\n\t\t\t\t\t\t'
																					)
																				]
																			),
																			t._v(
																				' '
																			),
																			e(
																				'input',
																				{
																					directives:
																						[
																							{
																								name: 'model',
																								rawName:
																									'v-model',
																								value: t
																									.form
																									.email,
																								expression:
																									'form.email'
																							}
																						],
																					staticClass:
																						'appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
																					attrs: {
																						id: 'email',
																						type: 'email',
																						name: 'email',
																						placeholder:
																							'jane@doe.com',
																						required:
																							''
																					},
																					domProps:
																						{
																							value: t
																								.form
																								.email
																						},
																					on: {
																						input: function (
																							e
																						) {
																							e
																								.target
																								.composing ||
																								t.$set(
																									t.form,
																									'email',
																									e
																										.target
																										.value
																								)
																						}
																					}
																				}
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
																		'flex flex-wrap -mx-3 mb-3 md:mb-6'
																},
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'w-full px-3'
																		},
																		[
																			e(
																				'label',
																				{
																					staticClass:
																						'block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2',
																					attrs: {
																						for: 'message'
																					}
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tMessage\n\t\t\t\t\t\t'
																					)
																				]
																			),
																			t._v(
																				' '
																			),
																			e(
																				'textarea',
																				{
																					directives:
																						[
																							{
																								name: 'model',
																								rawName:
																									'v-model',
																								value: t
																									.form
																									.message,
																								expression:
																									'form.message'
																							}
																						],
																					staticClass:
																						'no-resize appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none',
																					attrs: {
																						id: 'message',
																						name: 'message',
																						required:
																							''
																					},
																					domProps:
																						{
																							value: t
																								.form
																								.message
																						},
																					on: {
																						input: function (
																							e
																						) {
																							e
																								.target
																								.composing ||
																								t.$set(
																									t.form,
																									'message',
																									e
																										.target
																										.value
																								)
																						}
																					}
																				}
																			),
																			t._v(
																				' '
																			),
																			e(
																				'p',
																				{
																					staticClass:
																						'text-sm text-slate-400'
																				},
																				[
																					t._v(
																						'\n\t\t\t\t\t\t\tBy submitting this form you agree to our\n\t\t\t\t\t\t\t'
																					),
																					e(
																						'NuxtLink',
																						{
																							staticClass:
																								'text-jet-light hover:text-jet-dark',
																							attrs: {
																								to: '/privacypolicy'
																							}
																						},
																						[
																							t._v(
																								'\n\t\t\t\t\t\t\t\tprivacy policy\n\t\t\t\t\t\t\t'
																							)
																						]
																					),
																					t._v(
																						' which explains how we may collect, use and disclose your personal information including to third parties.\n\t\t\t\t\t\t'
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
																2
															)
														]
													),
													t._v(
														' '
													),
													e(
														'transition',
														{
															attrs: {
																name: 'fade'
															}
														},
														[
															e(
																'LazyFormModal',
																{
																	directives:
																		[
																			{
																				name: 'show',
																				rawName:
																					'v-show',
																				value: t.showModal,
																				expression:
																					'showModal'
																			}
																		],
																	on: {
																		close: t.toggle
																	}
																}
															)
														],
														1
													)
												],
												1
											)
										]
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
											'lg:text-center mb-14'
									},
									[
										e(
											'h2',
											{
												staticClass:
													'text-base text-jet-light font-semibold tracking-wide uppercase'
											},
											[
												t._v(
													'\n\t\t\tConnect\n\t\t'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-jet-dark sm:text-4xl'
											},
											[
												t._v(
													'\n\t\t\tInterested in private charter?\n\t\t'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'
											},
											[
												t._v(
													'\n\t\t\tOur team is here to provide round-the-clock support and travel advice.\n\t\t'
												)
											]
										)
									]
								)
							},
							function () {
								var t =
										this,
									e =
										t
											._self
											._c
								return e(
									'span',
									{
										staticClass:
											'ml-3'
									},
									[
										t._v(
											'\n\t\t\t\t\tHenryka Sienkiewicza 85/87,'
										),
										e(
											'br'
										),
										t._v(
											'\n\t\t\t\t\t90-057, Lodz, Poland\n\t\t\t\t'
										)
									]
								)
							},
							function () {
								var t =
									this
										._self
										._c
								return t(
									'div',
									{
										staticClass:
											'md:w-1/3'
									},
									[
										t(
											'button',
											{
												staticClass:
													'shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded',
												attrs: {
													type: 'submit'
												}
											},
											[
												this._v(
													'\n\t\t\t\t\t\tSend\n\t\t\t\t\t'
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
		},
		307: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'HeroBanner'
				},
				o =
					r(
						25
					),
				component =
					Object(
						o.a
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
										'hero__banner h-screen bg-gradient-radial bg-jet-dark flex flex-col justify-center relative bg-center bg-cover overflow-hidden'
								},
								[
									e(
										'nuxt-img',
										{
											staticClass:
												'w-full h-full object-cover absolute opacity-40',
											attrs: {
												src: '/images/praetor600.jpeg',
												alt: 'praetor 600 background'
											}
										}
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
											'container mx-auto sm:py-12 lg:py-20 xl:py-28'
									},
									[
										e(
											'div',
											{
												staticClass:
													'relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'
											},
											[
												e(
													'div',
													{
														staticClass:
															'mx-auto max-w-7xl px-4 sm:px-6 sm:mt-12 lg:px-8 md:mt-16 lg:mt-20 xl:mt-28'
													},
													[
														e(
															'div',
															{
																staticClass:
																	'sm:text-center lg:text-left'
															},
															[
																e(
																	'h1',
																	{
																		staticClass:
																			'text-4xl filter drop-shadow-custom tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'
																	},
																	[
																		e(
																			'span',
																			{
																				staticClass:
																					'block xl:inline'
																			},
																			[
																				t._v(
																					'Taking you places'
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
																					'block text-jet-light xl:inline'
																			},
																			[
																				t._v(
																					'wherever, whenever.'
																				)
																			]
																		)
																	]
																),
																t._v(
																	' '
																),
																e(
																	'p',
																	{
																		staticClass:
																			'mt-3 filter drop-shadow-custom text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
																	},
																	[
																		t._v(
																			'\n\t\t\t\t\t\tGet access to over 2,500 aircraft worldwide and plan your trips to over 73.000 unique\n\t\t\t\t\t\tairport pairs with our tailor made\n\t\t\t\t\t\ttravel solutions.\n\t\t\t\t\t'
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
							}
						],
						!1,
						null,
						null,
						null
					)
			e.default =
				component.exports
		},
		308: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'AlternateFeature'
				},
				o =
					r(
						25
					),
				component =
					Object(
						o.a
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
										'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
								},
								[
									e(
										'div',
										{
											staticClass:
												'grid sm:grid-cols-4 grid-cols-2 gap-4'
										},
										[
											t._m(
												0
											),
											t._v(
												' '
											),
											e(
												'div',
												{
													staticClass:
														'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
												},
												[
													e(
														'nuxt-img',
														{
															staticClass:
																'rounded-t-lg',
															attrs: {
																src: '/images/global6500_interior.jpeg',
																alt: 'global interior'
															}
														}
													),
													t._v(
														' '
													),
													t._m(
														1
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
														'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
												},
												[
													e(
														'nuxt-img',
														{
															staticClass:
																'rounded-t-lg',
															attrs: {
																src: '/images/heli_interior.jpg',
																alt: 'helicopter interior'
															}
														}
													),
													t._v(
														' '
													),
													t._m(
														2
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
														'max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
												},
												[
													e(
														'nuxt-img',
														{
															staticClass:
																'rounded-t-lg',
															attrs: {
																src: '/images/7series_interior_cropped.jpg',
																alt: 'limousine interior'
															}
														}
													),
													t._v(
														' '
													),
													t._m(
														3
													)
												],
												1
											)
										]
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
									[
										e(
											'h2',
											{
												staticClass:
													'text-base text-jet-light font-semibold tracking-wide uppercase'
											},
											[
												t._v(
													'What we do'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'
											},
											[
												t._v(
													'\n\t\t\t\tSeamless travel solutions\n\t\t\t'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto'
											},
											[
												t._v(
													"\n\t\t\t\tRegardless if it's a transcontinental flight or a day-return trip, we take you from A to B hasslefree.\n\t\t\t"
												)
											]
										)
									]
								)
							},
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
											'p-5'
									},
									[
										e(
											'a',
											{
												attrs: {
													href: '#'
												}
											},
											[
												e(
													'h5',
													{
														staticClass:
															'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
													},
													[
														t._v(
															'Private jets'
														)
													]
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mb-3 font-normal text-gray-700 dark:text-gray-400'
											},
											[
												t._v(
													'\n\t\t\t\t\tFind out which aircraft best suits your needs and access a wider network of airports.\n\t\t\t\t'
												)
											]
										)
									]
								)
							},
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
											'p-5'
									},
									[
										e(
											'a',
											{
												attrs: {
													href: '#'
												}
											},
											[
												e(
													'h5',
													{
														staticClass:
															'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
													},
													[
														t._v(
															'Helicopters'
														)
													]
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mb-3 font-normal text-gray-700 dark:text-gray-400'
											},
											[
												t._v(
													'\n\t\t\t\t\tGet from the aircraft to your final destination quick and easy with modern helicopters.\n\t\t\t\t'
												)
											]
										)
									]
								)
							},
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
											'p-5'
									},
									[
										e(
											'a',
											{
												attrs: {
													href: '#'
												}
											},
											[
												e(
													'h5',
													{
														staticClass:
															'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
													},
													[
														t._v(
															'Transfers'
														)
													]
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mb-3 font-normal text-gray-700 dark:text-gray-400'
											},
											[
												t._v(
													'\n\t\t\t\t\tWaste no time and have fully flexibility from touchdown to take-off with a fleet of top class vehicles.\n\t\t\t\t'
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
		},
		309: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'UniqueSellingPoints'
				},
				o =
					r(
						25
					),
				component =
					Object(
						o.a
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
										'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
								},
								[
									t._m(
										0
									),
									t._v(
										' '
									),
									e(
										'div',
										[
											e(
												'dl',
												{
													staticClass:
														'space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'
												},
												[
													e(
														'div',
														{
															staticClass:
																'relative mb-10 sm:mb-5'
														},
														[
															e(
																'dt',
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'absolute flex items-center justify-center h-12 w-12 rounded-md bg-jet-light text-white'
																		},
																		[
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
																							'2',
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
																								d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
																							}
																						}
																					)
																				]
																			)
																		]
																	),
																	t._v(
																		' '
																	),
																	e(
																		'p',
																		{
																			staticClass:
																				'ml-16 text-lg leading-6 font-medium text-gray-900'
																		},
																		[
																			t._v(
																				'Worldwide network'
																			)
																		]
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'dd',
																{
																	staticClass:
																		'mt-2 ml-16 text-base text-gray-500'
																},
																[
																	t._v(
																		"\n\t\t\t\t\tReach unparalleled flexibility with access to over three thousand aircraft worldwide, capable of flying to some of the world's most remote airports.\n\t\t\t\t"
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
																'relative mb-10 sm:mb-5'
														},
														[
															e(
																'dt',
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'absolute flex items-center justify-center h-12 w-12 rounded-md bg-jet-light text-white'
																		},
																		[
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
																							'2',
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
																								d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
																							}
																						}
																					)
																				]
																			)
																		]
																	),
																	t._v(
																		' '
																	),
																	e(
																		'p',
																		{
																			staticClass:
																				'ml-16 text-lg leading-6 font-medium text-gray-900'
																		},
																		[
																			t._v(
																				'No hidden fees'
																			)
																		]
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'dd',
																{
																	staticClass:
																		'mt-2 ml-16 text-base text-gray-500'
																},
																[
																	t._v(
																		"\n\t\t\t\t\tExperience full transparency of what's included and conclude the booking process in one easy transaction.\n\t\t\t\t"
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
																'relative mb-10 sm:mb-5'
														},
														[
															e(
																'dt',
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'absolute flex items-center justify-center h-12 w-12 rounded-md bg-jet-light text-white'
																		},
																		[
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
																							'2',
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
																								d: 'M13 10V3L4 14h7v7l9-11h-7z'
																							}
																						}
																					)
																				]
																			)
																		]
																	),
																	t._v(
																		' '
																	),
																	e(
																		'p',
																		{
																			staticClass:
																				'ml-16 text-lg leading-6 font-medium text-gray-900'
																		},
																		[
																			t._v(
																				'Easy Payments'
																			)
																		]
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'dd',
																{
																	staticClass:
																		'mt-2 ml-16 text-base text-gray-500'
																},
																[
																	t._v(
																		'\n\t\t\t\t\tTake advantage of a wide array of payment solutions, from international wire transfers to credit cards we got you covered in a couple of clicks.\n\t\t\t\t'
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
																'relative mb-10 sm:mb-5'
														},
														[
															e(
																'dt',
																[
																	e(
																		'div',
																		{
																			staticClass:
																				'absolute flex items-center justify-center h-12 w-12 rounded-md bg-jet-light text-white'
																		},
																		[
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
																							'2',
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
																								d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
																							}
																						}
																					)
																				]
																			)
																		]
																	),
																	t._v(
																		' '
																	),
																	e(
																		'p',
																		{
																			staticClass:
																				'ml-16 text-lg leading-6 font-medium text-gray-900'
																		},
																		[
																			t._v(
																				'24/7 support'
																			)
																		]
																	)
																]
															),
															t._v(
																' '
															),
															e(
																'dd',
																{
																	staticClass:
																		'mt-2 ml-16 text-base text-gray-500'
																},
																[
																	t._v(
																		'\n\t\t\t\t\tRegardless of the time of your flight, our team will assist you throughout the booking process and ensure your arrival at the final\n\t\t\t\t\tdestination stress-free.\n\t\t\t\t'
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
											'lg:text-center mb-14'
									},
									[
										e(
											'h2',
											{
												staticClass:
													'text-base text-jet-light font-semibold tracking-wide uppercase'
											},
											[
												t._v(
													'\n\t\t\tWhat we offer\n\t\t'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'
											},
											[
												t._v(
													'\n\t\t\tThe perks of flying with us\n\t\t'
												)
											]
										),
										t._v(
											' '
										),
										e(
											'p',
											{
												staticClass:
													'mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'
											},
											[
												t._v(
													'\n\t\t\tWe continuously evaluate the markets as well as enhance our processes and services\n\t\t\tto provide you with the utmost flexibility and transparency.\n\t\t'
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
		},
		324: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e)
			var n = {
					name: 'IndexPage',
					head: function () {
						return {
							title: 'Home',
							meta: [
								{
									hid: 'home-description',
									name: 'description',
									content:
										''
								}
							]
						}
					},
					components:
						{
							ContactForm:
								r(
									303
								)
									.default
						}
				},
				o =
					r(
						25
					),
				component =
					Object(
						o.a
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
								'main',
								[
									e(
										'HeroBanner'
									),
									t._v(
										' '
									),
									e(
										'div',
										{
											staticClass:
												'py-20'
										},
										[
											e(
												'AlternateFeature'
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
												'py-20 bg-slate-50'
										},
										[
											e(
												'UniqueSellingPointsFeature'
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
												'py-20 pb-10'
										},
										[
											e(
												'ContactForm'
											)
										],
										1
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
			installComponents(
				component,
				{
					HeroBanner:
						r(
							307
						)
							.default,
					AlternateFeature:
						r(
							308
						)
							.default,
					UniqueSellingPointsFeature:
						r(
							309
						)
							.default,
					ContactForm:
						r(
							303
						)
							.default
				}
			)
		}
	}
])
