;(window.webpackJsonp =
	window.webpackJsonp ||
	[]).push([
	[5],
	{
		325: function (
			t,
			e,
			o
		) {
			'use strict'
			o.r(e)
			var n = {
					name: 'FormModal'
				},
				l =
					o(
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
										'modal-overlay fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/60 z-20 px-4'
								},
								[
									e(
										'div',
										{
											staticClass:
												'modal p-10 md:px-24 md:py-16 rounded-lg bg-slate-50 shadow-md relative'
										},
										[
											e(
												'svg',
												{
													staticClass:
														'mx-auto w-20 h-20 text-jet-light mb-6',
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
																d: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
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
														'text-center'
												},
												[
													e(
														'h3',
														{
															staticClass:
																'text-xl font-semibold text-jet-light'
														},
														[
															t._v(
																'Thank you!'
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
																'mb-12 text-sm font-light'
														},
														[
															t._v(
																'Your message has now been submitted.'
															)
														]
													),
													t._v(
														' '
													),
													e(
														'button',
														{
															staticClass:
																'shadow bg-jet-light hover:bg-jet-dark focus:shadow-outline focus:outline-none text-white font-medium py-2 px-6 rounded',
															attrs: {
																type: 'button'
															},
															on: {
																click: function (
																	e
																) {
																	return t.$emit(
																		'close'
																	)
																}
															}
														},
														[
															t._v(
																'\n\t\t\t\tDone\n\t\t\t'
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
		}
	}
])
