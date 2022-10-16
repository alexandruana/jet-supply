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
'use strict'
;(self.webpackChunkPSPDFKit =
	self.webpackChunkPSPDFKit ||
	[]).push([
	[6401],
	{
		29412: function (
			e,
			t,
			n
		) {
			n.d(t, {
				W: function () {
					return d
				}
			})
			var i =
					n(
						92137
					),
				r =
					n(
						6610
					),
				s =
					n(
						5991
					),
				a =
					n(
						96156
					),
				u =
					n(
						87757
					),
				o =
					n.n(
						u
					),
				c =
					n(
						35369
					),
				l =
					n(
						33502
					),
				h =
					n(
						70545
					),
				f =
					n(
						50893
					),
				d =
					(function () {
						function e() {
							;(0,
							r.Z)(
								this,
								e
							),
								(0,
								a.Z)(
									this,
									'cachedAPStreams',
									(0,
									c.D5)()
								),
								(0,
								a.Z)(
									this,
									'pageAPStreamsPromises',
									(0,
									c.D5)()
								),
								(0,
								a.Z)(
									this,
									'annotationAPStreamPromises',
									(0,
									c.D5)()
								)
						}
						return (
							(0,
							s.Z)(
								e,
								[
									{
										key: 'cachedRenderAnnotation',
										value: function (
											e,
											t,
											n,
											r
										) {
											var s,
												a =
													this,
												u =
													this
														.provider
											;(0,
											h.kG)(
												u instanceof
													u.constructor,
												'Backend can only use backend annotation provider'
											)
											var c =
													e instanceof
													l.x_
														? null ===
																(s =
																	u._readStateCallbacks) ||
														  void 0 ===
																s
															? void 0
															: s.getFormFieldByName(
																	e.formFieldName
															  )
														: null,
												d =
													!c ||
													c instanceof
														l.Yo
														? null
														: new l.KD(
																{
																	name: c.name,
																	value:
																		void 0 !==
																		c.formattedValue
																			? c.formattedValue
																			: 'string' ==
																			  typeof c.value
																			? c.value
																			: c.values
																}
														  )
											if (
												!(0,
												f._R)(
													e,
													c
												)
											)
												return this.renderAnnotation(
													e,
													d,
													t,
													n,
													r
												)
											var p =
													!1,
												m =
													function () {
														p =
															!0
													}
											return {
												promise:
													new Promise(
														(function () {
															var s =
																(0,
																i.Z)(
																	o().mark(
																		function i(
																			s,
																			u
																		) {
																			var c,
																				l,
																				h,
																				f,
																				v,
																				g,
																				P,
																				y,
																				A,
																				S,
																				q
																			return o().wrap(
																				function (
																					i
																				) {
																					for (;;)
																						switch (
																							(i.prev =
																								i.next)
																						) {
																							case 0:
																								if (
																									((c =
																										function (
																											t
																										) {
																											var n =
																												a.annotationAPStreamPromises.get(
																													e.id
																												)
																											n &&
																												((a.annotationAPStreamPromises =
																													a.annotationAPStreamPromises.delete(
																														e.id
																													)),
																												n(
																													t
																												))
																										}),
																									(l =
																										a.annotationAPStreamPromises.get(
																											e.id
																										)),
																									(a.annotationAPStreamPromises =
																										a.annotationAPStreamPromises.set(
																											e.id,
																											s
																										)),
																									l &&
																										l(
																											null
																										),
																									(i.prev = 4),
																									(h =
																										a.pageAPStreamsPromises.get(
																											e.pageIndex
																										)))
																								) {
																									i.next = 15
																									break
																								}
																								return (
																									(f =
																										new Promise(
																											function (
																												t
																											) {
																												a.annotationAPStreamPromises =
																													a.annotationAPStreamPromises.set(
																														e.id,
																														t
																													)
																											}
																										)),
																									(i.next = 10),
																									f
																								)
																							case 10:
																								return (
																									(v =
																										i.sent),
																									s(
																										v
																									),
																									i.abrupt(
																										'return'
																									)
																								)
																							case 15:
																								return (
																									(i.next = 17),
																									h
																								)
																							case 17:
																								if (
																									!(g =
																										a.cachedAPStreams.get(
																											e.pageIndex
																										))
																								) {
																									i.next = 23
																									break
																								}
																								if (
																									!(P =
																										g
																											? g.get(
																													e.id
																											  )
																											: null)
																								) {
																									i.next = 23
																									break
																								}
																								return (
																									c(
																										P
																									),
																									i.abrupt(
																										'return'
																									)
																								)
																							case 23:
																								if (
																									((y =
																										a.renderAnnotation(
																											e,
																											d,
																											t,
																											n,
																											r
																										)),
																									(A =
																										y.promise),
																									(S =
																										y.cancel),
																									!p)
																								) {
																									i.next = 28
																									break
																								}
																								c(
																									null
																								),
																									(i.next = 34)
																								break
																							case 28:
																								return (
																									(m =
																										S),
																									(i.next = 31),
																									A
																								)
																							case 31:
																								;(q =
																									i.sent),
																									c(
																										q
																									),
																									q &&
																										a.cacheAPStream(
																											q,
																											e
																										)
																							case 34:
																								i.next = 39
																								break
																							case 36:
																								;(i.prev = 36),
																									(i.t0 =
																										i.catch(
																											4
																										)),
																									u(
																										i.t0
																									)
																							case 39:
																							case 'end':
																								return i.stop()
																						}
																				},
																				i,
																				null,
																				[
																					[
																						4,
																						36
																					]
																				]
																			)
																		}
																	)
																)
															return function (
																e,
																t
															) {
																return s.apply(
																	this,
																	arguments
																)
															}
														})()
													),
												cancel: m
											}
										}
									},
									{
										key: 'cacheAPStream',
										value: function (
											e,
											t
										) {
											var n =
												this.cachedAPStreams.get(
													t.pageIndex
												)
											n ||
												((this.cachedAPStreams =
													this.cachedAPStreams.set(
														t.pageIndex,
														(0,
														c.D5)()
													)),
												(n =
													this.cachedAPStreams.get(
														t.pageIndex
													))),
												(0,
												h.kG)(
													n
												),
												(this.cachedAPStreams =
													this.cachedAPStreams.setIn(
														[
															t.pageIndex,
															t.id
														],
														e
													))
										}
									},
									{
										key: 'clearAllPageAPStreams',
										value: function (
											e
										) {
											var t =
												this.cachedAPStreams.get(
													e
												)
											t &&
												(t.forEach(
													function (
														e
													) {
														e.release()
													}
												),
												(this.cachedAPStreams =
													this.cachedAPStreams.delete(
														e
													))),
												(this.pageAPStreamsPromises =
													this.pageAPStreamsPromises.delete(
														e
													))
										}
									},
									{
										key: 'clearPageAPStreams',
										value: function (
											e,
											t
										) {
											var n =
												this.cachedAPStreams.get(
													e
												)
											n &&
												(n
													.filter(
														function (
															e,
															n
														) {
															return t.has(
																n
															)
														}
													)
													.forEach(
														function (
															e
														) {
															e.release()
														}
													),
												(this.cachedAPStreams =
													this.cachedAPStreams.updateIn(
														[
															e
														],
														function (
															e
														) {
															return e.filter(
																function (
																	e,
																	n
																) {
																	return !t.has(
																		n
																	)
																}
															)
														}
													)))
										}
									}
								]
							),
							e
						)
					})()
		},
		1367: function (
			e,
			t,
			n
		) {
			n.d(t, {
				Z: function () {
					return c
				}
			})
			var i =
					n(
						28481
					),
				r =
					n(
						6610
					),
				s =
					n(
						5991
					),
				a =
					n(
						35369
					),
				u =
					n(
						46232
					)
			function o() {
				return !0
			}
			var c =
				(function () {
					function e(
						t
					) {
						;(0,
						r.Z)(
							this,
							e
						),
							(this.queue =
								(0,
								a.zN)()),
							(this.priorityQueue =
								(0,
								a.zN)()),
							(this.inFlightRequests =
								(0,
								a.D5)()),
							(this.inflightRequestLimit =
								t),
							(this.isDestroyed =
								!1)
					}
					return (
						(0,
						s.Z)(
							e,
							[
								{
									key: 'enqueue',
									value: function (
										e
									) {
										var t =
												this,
											n =
												arguments.length >
													1 &&
												void 0 !==
													arguments[1] &&
												arguments[1]
										if (
											this
												.isDestroyed
										)
											return {
												promise:
													new Promise(
														function () {}
													),
												cancel: function () {}
											}
										var i =
												null,
											r =
												null,
											s =
												new Promise(
													function (
														e,
														t
													) {
														;(i =
															e),
															(r =
																t)
													}
												),
											u =
												n
													? this
															.priorityQueue
													: this
															.queue,
											o =
												(0,
												a.t8)(
													u,
													e,
													{
														promise:
															s,
														resolve:
															i,
														reject: r
													}
												)
										return (
											n
												? (this.priorityQueue =
														o)
												: (this.queue =
														o),
											n
												? this.next()
												: setTimeout(
														function () {
															return t.next()
														},
														35
												  ),
											{
												promise:
													s,
												cancel: function () {
													return t._cancel(
														e
													)
												}
											}
										)
									}
								},
								{
									key: '_cancel',
									value: function (
										e
									) {
										this.queue.has(
											e
										) &&
											(this.queue =
												this.queue.delete(
													e
												)),
											this.priorityQueue.has(
												e
											) &&
												(this.priorityQueue =
													this.priorityQueue.delete(
														e
													)),
											this.inFlightRequests.has(
												e
											) &&
												(this.inFlightRequests =
													this.inFlightRequests.delete(
														e
													))
									}
								},
								{
									key: 'cancelAll',
									value: function () {
										;(this.queue =
											(0,
											a.zN)()),
											(this.priorityQueue =
												(0,
												a.zN)()),
											(this.inFlightRequests =
												(0,
												a.D5)())
									}
								},
								{
									key: '_requestFinished',
									value: function (
										e,
										t
									) {
										if (
											!this
												.isDestroyed
										) {
											var n =
												this.inFlightRequests.get(
													e
												)
											n &&
												(n.resolve(
													t
												),
												(this.inFlightRequests =
													this.inFlightRequests.delete(
														e
													))),
												this.next()
										}
									}
								},
								{
									key: '_requestFailed',
									value: function (
										e,
										t
									) {
										if (
											!this
												.isDestroyed
										) {
											var n =
												this.inFlightRequests.get(
													e
												)
											n &&
												(n.reject(
													t
												),
												(this.inFlightRequests =
													this.inFlightRequests.delete(
														e
													))),
												this.next()
										}
									}
								},
								{
									key: 'next',
									value: function () {
										var e =
											this
										if (
											!(
												this
													.isDestroyed ||
												this
													.inFlightRequests
													.size >=
													this
														.inflightRequestLimit
											)
										) {
											if (
												this
													.priorityQueue
													.size >=
												1
											) {
												var t =
													this.priorityQueue.findLastEntry(
														o
													)
												;(0,
												u.k)(
													t
												)
												var n =
														(0,
														i.Z)(
															t,
															2
														),
													r =
														n[0],
													s =
														n[1]
												return (
													(this.priorityQueue =
														this.priorityQueue.delete(
															r
														)),
													(this.inFlightRequests =
														this.inFlightRequests.set(
															r,
															s
														)),
													void r
														.request()
														.then(
															function (
																t
															) {
																return e._requestFinished(
																	r,
																	t
																)
															}
														)
														.catch(
															function (
																t
															) {
																return e._requestFailed(
																	r,
																	t
																)
															}
														)
												)
											}
											if (
												this
													.queue
													.size >=
												1
											) {
												var a =
													this.queue.findEntry(
														o
													)
												;(0,
												u.k)(
													a
												)
												var c =
														(0,
														i.Z)(
															a,
															2
														),
													l =
														c[0],
													h =
														c[1]
												;(this.queue =
													this.queue.delete(
														l
													)),
													(this.inFlightRequests =
														this.inFlightRequests.set(
															l,
															h
														)),
													l
														.request()
														.then(
															function (
																t
															) {
																return e._requestFinished(
																	l,
																	t
																)
															}
														)
														.catch(
															function (
																t
															) {
																return e._requestFailed(
																	l,
																	t
																)
															}
														)
											}
										}
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.isDestroyed =
											!0
									}
								}
							]
						),
						e
					)
				})()
		},
		42457: function (
			e,
			t,
			n
		) {
			n.d(t, {
				i: function () {
					return f
				}
			})
			var i =
					n(
						5991
					),
				r =
					n(
						6610
					),
				s =
					n(
						10379
					),
				a =
					n(
						46070
					),
				u =
					n(
						77608
					)
			function o(
				e
			) {
				var t =
					(function () {
						if (
							'undefined' ==
								typeof Reflect ||
							!Reflect.construct
						)
							return !1
						if (
							Reflect
								.construct
								.sham
						)
							return !1
						if (
							'function' ==
							typeof Proxy
						)
							return !0
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(
										Boolean,
										[],
										function () {}
									)
								),
								!0
							)
						} catch (e) {
							return !1
						}
					})()
				return function () {
					var n,
						i =
							(0,
							u.Z)(
								e
							)
					if (
						t
					) {
						var r =
							(0,
							u.Z)(
								this
							).constructor
						n =
							Reflect.construct(
								i,
								arguments,
								r
							)
					} else
						n =
							i.apply(
								this,
								arguments
							)
					return (0,
					a.Z)(
						this,
						n
					)
				}
			}
			var c =
					(function (
						e
					) {
						;(0,
						s.Z)(
							n,
							e
						)
						var t =
							o(
								n
							)
						function n() {
							return (
								(0,
								r.Z)(
									this,
									n
								),
								t.apply(
									this,
									arguments
								)
							)
						}
						return (0,
						i.Z)(
							n
						)
					})(
						n(
							35369
						).WV(
							{
								id: '',
								attachmentId:
									'',
								description:
									null,
								fileName:
									null,
								fileSize:
									null,
								updatedAt:
									null
							}
						)
					),
				l =
					n(
						55090
					)
			function h(
				e,
				t
			) {
				return t
			}
			function f(
				e,
				t
			) {
				var n =
					arguments.length >
						2 &&
					void 0 !==
						arguments[2] &&
					arguments[2]
				return h(
					0,
					n
				)
					? new c(
							{
								id: (0,
								l.C)(),
								description:
									t.fileDescription,
								attachmentId:
									e,
								fileName:
									t.fileName ||
									null,
								fileSize:
									t.fileSize ||
									null,
								updatedAt:
									t.modificationDate
										? new Date(
												t.modificationDate
										  )
										: null
							}
					  )
					: new c(
							{
								id: e,
								description:
									t.description,
								attachmentId:
									t.fileAttachmentId,
								fileName:
									t.fileName ||
									null,
								fileSize:
									t.fileSize ||
									null,
								updatedAt:
									new Date(
										t.updatedAt
									) ||
									null
							}
					  )
			}
		},
		94290: function (
			e,
			t,
			n
		) {
			n.d(t, {
				M: function () {
					return a
				}
			})
			var i =
				n(96156)
			function r(
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
					var i =
						Object.getOwnPropertySymbols(
							e
						)
					t &&
						(i =
							i.filter(
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
							i
						)
				}
				return n
			}
			function s(
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
						? r(
								Object(
									n
								),
								!0
						  ).forEach(
								function (
									t
								) {
									;(0,
									i.Z)(
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
						: r(
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
			function a(
				e,
				t,
				n,
				r,
				a,
				u
			) {
				var o
				return (
					e.has(
						n
					)
						? (o =
								e.get(
									n
								))
						: ((t[
								(o =
									a.toString())
						  ] =
								n),
						  e.set(
								n,
								o
						  )),
					s(
						s(
							{},
							r
						),
						{},
						(0,
						i.Z)(
							{},
							u,
							o
						)
					)
				)
			}
		},
		89777: function (
			e,
			t,
			n
		) {
			n.d(t, {
				E: function () {
					return u
				}
			})
			var i =
					n(
						85596
					),
				r =
					n(
						35369
					),
				s =
					n(
						70545
					),
				a =
					n(
						51908
					)
			function u(
				e
			) {
				return (
					(0,
					s.kG)(
						Array.isArray(
							e
						),
						'Wrong `json` field'
					),
					(0,
					r.aV)(
						e
							.map(
								function (
									e
								) {
									return (
										(0,
										s.kG)(
											'number' ==
												typeof e.pageIndex,
											'Wrong `pageIndex` field'
										),
										(0,
										s.kG)(
											'string' ==
												typeof e.previewText,
											'Wrong `previewText` field'
										),
										(0,
										s.kG)(
											Array.isArray(
												e.rangeInPreview
											),
											'Wrong `rangeInPreview` field'
										),
										(0,
										s.kG)(
											Array.isArray(
												e.rectsOnPage
											),
											'Wrong `rectsOnPage` field'
										),
										new a.Z(
											{
												pageIndex:
													e.pageIndex,
												previewText:
													e.previewText,
												locationInPreview:
													e
														.rangeInPreview[0],
												lengthInPreview:
													e
														.rangeInPreview[1],
												rectsOnPage:
													(0,
													r.aV)(
														e.rectsOnPage
													).map(
														function (
															e
														) {
															return (0,
															i.k)(
																e
															)
														}
													),
												isAnnotation:
													!!e.isAnnotation,
												annotationRect:
													e.annotationRect
														? (0,
														  i.k)(
																e.annotationRect
														  )
														: null
											}
										)
									)
								}
							)
							.filter(
								Boolean
							)
					)
				)
			}
		}
	}
])
