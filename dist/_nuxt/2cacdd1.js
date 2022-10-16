;(window.webpackJsonp =
	window.webpackJsonp ||
	[]).push([
	[9],
	{
		327: function (
			t,
			e,
			n
		) {
			'use strict'
			n.r(e)
			var o = {
					name: 'FormModal'
				},
				l =
					n(
						25
					),
				component =
					Object(
						l.a
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
										'modal-overlay flex justify-center items-center px-4'
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
