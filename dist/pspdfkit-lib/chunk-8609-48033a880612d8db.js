/*!
 * PSPDFKit for Web 2022.4.3 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
;(self.webpackChunkPSPDFKit =
	self.webpackChunkPSPDFKit ||
	[]).push([
	[8609],
	{
		88609: function (
			e,
			t,
			n
		) {
			'use strict'
			n.r(t),
				n.d(t, {
					default:
						function () {
							return $
						}
				})
			var a =
					n(
						90484
					),
				r =
					n(
						92137
					),
				o =
					n(
						96156
					),
				i =
					n(
						28481
					),
				s =
					n(
						87757
					),
				l =
					n.n(
						s
					),
				c =
					n(
						49477
					),
				u =
					n(
						80614
					),
				d =
					n(
						70545
					),
				f =
					n(
						46525
					),
				m =
					n(
						64214
					),
				p =
					n(
						78509
					),
				g =
					n(
						24956
					),
				v =
					n(
						35369
					),
				y =
					n(
						33502
					),
				b =
					n(
						41371
					),
				P =
					n(
						67294
					),
				h =
					n(
						94184
					),
				w =
					n.n(
						h
					),
				I =
					n(
						2316
					),
				k =
					n(
						49332
					),
				E =
					n(
						96456
					),
				N =
					n(
						15435
					),
				x =
					n(
						65827
					),
				D =
					n(
						8891
					),
				C =
					n(
						81253
					),
				S =
					n(
						22122
					),
				O =
					n(
						88594
					),
				M = [
					'type'
				]
			function Z(
				e,
				t
			) {
				var n =
					Object.keys(
						e
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var a =
						Object.getOwnPropertySymbols(
							e
						)
					t &&
						(a =
							a.filter(
								function (
									t
								) {
									return Object.getOwnPropertyDescriptor(
										e,
										t
									)
										.enumerable
								}
							)),
						n.push.apply(
							n,
							a
						)
				}
				return n
			}
			function A(
				e
			) {
				for (
					var t = 1;
					t <
					arguments.length;
					t++
				) {
					var n =
						null !=
						arguments[
							t
						]
							? arguments[
									t
							  ]
							: {}
					t % 2
						? Z(
								Object(
									n
								),
								!0
						  ).forEach(
								function (
									t
								) {
									;(0,
									o.Z)(
										e,
										t,
										n[
											t
										]
									)
								}
						  )
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(
									n
								)
						  )
						: Z(
								Object(
									n
								)
						  ).forEach(
								function (
									t
								) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(
											n,
											t
										)
									)
								}
						  )
				}
				return e
			}
			var z,
				K,
				j =
					P.memo(
						function (
							e
						) {
							var t =
									e.items,
								a =
									e.builtInItems,
								r =
									e.moveDialog,
								o =
									e.CSS_HACK,
								i =
									o
										.components
										.ToolbarButtonComponent,
								s =
									o.styles
							return t.map(
								function (
									e,
									t
								) {
									var o =
										a.find(
											function (
												t
											) {
												return (
													t.type ===
													e.type
												)
											}
										)
									if (
										'spacer' ===
										e.type
									)
										return P.createElement(
											'div',
											{
												style: {
													flex: 1
												},
												className:
													e.className,
												key: 'spacer-'.concat(
													t
												)
											}
										)
									if (
										'move' ===
											e.type &&
										o
									)
										return P.createElement(
											'div',
											{
												key: o.type,
												className:
													s.moveButtonContainer
											},
											P.createElement(
												i,
												(0,
												S.Z)(
													{},
													o,
													{
														icon: n(
															72303
														),
														className:
															w()(
																o.className,
																e.className
															),
														onPress:
															function (
																e
															) {
																o &&
																	o.onPress &&
																	o.onPress(
																		e
																	)
															}
													}
												)
											),
											r
										)
									if (
										o
									) {
										var l =
											(0,
											O.zW)(
												o.type
											)
										return P.createElement(
											i,
											(0,
											S.Z)(
												{},
												o,
												{
													key:
														o.type ||
														t,
													icon: n(
														33720
													)(
														'./'.concat(
															l,
															'.svg'
														)
													),
													onPress:
														function (
															e
														) {
															o &&
																o.onPress &&
																o.onPress(
																	e
																)
														},
													className:
														w()(
															o.className,
															e.className
														)
												}
											)
										)
									}
									if (
										'custom' ===
											e.type &&
										e.node
									) {
										e.type
										var c =
											(0,
											C.Z)(
												e,
												M
											)
										return P.createElement(
											D.Z,
											(0,
											S.Z)(
												{},
												c,
												{
													onPress:
														function (
															t
														) {
															return (
																e.onPress &&
																e.onPress(
																	t,
																	e.id
																)
															)
														},
													key:
														e.id ||
														t
												}
											)
										)
									}
									return P.createElement(
										i,
										(0,
										S.Z)(
											{},
											e,
											{
												key:
													(o &&
														o.type) ||
													t,
												onPress:
													function (
														t
													) {
														return (
															e.onPress &&
															e.onPress(
																t,
																e.id
															)
														)
													}
											}
										)
									)
								}
							)
						}
					),
				R =
					P.memo(
						function (
							e
						) {
							var t =
									e.items,
								a =
									e.builtInItems,
								r =
									e.CSS_HACK,
								o =
									r.components,
								i =
									o.ToolbarDropdownGroupComponent,
								s =
									o.ToolbarButtonComponent,
								l =
									r.styles,
								c =
									e.frameWindow,
								u =
									t.map(
										function (
											e
										) {
											var t =
													e.item,
												n =
													e.index,
												r =
													a.find(
														function (
															e
														) {
															return (
																e.type ===
																t.type
															)
														}
													)
											return r
												? {
														index: n,
														item: A(
															A(
																{},
																r
															),
															{},
															{
																className:
																	w()(
																		r.className,
																		t.className
																	),
																onPress:
																	function (
																		e
																	) {
																		r.onPress &&
																			r.onPress(
																				e
																			)
																	}
															}
														)
												  }
												: {
														item: t,
														index: n
												  }
										}
									)
							return (
								u.length >
									0 &&
								P.createElement(
									P.Fragment,
									null,
									P.createElement(
										'div',
										{
											style: {
												flex: 1
											},
											key: 'spacer-responsive'
										}
									),
									P.createElement(
										i,
										{
											icon: {
												type: 'more',
												size: {
													width: 20,
													height: 20
												}
											},
											items: u,
											discreteDropdown:
												!0,
											caretDirection:
												'down',
											role: 'menu',
											ItemComponent:
												function (
													e
												) {
													var t =
															e.item,
														r =
															e.isSelectedItem,
														o =
															e.state,
														i =
															e.itemComponentProps,
														c =
															!r &&
															a.find(
																function (
																	e
																) {
																	return (
																		e.type ===
																		t
																			.item
																			.type
																	)
																}
															)
													if (
														r
													)
														return null
													var u =
														c &&
														c.type
															? (0,
															  O.zW)(
																	c.type
															  )
															: ''
													return t
														.item
														.node
														? P.createElement(
																D.Z,
																(0,
																S.Z)(
																	{},
																	t.item,
																	{
																		onPress:
																			t
																				.item
																				.onPress
																				? function (
																						e
																				  ) {
																						return t.item.onPress(
																							e,
																							t.id
																						)
																				  }
																				: void 0,
																		key:
																			t
																				.item
																				.id ||
																			t.index
																	}
																)
														  )
														: P.createElement(
																s,
																(0,
																S.Z)(
																	{},
																	t.item,
																	{
																		role: 'menuitem',
																		className:
																			w()(
																				t
																					.item
																					.className,
																				l
																					.toolbar
																					.dropdownButton,
																				'Focused' ===
																					o &&
																					l
																						.toolbar[
																						'dropdownButton' +
																							o
																					]
																			),
																		icon: c
																			? n(
																					33720
																			  )(
																					'./'.concat(
																						u,
																						'.svg'
																					)
																			  )
																			: t
																					.item
																					.icon,
																		itemComponentProps:
																			i
																	}
																)
														  )
												},
											onSelect:
												function (
													e,
													t
												) {
													var n =
															t.item,
														a =
															n.onPress
													n.disabled ||
														(a &&
															a(
																e
															))
												},
											noInitialSelection:
												!0,
											frameWindow:
												c
										}
									)
								)
							)
						}
					),
				B =
					n(
						46232
					)
			function L(
				e,
				t
			) {
				var n =
					('undefined' !=
						typeof Symbol &&
						e[
							Symbol
								.iterator
						]) ||
					e[
						'@@iterator'
					]
				if (!n) {
					if (
						Array.isArray(
							e
						) ||
						(n =
							(function (
								e,
								t
							) {
								if (
									!e
								)
									return
								if (
									'string' ==
									typeof e
								)
									return T(
										e,
										t
									)
								var n =
									Object.prototype.toString
										.call(
											e
										)
										.slice(
											8,
											-1
										)
								'Object' ===
									n &&
									e.constructor &&
									(n =
										e
											.constructor
											.name)
								if (
									'Map' ===
										n ||
									'Set' ===
										n
								)
									return Array.from(
										e
									)
								if (
									'Arguments' ===
										n ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										n
									)
								)
									return T(
										e,
										t
									)
							})(
								e
							)) ||
						(t &&
							e &&
							'number' ==
								typeof e.length)
					) {
						n &&
							(e =
								n)
						var a = 0,
							r =
								function () {}
						return {
							s: r,
							n: function () {
								return a >=
									e.length
									? {
											done: !0
									  }
									: {
											done: !1,
											value: e[
												a++
											]
									  }
							},
							e: function (
								e
							) {
								throw e
							},
							f: r
						}
					}
					throw new TypeError(
						'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
					)
				}
				var o,
					i =
						!0,
					s =
						!1
				return {
					s: function () {
						n =
							n.call(
								e
							)
					},
					n: function () {
						var e =
							n.next()
						return (
							(i =
								e.done),
							e
						)
					},
					e: function (
						e
					) {
						;(s =
							!0),
							(o =
								e)
					},
					f: function () {
						try {
							i ||
								null ==
									n.return ||
								n.return()
						} finally {
							if (
								s
							)
								throw o
						}
					}
				}
			}
			function T(
				e,
				t
			) {
				;(null ==
					t ||
					t >
						e.length) &&
					(t =
						e.length)
				for (
					var n = 0,
						a =
							new Array(
								t
							);
					n <
					t;
					n++
				)
					a[
						n
					] =
						e[
							n
						]
				return a
			}
			function F(
				e,
				t
			) {
				var n =
					Object.keys(
						e
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var a =
						Object.getOwnPropertySymbols(
							e
						)
					t &&
						(a =
							a.filter(
								function (
									t
								) {
									return Object.getOwnPropertyDescriptor(
										e,
										t
									)
										.enumerable
								}
							)),
						n.push.apply(
							n,
							a
						)
				}
				return n
			}
			function H(
				e
			) {
				for (
					var t = 1;
					t <
					arguments.length;
					t++
				) {
					var n =
						null !=
						arguments[
							t
						]
							? arguments[
									t
							  ]
							: {}
					t % 2
						? F(
								Object(
									n
								),
								!0
						  ).forEach(
								function (
									t
								) {
									;(0,
									o.Z)(
										e,
										t,
										n[
											t
										]
									)
								}
						  )
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								e,
								Object.getOwnPropertyDescriptors(
									n
								)
						  )
						: F(
								Object(
									n
								)
						  ).forEach(
								function (
									t
								) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(
											n,
											t
										)
									)
								}
						  )
				}
				return e
			}
			var _ =
					new y.$u(
						{
							width: u.zA,
							height: u._2
						}
					),
				W =
					function (
						e
					) {
						var t =
								e.styles,
							a =
								e.formatMessage,
							r =
								e.movePreview
						return P.createElement(
							'div',
							{
								style: {
									width: e.width,
									height: e.height
								},
								className:
									w()(
										t.importedDocument,
										(0,
										o.Z)(
											{},
											t.importedDocumentMovePreview,
											r
										)
									)
							},
							P.createElement(
								'div',
								{
									className:
										t.importedDocumentIconCircle
								},
								P.createElement(
									E.Z,
									{
										src: n(
											42900
										)
									}
								)
							),
							P.createElement(
								'span',
								{
									className:
										t.importedDocumentInfo
								},
								a(
									G.documentMergedHere
								)
							)
						)
					},
				V =
					function (
						e,
						t,
						n,
						a
					) {
						var r,
							o =
								t.flatten(),
							i =
								e.map(
									function (
										e
									) {
										return {
											type: 'page',
											page: e,
											rotation: 0,
											label: e.pageLabel
										}
									}
								),
							s =
								function (
									e
								) {
									var t,
										n =
											e.dupeOf ||
											e.label,
										a = 0,
										r =
											L(
												i
											)
									try {
										for (
											r.s();
											!(t =
												r.n())
												.done;

										) {
											var o =
												t.value
											'dupeOf' in
												o &&
												null !=
													o.dupeOf &&
												o.dupeOf ===
													n &&
												null !=
													o.dupeNumber &&
												o.dupeNumber >
													a &&
												(a =
													o.dupeNumber)
										}
									} catch (e) {
										r.e(
											e
										)
									} finally {
										r.f()
									}
									return (
										a +
										1
									)
								},
							l = 0,
							c =
								L(
									o
								)
						try {
							for (
								c.s();
								!(r =
									c.n())
									.done;

							) {
								var u =
									r.value
								switch (
									u.type
								) {
									case 'addPage':
										var f =
											void 0
										null !=
										u.afterPageIndex
											? (f =
													u.afterPageIndex +
													1)
											: ((0,
											  B.k)(
													null !=
														u.beforePageIndex
											  ),
											  (f =
													u.beforePageIndex)),
											++l,
											(i =
												i.insert(
													f,
													{
														type: 'newPage',
														label: ''
															.concat(
																n(
																	G.newPage
																),
																' '
															)
															.concat(
																l
															),
														rotation: 0,
														size: new y.$u(
															{
																width: u.pageWidth,
																height: u.pageHeight
															}
														)
													}
												))
										break
									case 'removePages':
										var m,
											p =
												u.pageIndexes.map(
													function (
														e
													) {
														return i.get(
															e
														)
													}
												),
											g =
												L(
													p
												)
										try {
											for (
												g.s();
												!(m =
													g.n())
													.done;

											) {
												var v =
													m.value
												;(0,
												B.k)(
													null !=
														v
												)
												var b =
													i.indexOf(
														v
													)
												i =
													i.delete(
														b
													)
											}
										} catch (e) {
											g.e(
												e
											)
										} finally {
											g.f()
										}
										break
									case 'rotatePages':
										var P,
											h =
												L(
													u.pageIndexes
												)
										try {
											for (
												h.s();
												!(P =
													h.n())
													.done;

											) {
												var w =
														P.value,
													I =
														i.get(
															w
														)
												;(0,
												B.k)(
													null !=
														I
												)
												var k =
														void 0,
													E =
														void 0
												;(0,
												B.k)(
													'page' ===
														I.type ||
														'newPage' ===
															I.type
												)
												var N =
													I.rotation
												if (
													((E =
														90 ===
														u.rotateBy
															? 270 ===
															  N
																? 0
																: N +
																  u.rotateBy
															: 90 ===
															  N
															? 0
															: 180 ===
															  N
															? 90
															: 270 ===
															  N
															? 180
															: N +
															  u.rotateBy),
													(0,
													B.k)(
														0 ===
															E ||
															90 ===
																E ||
															180 ===
																E ||
															270 ===
																E
													),
													'page' ===
														I.type)
												)
													k =
														H(
															H(
																{},
																I
															),
															{},
															{
																rotation:
																	E
															}
														)
												else {
													if (
														'newPage' !==
														I.type
													)
														throw new d.p2(
															'Rotation is not allowed on imported documents'
														)
													k =
														H(
															H(
																{},
																I
															),
															{},
															{
																rotation:
																	E
															}
														)
												}
												i =
													i.set(
														w,
														k
													)
											}
										} catch (e) {
											h.e(
												e
											)
										} finally {
											h.f()
										}
										break
									case 'duplicatePages':
										var x,
											D =
												u.pageIndexes.map(
													function (
														e
													) {
														return i.get(
															e
														)
													}
												),
											C =
												L(
													D
												)
										try {
											for (
												C.s();
												!(x =
													C.n())
													.done;

											) {
												var S =
													x.value
												;(0,
												B.k)(
													null !=
														S
												),
													(0,
													B.k)(
														'page' ===
															S.type
													)
												var O =
														s(
															S
														),
													M =
														S.dupeOf ||
														S.label,
													Z =
														i.indexOf(
															S
														)
												i =
													i.insert(
														Z +
															1,
														Object.assign(
															{},
															S,
															{
																label: ''
																	.concat(
																		M,
																		' ('
																	)
																	.concat(
																		O,
																		')'
																	),
																dupeOf: M,
																dupeNumber:
																	O
															}
														)
													)
											}
										} catch (e) {
											C.e(
												e
											)
										} finally {
											C.f()
										}
										break
									case 'movePages':
										var A =
											u.pageIndexes
										if (
											1 ===
											A.length
										) {
											var z =
													A[0],
												K =
													void 0
											null !=
											u.beforePageIndex
												? (K =
														u.beforePageIndex)
												: ((0,
												  B.k)(
														null !=
															u.afterPageIndex
												  ),
												  (K =
														u.afterPageIndex +
														1))
											var j =
												i.get(
													z
												)
											;(0,
											B.k)(
												null !=
													j
											)
											var R =
													i.get(
														K
													),
												T =
													i.size
											;(i =
												i.delete(
													z
												)),
												K ===
												T
													? (i =
															i.push(
																j
															))
													: 0 ===
													  K
													? (i =
															i.unshift(
																j
															))
													: ((0,
													  B.k)(
															null !=
																R
													  ),
													  (i =
															i.insert(
																i.indexOf(
																	R
																),
																j
															)))
										} else {
											var F =
												A.slice().sort()
											if (
												null !=
												u.beforePageIndex
											) {
												;(0,
												B.k)(
													0 ===
														u.beforePageIndex
												)
												var _,
													W =
														F.map(
															function (
																e
															) {
																return i.get(
																	e
																)
															}
														).reverse(),
													V =
														L(
															W
														)
												try {
													for (
														V.s();
														!(_ =
															V.n())
															.done;

													) {
														var U =
															_.value
														;(0,
														B.k)(
															null !=
																U
														),
															(i =
																(i =
																	i.delete(
																		i.indexOf(
																			U
																		)
																	)).unshift(
																	U
																))
													}
												} catch (e) {
													V.e(
														e
													)
												} finally {
													V.f()
												}
											} else {
												;(0,
												B.k)(
													null !=
														u.afterPageIndex
												)
												var $ =
													i.get(
														u.afterPageIndex
													)
												;(0,
												B.k)(
													null !=
														$
												)
												var X,
													Y =
														F.map(
															function (
																e
															) {
																return i.get(
																	e
																)
															}
														).reverse(),
													J =
														L(
															Y
														)
												try {
													for (
														J.s();
														!(X =
															J.n())
															.done;

													) {
														var q =
															X.value
														;(0,
														B.k)(
															null !=
																q
														),
															(i =
																(i =
																	i.delete(
																		i.indexOf(
																			q
																		)
																	)).insert(
																	i.indexOf(
																		$
																	) +
																		1,
																	q
																))
													}
												} catch (e) {
													J.e(
														e
													)
												} finally {
													J.f()
												}
											}
										}
										break
									case 'importDocument':
										var Q =
											void 0
										'beforePageIndex' in
											u &&
										null !=
											u.beforePageIndex
											? (Q =
													u.beforePageIndex)
											: ((0,
											  B.k)(
													'afterPageIndex' in
														u &&
														null !=
															u.afterPageIndex
											  ),
											  (Q =
													u.afterPageIndex +
													1))
										var ee =
											void 0
										if (
											'string' ==
											typeof u.document
										) {
											var te =
												u.document
											;(0,
											B.k)(
												a.has(
													te
												)
											),
												(ee =
													a.get(
														te,
														'Imported Document'
													))
										} else
											(0,
											B.k)(
												'string' ==
													typeof u
														.document
														.name
											),
												(ee =
													u
														.document
														.name)
										i =
											i.insert(
												Q,
												{
													type: 'importedDocument',
													label: ee
												}
											)
										break
									case 'keepPages':
									case 'applyInstantJson':
									case 'applyXfdf':
									case 'flattenAnnotations':
									case 'performOcr':
									case 'setPageLabel':
									case 'applyRedactions':
									case 'updateMetadata':
									case 'cropPages':
										throw Error(
											'Unknown document operation'
										)
									default:
										;(0,
										d.Rz)(
											u.type
										)
								}
							}
						} catch (e) {
							c.e(
								e
							)
						} finally {
							c.f()
						}
						return i
					},
				U =
					function (
						e
					) {
						var t =
								e.pages,
							n =
								e.style,
							a =
								e.styles,
							r =
								e.previewCount
						return P.createElement(
							'div',
							{
								className:
									a.movePreview
							},
							P.createElement(
								'div',
								{
									className:
										w()(
											a.movePreviewPages,
											(0,
											o.Z)(
												{},
												a.movePreviewPagesLoose,
												'loose' ===
													n
											)
										)
								},
								t
							),
							P.createElement(
								'div',
								{
									className:
										a.movePreviewCount
								},
								r ||
									t.length
							)
						)
					},
				$ = (0,
				p.XN)(
					function (
						e
					) {
						var t,
							s =
								e.onCancel,
							p =
								e.pages,
							h =
								e.dispatch,
							C =
								e.backend,
							S =
								e.frameWindow,
							O =
								e
									.intl
									.formatMessage,
							M =
								e.onDialog,
							Z =
								e.footerItems,
							A =
								e.toolbarItems,
							T =
								P.useMemo(
									function () {
										return Z.toJS()
									},
									[
										Z
									]
								),
							F =
								P.useMemo(
									function () {
										return A.toJS()
									},
									[
										A
									]
								),
							$ =
								e
									.CSS_HACK
									.styles,
							X =
								P.useState(
									(0,
									v.D5)()
								),
							Y =
								(0,
								i.Z)(
									X,
									2
								),
							J =
								Y[0],
							q =
								(Y[1],
								P.useState(
									(0,
									v.aV)()
								)),
							Q =
								(0,
								i.Z)(
									q,
									2
								),
							ee =
								Q[0],
							te =
								Q[1],
							ne =
								P.useState(
									0
								),
							ae =
								(0,
								i.Z)(
									ne,
									2
								),
							re =
								ae[0],
							oe =
								ae[1],
							ie =
								ee.slice(
									0,
									ee.size -
										re
								),
							se =
								V(
									e.pages,
									ie,
									O,
									J
								),
							le =
								P.useState(
									(0,
									v.l4)()
								),
							ce =
								(0,
								i.Z)(
									le,
									2
								),
							ue =
								ce[0],
							de =
								ce[1],
							fe =
								P.useState(
									!1
								),
							me =
								(0,
								i.Z)(
									fe,
									2
								),
							pe =
								me[0],
							ge =
								me[1],
							ve =
								P.useState(
									!1
								),
							ye =
								(0,
								i.Z)(
									ve,
									2
								),
							be =
								ye[0],
							Pe =
								ye[1],
							he =
								P.useRef(
									null
								),
							we =
								P.useRef(
									null
								),
							Ie =
								P.useState(
									!1
								),
							ke =
								(0,
								i.Z)(
									Ie,
									2
								),
							Ee =
								ke[0],
							Ne =
								ke[1],
							xe =
								P.useState(
									''
								),
							De =
								(0,
								i.Z)(
									xe,
									2
								),
							Ce =
								De[0],
							Se =
								De[1],
							Oe =
								P.useCallback(
									function () {
										var e =
											we.current
										null !=
											e &&
											(Ee &&
											e
												.ownerDocument
												.activeElement !==
												e
												? e.focus()
												: Ee ||
												  e
														.ownerDocument
														.activeElement !==
														e ||
												  e.blur())
									},
									[
										Ee
									]
								),
							Me =
								P.useCallback(
									function (
										e
									) {
										Ne(
											e
										),
											Oe(),
											M(
												e
											)
									},
									[
										M,
										Oe
									]
								)
						P.useEffect(
							function () {
								Oe()
							},
							[
								Oe
							]
						)
						var Ze =
								P.useCallback(
									function (
										e
									) {
										te(
											ie.push(
												e
											)
										),
											oe(
												0
											)
									},
									[
										ie
									]
								),
							Ae =
								P.useRef(
									!0
								)
						P.useLayoutEffect(
							function () {
								return function () {
									Ae.current &&
										(Ae.current =
											!1)
								}
							},
							[]
						)
						var ze =
								P.useCallback(
									function () {
										var e =
												p.get(
													0
												),
											t =
												e
													? e.pageSize
													: _,
											n =
												{
													type: 'addPage',
													backgroundColor:
														y
															.Il
															.WHITE,
													pageWidth:
														t.width,
													pageHeight:
														t.height,
													rotateBy: 0
												}
										1 ===
										ue.size
											? (n.afterPageIndex =
													ue.first())
											: (n.beforePageIndex = 0),
											Ze(
												n
											),
											de(
												ue.clear()
											)
									},
									[
										p,
										ue,
										Ze
									]
								),
							Ke =
								P.useCallback(
									function () {
										Ze(
											{
												type: 'removePages',
												pageIndexes:
													ue.toArray()
											}
										),
											de(
												ue.clear()
											)
									},
									[
										Ze,
										ue
									]
								),
							je =
								P.useCallback(
									function () {
										Ze(
											{
												type: 'duplicatePages',
												pageIndexes:
													ue.toArray()
											}
										),
											de(
												ue.clear()
											)
									},
									[
										Ze,
										ue
									]
								),
							Re =
								P.useCallback(
									function () {
										Ze(
											{
												type: 'rotatePages',
												pageIndexes:
													ue.toArray(),
												rotateBy: 270
											}
										)
									},
									[
										Ze,
										ue
									]
								),
							Be =
								P.useCallback(
									function () {
										Ze(
											{
												type: 'rotatePages',
												pageIndexes:
													ue.toArray(),
												rotateBy: 90
											}
										)
									},
									[
										Ze,
										ue
									]
								),
							Le =
								P.useCallback(
									function () {
										Me(
											!Ee
										)
									},
									[
										Ee,
										Me
									]
								),
							Te =
								P.useCallback(
									function (
										e
									) {
										var t =
												e
													.target
													.value,
											n =
												t,
											a =
												parseInt(
													t,
													10
												)
										isNaN(
											a
										) ||
											(n =
												Math.min(
													Math.max(
														a,
														0
													),
													se.size
												).toString()),
											Se(
												n
											)
									},
									[
										se.size
									]
								),
							Fe =
								parseInt(
									Ce,
									10
								),
							He =
								P.useCallback(
									function (
										e
									) {
										var t
										return (
											1 ===
												e.size ||
											null ==
												e
													.sort()
													.find(
														function (
															e
														) {
															var n =
																!1
															return (
																null !=
																	t &&
																	(n =
																		e !==
																		t +
																			1),
																(t =
																	e),
																n
															)
														}
													)
										)
									},
									[]
								),
							_e =
								P.useCallback(
									function (
										e,
										t
									) {
										var n =
												null !=
												t
													? t
													: ue,
											a =
												He(
													n
												)
										return !(
											n.includes(
												e -
													1
											) ||
											(0 ===
												e &&
												a &&
												n.includes(
													0
												)) ||
											(a &&
												n
													.sort()
													.first() ===
													e)
										)
									},
									[
										ue,
										He
									]
								),
							We =
								!isNaN(
									Fe
								) &&
								_e(
									Fe
								),
							Ve =
								P.useCallback(
									function (
										e,
										t
									) {
										var n =
												null !=
												t
													? t
													: ue,
											a =
												e -
												1
										Ze(
											H(
												{
													type: 'movePages',
													pageIndexes:
														n.toArray()
												},
												0 ===
													e
													? {
															beforePageIndex: 0
													  }
													: {
															afterPageIndex:
																a
													  }
											)
										)
										var r =
												(0,
												v.l4)(),
											o = 0
										0 !==
											e &&
											((o =
												a +
												1),
											n.forEach(
												function (
													e
												) {
													e <
														a &&
														--o
												}
											))
										var i =
											o
										n.forEach(
											function () {
												;(r =
													r.add(
														i
													)),
													++i
											}
										),
											de(
												r
											)
									},
									[
										ue,
										Ze,
										de
									]
								),
							Ue =
								P.useCallback(
									function (
										e
									) {
										e.preventDefault(),
											We &&
												(Ve(
													Fe
												),
												Me(
													!1
												))
									},
									[
										We,
										Fe,
										Me,
										Ve
									]
								),
							$e =
								P.useCallback(
									function (
										e
									) {
										var t =
											e.target
										if (
											Ee &&
											!t.classList.contains(
												$.moveToolbarButton
											)
										) {
											var n =
												he.current
											;(0,
											B.k)(
												null !=
													n
											),
												n.contains(
													t
												) ||
													Me(
														!1
													)
										}
									},
									[
										Ee,
										Me,
										$.moveToolbarButton
									]
								),
							Ge =
								P.useCallback(
									function () {
										var e =
											ue
												.sort()
												.toList()
												.map(
													function (
														e
													) {
														return {
															type: 'movePages',
															pageIndexes:
																[
																	e
																],
															beforePageIndex:
																e -
																1
														}
													}
												)
										Ze(
											e
										),
											de(
												(0,
												v.l4)(
													ue
														.toArray()
														.map(
															function (
																e
															) {
																return (
																	e -
																	1
																)
															}
														)
												)
											)
									},
									[
										Ze,
										ue
									]
								),
							Xe =
								P.useCallback(
									function () {
										var e =
											ue
												.sort()
												.toList()
												.map(
													function (
														e
													) {
														return {
															type: 'movePages',
															pageIndexes:
																[
																	e
																],
															afterPageIndex:
																e +
																1
														}
													}
												)
										Ze(
											e
										),
											de(
												(0,
												v.l4)(
													ue
														.toArray()
														.map(
															function (
																e
															) {
																return (
																	e +
																	1
																)
															}
														)
												)
											)
									},
									[
										Ze,
										ue
									]
								),
							Ye =
								P.useCallback(
									function () {
										de(
											ue.clear()
										),
											oe(
												re +
													1
											)
									},
									[
										ue,
										re
									]
								),
							Je =
								P.useCallback(
									function () {
										de(
											ue.clear()
										),
											oe(
												re -
													1
											)
									},
									[
										ue,
										re
									]
								),
							qe =
								P.useCallback(
									(0,
									r.Z)(
										l().mark(
											function e() {
												var t,
													n
												return l().wrap(
													function (
														e
													) {
														for (;;)
															switch (
																(e.prev =
																	e.next)
															) {
																case 0:
																	;(t =
																		{}),
																		1 ===
																		ue.size
																			? (t.afterPageIndex =
																					ue.first())
																			: (t.beforePageIndex = 0),
																		((n =
																			document.createElement(
																				'input'
																			)).type =
																			'file'),
																		(n.accept =
																			'application/pdf'),
																		(n.onclick =
																			function (
																				e
																			) {
																				;(0,
																				B.k)(
																					e.target instanceof
																						HTMLInputElement
																				),
																					(e.target.value =
																						'')
																			}),
																		(n.onchange =
																			function (
																				e
																			) {
																				var n
																				if (
																					((0,
																					B.k)(
																						e.target instanceof
																							HTMLInputElement
																					),
																					0 !==
																						(null ===
																							(n =
																								e
																									.target
																									.files) ||
																						void 0 ===
																							n
																							? void 0
																							: n.length))
																				) {
																					var r,
																						o =
																							ie,
																						i =
																							L(
																								e
																									.target
																									.files
																							)
																					try {
																						var s =
																							function () {
																								var e =
																									r.value
																								return 'string' !=
																									typeof e.name ||
																									0 ===
																										e
																											.name
																											.length
																									? {
																											v: void 0
																									  }
																									: 'application/pdf' !==
																									  e.type
																									? ((0,
																									  d.wp)(
																											'The uploaded file must be a PDF.'
																									  ),
																									  {
																											v: void 0
																									  })
																									: -1 !==
																									  se.findIndex(
																											function (
																												t
																											) {
																												return (
																													'importedDocument' ===
																														t.type &&
																													t.label ===
																														e.name
																												)
																											}
																									  )
																									? {
																											v: void 0
																									  }
																									: void (o =
																											o.push(
																												H(
																													{
																														type: 'importDocument',
																														treatImportedDocumentAsOnePage:
																															!0,
																														document:
																															e
																													},
																													t
																												)
																											))
																							}
																						for (
																							i.s();
																							!(r =
																								i.n())
																								.done;

																						) {
																							var l =
																								s()
																							if (
																								'object' ===
																								(0,
																								a.Z)(
																									l
																								)
																							)
																								return l.v
																						}
																					} catch (e) {
																						i.e(
																							e
																						)
																					} finally {
																						i.f()
																					}
																					te(
																						o
																					),
																						oe(
																							0
																						),
																						de(
																							ue.clear()
																						)
																				}
																			}),
																		n.click()
																case 8:
																case 'end':
																	return e.stop()
															}
													},
													e
												)
											}
										)
									),
									[
										ue,
										J,
										Ze,
										ie,
										se
									]
								),
							Qe =
								P.useCallback(
									function () {
										de(
											se
												.keySeq()
												.toSet()
										)
									},
									[
										se,
										de
									]
								),
							et =
								P.useCallback(
									function () {
										de(
											ue.clear()
										)
									},
									[
										ue,
										de
									]
								),
							tt =
								P.useCallback(
									function (
										e
									) {
										ue.has(
											e
										)
											? de(
													ue.delete(
														e
													)
											  )
											: de(
													ue.add(
														e
													)
											  )
									},
									[
										ue,
										de
									]
								),
							nt =
								P.useCallback(
									function () {
										s()
									},
									[
										s
									]
								),
							at =
								P.useCallback(
									function () {
										ge(
											!0
										),
											h(
												(0,
												f.b_)(
													ie
														.flatten()
														.toArray(),
													function () {
														Ae.current &&
															ge(
																!1
															)
													},
													function (
														e
													) {
														throw (
															(Ae.current &&
																ge(
																	!1
																),
															e)
														)
													}
												)
											)
									},
									[
										h,
										ie
									]
								),
							rt =
								P.useCallback(
									(0,
									r.Z)(
										l().mark(
											function e() {
												var t
												return l().wrap(
													function (
														e
													) {
														for (;;)
															switch (
																(e.prev =
																	e.next)
															) {
																case 0:
																	return (
																		ge(
																			!0
																		),
																		(e.prev = 1),
																		(e.next = 4),
																		C.exportPDFWithOperations(
																			ie
																				.flatten()
																				.toArray()
																				.map(
																					b.kg
																				)
																		)
																	)
																case 4:
																	;(t =
																		e.sent),
																		(0,
																		g.cR)(
																			t,
																			S
																		),
																		(e.next = 11)
																	break
																case 8:
																	throw (
																		((e.prev = 8),
																		(e.t0 =
																			e.catch(
																				1
																			)),
																		e.t0)
																	)
																case 11:
																	return (
																		(e.prev = 11),
																		Ae.current &&
																			ge(
																				!1
																			),
																		e.finish(
																			11
																		)
																	)
																case 14:
																case 'end':
																	return e.stop()
															}
													},
													e,
													null,
													[
														[
															1,
															8,
															11,
															14
														]
													]
												)
											}
										)
									),
									[
										C,
										ie,
										S
									]
								),
							ot =
								function (
									e,
									t,
									n,
									a
								) {
									var r,
										o =
											se.get(
												e
											)
									switch (
										((0,
										B.k)(
											null !=
												o
										),
										o.type)
									) {
										case 'page':
											r =
												P.createElement(
													c.Z,
													{
														key: 'page-'.concat(
															o.label
														),
														page: o.page,
														size: t,
														maxSize:
															n,
														rotation:
															o.rotation
													}
												)
											break
										case 'newPage':
											var i =
													(0,
													c.X)(
														o.size,
														o.rotation,
														t,
														n
													),
												s =
													i.rotatedWidth,
												l =
													i.rotatedHeight
											r =
												P.createElement(
													'div',
													{
														key: 'newPage-'.concat(
															o.label
														),
														className:
															$.newPage,
														style: {
															width: s,
															height: l
														}
													}
												)
											break
										case 'importedDocument':
											var u =
													(0,
													c.X)(
														_,
														0,
														t,
														n
													),
												f =
													u.containerWidth,
												m =
													u.containerHeight
											r =
												P.createElement(
													W,
													{
														width: f,
														height: m,
														movePreview:
															a,
														key: 'importedDoc-'.concat(
															o.label
														),
														styles: $,
														formatMessage:
															O
													}
												)
											break
										default:
											;(r =
												P.createElement(
													P.Fragment,
													null
												)),
												(0,
												d.Rz)(
													o.type
												)
									}
									return {
										item: r,
										label: o.label,
										props:
											'page' ===
											o.type
												? {
														'data-original-page-index':
															o
																.page
																.pageIndex
												  }
												: {}
									}
								},
							it =
								ue.size >
									0 &&
								ue.size !==
									se.size &&
								!pe,
							st =
								ue.size >
									0 &&
								void 0 ===
									ue.find(
										function (
											e
										) {
											var t =
												se.get(
													e
												)
											return (
												(0,
												B.k)(
													null !=
														t
												),
												'page' !==
													t.type &&
													'newPage' !==
														t.type
											)
										}
									),
							lt =
								ue.size >
									0 &&
								void 0 ===
									ue.find(
										function (
											e
										) {
											var t =
												se.get(
													e
												)
											return (
												(0,
												B.k)(
													null !=
														t
												),
												'page' !==
													t.type
											)
										}
									),
							ct =
								!ue.isEmpty() &&
								ue.size !==
									se.size &&
								!pe,
							ut =
								!ue.isEmpty() &&
								!ue.includes(
									0
								),
							dt =
								!ue.isEmpty() &&
								!ue.includes(
									se.size -
										1
								),
							ft =
								re <
								ee.size,
							mt =
								re >
								0,
							pt =
								ue.size <
									se.size &&
								!pe,
							gt =
								!ue.isEmpty() &&
								!pe,
							vt =
								P.useRef(
									null
								),
							yt =
								P.useRef(
									!1
								)
						P.useLayoutEffect(
							function () {
								var e =
									vt.current
								if (
									null !=
									e
								) {
									yt.current ||
										(e.focus(),
										(yt.current =
											!0))
									var t =
										function (
											e
										) {
											if (
												(null ==
													document.activeElement ||
													'INPUT' !==
														document
															.activeElement
															.tagName) &&
												!pe
											) {
												var t =
														e.key.toLowerCase(),
													n =
														e.metaKey ||
														e.ctrlKey,
													a =
														n &&
														!e.shiftKey &&
														!e.altKey,
													r =
														e.altKey &&
														!n &&
														!e.shiftKey,
													o =
														!n &&
														!e.shiftKey &&
														!e.altKey
												if (
													e.altKey &&
													e.shiftKey &&
													!n &&
													'arrowleft' ===
														t &&
													st
												)
													Re()
												else if (
													e.altKey &&
													e.shiftKey &&
													!n &&
													'arrowright' ===
														t &&
													st
												)
													Be()
												else if (
													r &&
													'arrowleft' ===
														t &&
													ut
												)
													Ge()
												else if (
													r &&
													'arrowright' ===
														t &&
													dt
												)
													Xe()
												else if (
													n &&
													e.shiftKey &&
													!e.altKey &&
													'z' ===
														t &&
													mt
												)
													Je()
												else if (
													a &&
													'z' ===
														t &&
													ft
												)
													Ye()
												else if (
													a &&
													'a' ===
														t &&
													pt
												)
													Qe()
												else if (
													a &&
													'd' ===
														t &&
													gt
												)
													et()
												else if (
													o &&
													'n' ===
														t
												)
													ze()
												else if (
													o &&
													'd' ===
														t &&
													it
												)
													Ke()
												else if (
													o &&
													'c' ===
														t &&
													lt
												)
													je()
												else if (
													o &&
													'l' ===
														t &&
													st
												)
													Re()
												else if (
													o &&
													'r' ===
														t &&
													st
												)
													Be()
												else if (
													o &&
													'm' ===
														t &&
													ct
												)
													Me(
														!0
													)
												else {
													if (
														!o ||
														'i' !==
															t
													)
														return
													qe()
												}
												e.preventDefault()
											}
										}
									return (
										e.addEventListener(
											'keydown',
											t
										),
										function () {
											e.removeEventListener(
												'keydown',
												t
											)
										}
									)
								}
							},
							[
								lt,
								ct,
								ut,
								dt,
								mt,
								it,
								st,
								pt,
								gt,
								ft,
								ze,
								je,
								qe,
								Ge,
								Xe,
								Je,
								Ke,
								Re,
								Be,
								Qe,
								et,
								Ye,
								pe,
								Me
							]
						)
						var bt =
								$
									.toolbar
									.toolbarButton,
							Pt =
								[
									{
										type: 'add',
										onPress:
											ze,
										className:
											bt,
										disabled:
											pe,
										children:
											O(
												G.newPage
											)
									},
									{
										type: 'remove',
										onPress:
											Ke,
										className:
											bt,
										disabled:
											!it,
										children:
											O(
												G.removePage
											)
									},
									{
										type: 'duplicate',
										onPress:
											je,
										className:
											bt,
										children:
											O(
												G.duplicatePage
											),
										disabled:
											!lt ||
											pe
									},
									{
										type: 'rotate-left',
										onPress:
											Re,
										className:
											bt,
										children:
											O(
												G.rotatePageLeft
											),
										disabled:
											!st ||
											pe
									},
									{
										type: 'rotate-right',
										onPress:
											Be,
										className:
											bt,
										children:
											O(
												G.rotatePageRight
											),
										disabled:
											!st ||
											pe
									},
									{
										type: 'move',
										onPress:
											Le,
										className:
											w()(
												bt,
												$.moveToolbarButton
											),
										children:
											O(
												G.openMoveDialog
											),
										disabled:
											!ct
									},
									{
										type: 'move-left',
										onPress:
											Ge,
										className:
											$
												.toolbar
												.toolbarButton,
										children:
											O(
												G.moveBefore
											),
										disabled:
											!ut ||
											pe
									},
									{
										type: 'move-right',
										onPress:
											Xe,
										className:
											bt,
										children:
											O(
												G.moveAfter
											),
										disabled:
											!dt ||
											pe
									},
									{
										type: 'import-document',
										onPress:
											qe,
										className:
											bt,
										children:
											O(
												G.mergeDocument
											),
										disabled:
											pe
									},
									{
										type: 'spacer'
									},
									{
										type: 'undo',
										onPress:
											Ye,
										className:
											bt,
										children:
											O(
												I
													.Z
													.undo
											),
										disabled:
											!ft ||
											pe
									},
									{
										type: 'redo',
										onPress:
											Je,
										className:
											bt,
										children:
											O(
												I
													.Z
													.redo
											),
										disabled:
											!mt ||
											pe
									},
									{
										type: 'select-all',
										onPress:
											Qe,
										className:
											bt,
										children:
											O(
												G.selectAll
											),
										disabled:
											!pt
									},
									{
										type: 'select-none',
										onPress:
											et,
										className:
											bt,
										children:
											O(
												G.selectNone
											),
										disabled:
											!gt
									}
								],
							ht =
								P.useState(
									Number.POSITIVE_INFINITY
								),
							wt =
								(0,
								i.Z)(
									ht,
									2
								),
							It =
								wt[0],
							kt =
								wt[1],
							Et =
								P.useMemo(
									function () {
										return It ===
											Number.POSITIVE_INFINITY
											? [
													F,
													[]
											  ]
											: [
													F.slice(
														0,
														It
													),
													F.slice(
														It
													)
														.filter(
															function (
																e
															) {
																return (
																	'spacer' !==
																	e.type
																)
															}
														)
														.map(
															function (
																e,
																t
															) {
																return {
																	index: t,
																	item: H(
																		H(
																			{},
																			e
																		),
																		{},
																		{
																			dropdownGroup:
																				'documentEditor'
																		}
																	)
																}
															}
														)
											  ]
									},
									[
										F,
										It
									]
								),
							Nt =
								(0,
								i.Z)(
									Et,
									2
								),
							xt =
								Nt[0],
							Dt =
								Nt[1],
							Ct =
								P.useState(
									new y.$u()
								),
							St =
								(0,
								i.Z)(
									Ct,
									2
								),
							Ot =
								St[0],
							Mt =
								St[1],
							Zt =
								P.useCallback(
									function (
										e
									) {
										Mt(
											function (
												t
											) {
												return (
													t.width !==
														e.width &&
														kt(
															Number.POSITIVE_INFINITY
														),
													new y.$u(
														{
															width: e.width,
															height: e.height
														}
													)
												)
											}
										)
									},
									[
										Mt,
										kt
									]
								),
							At =
								P.useRef(
									null
								)
						P.useLayoutEffect(
							function () {
								var e =
									At.current
								if (
									e &&
									0 !==
										Ot.width
								) {
									var t =
										e.children
									if (
										t.length !==
										It
									) {
										var n =
												e.ownerDocument.defaultView.getComputedStyle(
													e
												),
											a =
												44 +
												(parseInt(
													n.getPropertyValue(
														'padding-left'
													)
												) ||
													0) +
												(parseInt(
													n.getPropertyValue(
														'padding-right'
													)
												) ||
													0),
											r =
												[].findIndex.call(
													t,
													function (
														e,
														t
													) {
														return (
															'spacer' !==
																F[
																	t
																]
																	.type &&
															(a +=
																e.clientWidth) >
																Ot.width
														)
													}
												)
										kt(
											-1 ===
												r
												? Number.POSITIVE_INFINITY
												: r
										),
											e
												.ownerDocument
												.defaultView
												.innerWidth >=
											u.Fg
												? Pe(
														!0
												  )
												: Pe(
														!1
												  )
									}
								}
							},
							[
								Ot,
								It,
								kt,
								F
							]
						)
						var zt,
							Kt =
								P.useCallback(
									function (
										e
									) {
										'Escape' ===
											e.key &&
											Ee &&
											(Me(
												!1
											),
											e.stopPropagation())
									},
									[
										Ee,
										Me
									]
								),
							jt =
								P.useMemo(
									function () {
										return (
											null !=
											xt.find(
												function (
													e
												) {
													return (
														'move' ===
														e.type
													)
												}
											)
										)
									},
									[
										xt
									]
								),
							Rt =
								P.createElement(
									'div',
									{
										className:
											w()(
												$.moveDialog,
												((t =
													{}),
												(0,
												o.Z)(
													t,
													$.moveDialogShown,
													Ee
												),
												(0,
												o.Z)(
													t,
													$.moveDialogDetached,
													!jt
												),
												t),
												'PSPDFKit-DocumentEditor-MoveDialog'
											),
										ref: he
									},
									P.createElement(
										'form',
										{
											onSubmit:
												Ue,
											className:
												$.moveDialogForm
										},
										P.createElement(
											'span',
											{
												className:
													$.moveDialogFormLabel
											},
											O(
												G.insertAfterPage
											)
										),
										P.createElement(
											'input',
											{
												className:
													$.moveDialogFormInput,
												type: 'number',
												min: '0',
												max: se.size,
												value: Ce,
												onChange:
													Te,
												ref: we
											}
										),
										P.createElement(
											m.zx,
											{
												type: 'submit',
												className:
													$.moveDialogMoveButton,
												disabled:
													!We
											},
											O(
												G.move
											)
										)
									),
									P.createElement(
										'div',
										{
											className:
												$.moveDialogHint
										},
										P.createElement(
											'p',
											{
												className:
													$.moveDialogHintText
											},
											O(
												G.docEditorMoveBeginningHint
											)
										)
									)
								),
							Bt =
								P.useCallback(
									function (
										e,
										t
									) {
										var n =
											(0,
											v.l4)(
												e
											)
										_e(
											t,
											n
										) &&
											Ve(
												t,
												n
											)
									},
									[
										Ve,
										_e
									]
								),
							Lt =
								Ee &&
								!isNaN(
									Fe
								)
						if (
							Lt
						) {
							var Tt =
									ue
										.toList()
										.sort()
										.map(
											function (
												e
											) {
												return ot(
													e,
													160,
													160,
													!0
												)
													.item
											}
										)
										.toArray(),
								Ft =
									P.createElement(
										U,
										{
											pages: Tt,
											style: 'straight',
											styles: $
										}
									)
							Lt &&
								((zt =
									0 ===
									Fe
										? {
												previewContent:
													Ft,
												pageIndex: 0,
												position:
													'left'
										  }
										: {
												previewContent:
													Ft,
												pageIndex:
													Fe -
													1,
												position:
													'right'
										  }),
								We ||
									(zt.disabled =
										!0))
						}
						var Ht =
								P.useMemo(
									function () {
										var e
										return {
											cancel: {
												element:
													P.createElement(
														m.zx,
														null,
														O(
															I
																.Z
																.cancel
														)
													),
												onPress:
													nt
											},
											'selected-pages':
												{
													element:
														P.createElement(
															'div',
															null,
															P.createElement(
																'div',
																{
																	className:
																		$.pagesSelectedIcon
																},
																P.createElement(
																	E.Z,
																	{
																		src: n(
																			17233
																		)
																	}
																)
															),
															O(
																G.pagesSelected,
																{
																	arg0: ue.size
																}
															)
														),
													className:
														w()(
															((e =
																{}),
															(0,
															o.Z)(
																e,
																$.pagesSelectedIndicator,
																!0
															),
															(0,
															o.Z)(
																e,
																$.pagesSelectedIndicatorShown,
																ue.size >
																	0
															),
															e)
														)
												},
											spacer: {
												element:
													z ||
													(z =
														P.createElement(
															'div',
															null
														)),
												className:
													$.spacer
											},
											'loading-indicator':
												{
													element:
														K ||
														(K =
															P.createElement(
																N.Z,
																null
															)),
													hide: !pe
												},
											'save-as':
												{
													element:
														P.createElement(
															m.zx,
															null,
															O(
																I
																	.Z
																	.saveAs
															)
														),
													onPress:
														rt,
													disabled:
														pe
												},
											save: {
												element:
													P.createElement(
														m.zx,
														{
															primary:
																!0
														},
														O(
															I
																.Z
																.save
														)
													),
												disabled:
													ie.isEmpty() ||
													pe,
												onPress:
													at
											}
										}
									},
									[
										$,
										O,
										nt,
										rt,
										at,
										pe,
										ie,
										G,
										ue
									]
								),
							_t =
								P.useMemo(
									function () {
										return T.map(
											function (
												e,
												t
											) {
												var n =
														e.onPress,
													a =
														e.className,
													r =
														e.type,
													o =
														e.node,
													i =
														e.id
												if (
													((0,
													B.k)(
														r
													),
													'custom' ===
														r)
												)
													return o
														? P.createElement(
																D.Z,
																{
																	className:
																		a,
																	onPress:
																		n
																			? function (
																					e
																			  ) {
																					return n(
																						e,
																						i
																					)
																			  }
																			: void 0,
																	key:
																		i ||
																		t,
																	node: o
																}
														  )
														: null
												var s =
													Ht[
														r
													]
												return s.hide
													? null
													: P.cloneElement(
															s.element,
															{
																onClick:
																	function (
																		e
																	) {
																		s.onPress &&
																			s.onPress(
																				e
																			)
																	},
																key: r,
																disabled:
																	s.disabled,
																className:
																	w()(
																		s.className,
																		a
																	)
															}
													  )
											}
										)
									},
									[
										T,
										Ht
									]
								)
						return P.createElement(
							'div',
							{
								className:
									w()(
										$.docEditor,
										'PSPDFKit-DocumentEditor'
									),
								onClick:
									$e,
								onKeyDown:
									Kt,
								tabIndex:
									'-1',
								ref: vt
							},
							P.createElement(
								'div',
								{
									className:
										w()(
											$
												.toolbar
												.root,
											$.toolbarRoot,
											'PSPDFKit-DocumentEditor-Toolbar'
										),
									style: {
										flex: 0
									}
								},
								P.createElement(
									'div',
									{
										ref: At,
										className:
											$.toolbarContainer
									},
									P.createElement(
										j,
										{
											items: xt,
											builtInItems:
												Pt,
											moveDialog:
												Rt,
											CSS_HACK:
												e.CSS_HACK
										}
									)
								),
								P.createElement(
									R,
									{
										builtInItems:
											Pt,
										items: Dt,
										CSS_HACK:
											e.CSS_HACK,
										frameWindow:
											S
									}
								)
							),
							P.createElement(
								'div',
								{
									className:
										$.pagesView
								},
								P.createElement(
									x.Z,
									{
										onResize:
											Zt
									}
								),
								!jt &&
									Rt,
								P.createElement(
									'div',
									{
										className:
											w()(
												$.pagesGrid,
												(0,
												o.Z)(
													{},
													$.pagesGridLargeThumbnails,
													be
												)
											)
									},
									P.createElement(
										k.Z,
										{
											canInsert:
												function (
													e,
													t
												) {
													return _e(
														t,
														(0,
														v.l4)(
															e
														)
													)
												},
											totalItems:
												se.size,
											width: Ot.width,
											height: Ot.height,
											itemScale:
												e.scale,
											renderItemCallback:
												ot,
											renderDragPreviewCallback:
												function (
													e,
													t,
													n,
													a
												) {
													var r =
														(0,
														v.aV)(
															e
														)
															.filter(
																function (
																	e
																) {
																	return (
																		e !==
																		t
																	)
																}
															)
															.sort()
															.push(
																t
															)
															.slice(
																-5
															)
															.map(
																function (
																	e
																) {
																	return ot(
																		e,
																		n,
																		a,
																		!0
																	)
																		.item
																}
															)
															.toArray()
													return P.createElement(
														U,
														{
															pages: r,
															style: 'straight',
															styles: $,
															previewCount:
																e.length
														}
													)
												},
											onItemPress:
												tt,
											selectedItemIndexes:
												ue,
											cssPrefix:
												'PSPDFKit-DocumentEditor',
											moveCursor:
												null !=
												zt
													? zt
													: void 0,
											onItemsMove:
												Ee
													? void 0
													: Bt
										}
									)
								)
							),
							P.createElement(
								'div',
								{
									className:
										w()(
											$.bottomBar,
											'PSPDFKit-DocumentEditor-Footer'
										)
								},
								_t
							)
						)
					}
				),
				G = (0,
				p.vU)({
					newPage:
						{
							id: 'newPage',
							defaultMessage:
								'New Page',
							description:
								'Add new page'
						},
					removePage:
						{
							id: 'removePage',
							defaultMessage:
								'Remove Page',
							description:
								'Remove page'
						},
					duplicatePage:
						{
							id: 'duplicatePage',
							defaultMessage:
								'Duplicate Page',
							description:
								'Duplicate page'
						},
					rotatePageLeft:
						{
							id: 'rotatePageLeft',
							defaultMessage:
								'Rotate Page Left',
							description:
								'Rotate Page Left'
						},
					rotatePageRight:
						{
							id: 'rotatePageRight',
							defaultMessage:
								'Rotate Page Right',
							description:
								'Rotate Page Right'
						},
					mergeDocument:
						{
							id: 'mergeDocument',
							defaultMessage:
								'Merge Document',
							description:
								'Merge Document'
						},
					selectAll:
						{
							id: 'selectAll',
							defaultMessage:
								'Select All',
							description:
								'Select All Pages'
						},
					selectNone:
						{
							id: 'selectNone',
							defaultMessage:
								'Select None',
							description:
								'Deselect All Pages'
						},
					openMoveDialog:
						{
							id: 'openMoveDialog',
							defaultMessage:
								'Move…',
							description:
								'Open dialog for moving pages to specific location in the document'
						},
					move: {
						id: 'move',
						defaultMessage:
							'Move',
						description:
							'Move pages to specific location in the document'
					},
					moveBefore:
						{
							id: 'moveBefore',
							defaultMessage:
								'Move Before',
							description:
								'Move page before previous one'
						},
					moveAfter:
						{
							id: 'moveAfter',
							defaultMessage:
								'Move After',
							description:
								'Move page after next one'
						},
					documentMergedHere:
						{
							id: 'documentMergedHere',
							defaultMessage:
								'Document will be merged here',
							description:
								'Placeholder for the imported document'
						},
					pagesSelected:
						{
							id: 'pagesSelected',
							defaultMessage:
								'{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }',
							description:
								'Number of pages selected.'
						},
					insertAfterPage:
						{
							id: 'insertAfterPage',
							defaultMessage:
								'Insert after page',
							description:
								'Move selected pages after designated page index.'
						},
					docEditorMoveBeginningHint:
						{
							id: 'docEditorMoveBeginningHint',
							defaultMessage:
								'Type “0” to move selected pages to the beginning of the document.',
							description:
								'Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor.'
						}
				})
		},
		33720: function (
			e,
			t,
			n
		) {
			var a = {
				'./add.svg': 14809,
				'./duplicate.svg': 89950,
				'./extract.svg': 61030,
				'./help.svg': 19774,
				'./importDocument.svg': 42900,
				'./move.svg': 72303,
				'./moveLeft.svg': 40020,
				'./moveRight.svg': 46716,
				'./multiplePages.svg': 17233,
				'./redo.svg': 68433,
				'./remove.svg': 89316,
				'./rotateLeft.svg': 10003,
				'./rotateRight.svg': 17756,
				'./selectAll.svg': 56070,
				'./selectNone.svg': 48767,
				'./undo.svg': 16751
			}
			function r(
				e
			) {
				var t =
					o(e)
				return n(
					t
				)
			}
			function o(
				e
			) {
				if (
					!n.o(
						a,
						e
					)
				) {
					var t =
						new Error(
							"Cannot find module '" +
								e +
								"'"
						)
					throw (
						((t.code =
							'MODULE_NOT_FOUND'),
						t)
					)
				}
				return a[
					e
				]
			}
			;(r.keys =
				function () {
					return Object.keys(
						a
					)
				}),
				(r.resolve =
					o),
				(e.exports =
					r),
				(r.id = 33720)
		}
	}
])
