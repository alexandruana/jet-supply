;(window.webpackJsonp =
	window.webpackJsonp ||
	[]).push([
	[12, 4],
	{
		302: function (
			t,
			e,
			n
		) {
			'use strict'
			n.r(e)
			var o = {
					name: 'FAQComponent'
				},
				r =
					n(
						25
					),
				component =
					Object(
						r.a
					)(
						o,
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
										'faq-item'
								},
								[
									e(
										'button',
										[
											e(
												'div',
												{
													staticClass:
														'flex justify-between items-center'
												},
												[
													e(
														'h3',
														{
															staticClass:
																'font-medium text-gray-900'
														},
														[
															t._v(
																'What are the steps in chartering a private jet?'
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
																		d: 'M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
																	}
																}
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
						[],
						!1,
						null,
						null,
						null
					)
			e.default =
				component.exports
		},
		323: function (
			t,
			e,
			n
		) {
			'use strict'
			n.r(e)
			var o = {
					components:
						{
							FAQComponent:
								n(
									302
								)
									.default
						},
					name: 'TestArea',
					head: function () {
						return {
							title: 'TestArea',
							meta: [
								{
									hid: 'description',
									name: 'description',
									content:
										'Test page'
								}
							]
						}
					},
					data: function () {
						return {
							show: !0
						}
					}
				},
				r =
					n(
						25
					),
				component =
					Object(
						r.a
					)(
						o,
						function () {
							var t =
								this
									._self
									._c
							return t(
								'main',
								{
									staticClass:
										'max-w-7xl mx-auto'
								},
								[
									t(
										'FAQComponent'
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
					FAQComponent:
						n(
							302
						)
							.default
				}
			)
		}
	}
])
