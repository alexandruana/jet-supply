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
	[2333],
	{
		20251: function (
			e,
			t,
			n
		) {
			n.r(t),
				n.d(t, {
					InstantProvider:
						function () {
							return pe
						}
				})
			var i =
					n(
						92137
					),
				s =
					n(
						81253
					),
				r =
					n(
						6610
					),
				o =
					n(
						5991
					),
				a =
					n(
						96156
					),
				c =
					n(
						87757
					),
				l =
					n.n(
						c
					),
				u =
					n(
						35369
					),
				d =
					n(
						70545
					),
				h =
					n(
						41371
					),
				f =
					n(
						81928
					),
				p =
					n(
						51983
					),
				m =
					n(
						10379
					),
				v =
					n(
						46070
					),
				k =
					n(
						77608
					)
			function y(
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
							k.Z)(
								e
							)
					if (
						t
					) {
						var s =
							(0,
							k.Z)(
								this
							).constructor
						n =
							Reflect.construct(
								i,
								arguments,
								s
							)
					} else
						n =
							i.apply(
								this,
								arguments
							)
					return (0,
					v.Z)(
						this,
						n
					)
				}
			}
			var _ =
				(function (
					e
				) {
					;(0,
					m.Z)(
						n,
						e
					)
					var t =
						y(
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
					o.Z)(
						n
					)
				})(
					u.WV(
						{
							clientId:
								'',
							userId: null,
							presenceContent:
								{}
						}
					)
				)
			function g(
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
							k.Z)(
								e
							)
					if (
						t
					) {
						var s =
							(0,
							k.Z)(
								this
							).constructor
						n =
							Reflect.construct(
								i,
								arguments,
								s
							)
					} else
						n =
							i.apply(
								this,
								arguments
							)
					return (0,
					v.Z)(
						this,
						n
					)
				}
			}
			var C =
					(function (
						e
					) {
						;(0,
						m.Z)(
							n,
							e
						)
						var t =
							g(
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
						o.Z)(
							n
						)
					})(
						u.WV(
							{
								status: 'offline',
								currentClient:
									null,
								clients:
									(0,
									u.D5)()
							}
						)
					),
				b =
					n(
						28481
					),
				F =
					n(
						85061
					),
				w =
					n(
						14968
					),
				R =
					n(
						34415
					),
				I =
					(function () {
						function e(
							t,
							n
						) {
							;(0,
							r.Z)(
								this,
								e
							),
								(this.callback =
									t),
								(this.timerCalc =
									n),
								(this.timer =
									null),
								(this.tries = 0)
						}
						return (
							(0,
							o.Z)(
								e,
								[
									{
										key: 'reset',
										value: function () {
											;(this.tries = 0),
												this
													.timer &&
													clearTimeout(
														this
															.timer
													)
										}
									},
									{
										key: 'scheduleTimeout',
										value: function () {
											var e =
												this
											this
												.timer &&
												clearTimeout(
													this
														.timer
												),
												(this.timer =
													setTimeout(
														function () {
															;(e.tries =
																e.tries +
																1),
																e.callback()
														},
														this.timerCalc(
															this
																.tries +
																1
														)
													))
										}
									}
								]
							),
							e
						)
					})(),
				x =
					n(
						46232
					),
				Z =
					'0.0.1',
				S = 0,
				V = 1,
				P = 2,
				A = {
					name: 'PSPDFKit-Web'
				},
				q =
					function (
						e
					) {
						return (
							[
								1e3,
								2e3
							][
								e -
									1
							] ||
							5e3
						)
					},
				E =
					(function () {
						function e(
							t,
							n
						) {
							var i =
									this,
								s =
									arguments.length >
										2 &&
									void 0 !==
										arguments[2]
										? arguments[2]
										: {},
								o =
									s.reconnectTimerCalc,
								a =
									void 0 ===
									o
										? q
										: o,
								c =
									s.enableReconnect,
								l =
									void 0 ===
										c ||
									c,
								d =
									s.events,
								h =
									void 0 ===
									d
										? []
										: d
							;(0,
							r.Z)(
								this,
								e
							),
								(this.eventEmitter =
									new R.Z(
										[
											'connect',
											'disconnect',
											'error'
										].concat(
											h
										)
									)),
								(this.serverURL =
									t),
								(this.authPayload =
									n),
								(this.socket =
									null),
								(this.lastRequestId = 0),
								(this.requestsWaitingForAnswers =
									(0,
									u.D5)()),
								l &&
									(this.reconnectTimer =
										new I(
											function () {
												i.socket &&
													(i.socket.close(),
													(i.socket =
														null)),
													i.connect()
											},
											a
										)),
								this.clearAuthenticationInformation()
						}
						return (
							(0,
							o.Z)(
								e,
								[
									{
										key: 'registerEvents',
										value: function (
											e
										) {
											var t
											;(t =
												this
													.eventEmitter
													.events).push.apply(
												t,
												(0,
												F.Z)(
													e
												)
											)
										}
									},
									{
										key: 'connect',
										value: function () {
											var e =
												this
											if (
												!this
													.socket
											) {
												var t =
													new WebSocket(
														this.serverURL
													)
												;(t.onopen =
													this.onOpen.bind(
														this
													)),
													(t.onmessage =
														this.onMessage.bind(
															this
														)),
													(t.onerror =
														function () {
															;(e.socket =
																null),
																e.eventEmitter.emit(
																	'error',
																	'Failed to create the WebSocket connection to '.concat(
																		e.serverURL,
																		'. '
																	) +
																		'Please check your firewall or proxy settings.'
																)
														}),
													(this.socket =
														t)
											}
										}
									},
									{
										key: 'disconnect',
										value: function () {
											this
												.socket &&
												((this.socket.onclose =
													function () {}),
												this.socket.close(),
												this.clearAuthenticationInformation(),
												this.abortOpenRequests(),
												this.eventEmitter.emit(
													'disconnect'
												))
										}
									},
									{
										key: 'connectionState',
										get: function () {
											switch (
												this
													.socket &&
												this
													.socket
													.readyState
											) {
												case S:
													return 'connecting'
												case V:
													return 'open'
												case P:
													return 'closing'
												default:
													return 'closed'
											}
										}
									},
									{
										key: 'isAuthenticated',
										get: function () {
											return (
												'' !==
												this
													.clientId
											)
										}
									},
									{
										key: 'sendRequest',
										value: function (
											e,
											t
										) {
											var n =
												this
											return new Promise(
												function (
													i,
													s
												) {
													if (
														n.isAuthenticated &&
														n.socket
													) {
														var r =
																n.nextRequestId(),
															o =
																JSON.stringify(
																	t
																)
														;(n.requestsWaitingForAnswers =
															n.requestsWaitingForAnswers.set(
																r,
																{
																	resolve:
																		i,
																	reject: s
																}
															)),
															n.socket.send(
																''
																	.concat(
																		r,
																		':'
																	)
																	.concat(
																		e,
																		':'
																	)
																	.concat(
																		o
																	)
															)
													} else
														s(
															new d.p2(
																'Cannot send request when the connection is not authenticated'
															)
														)
												}
											)
										}
									},
									{
										key: 'on',
										value: function (
											e,
											t
										) {
											this.eventEmitter.on(
												e,
												t
											)
										}
									},
									{
										key: 'off',
										value: function (
											e,
											t
										) {
											this.eventEmitter.off(
												e,
												t
											)
										}
									},
									{
										key: 'onOpen',
										value: function () {
											var e =
												this
													.socket
											e &&
												((e.onerror =
													this.onError.bind(
														this
													)),
												(e.onclose =
													this.onClose.bind(
														this
													)))
										}
									},
									{
										key: 'onMessage',
										value: function (
											e
										) {
											var t =
												e.data
											if (
												this
													.isAuthenticated
											) {
												var n =
													this.parseFrame(
														t
													)
												if (
													n.requestId
												) {
													var i =
														n.requestId
													;(0,
													x.k)(
														this.requestsWaitingForAnswers.has(
															i
														),
														'Received a reply with an unknown request ID.'
													)
													var s =
														this.requestsWaitingForAnswers.get(
															i
														)
													switch (
														((0,
														x.k)(
															s
														),
														n.action)
													) {
														case 'ok':
															s.resolve(
																n.payload
															)
															break
														case 'error':
															s.reject(
																new d.p2(
																	n
																		.payload
																		.reason ||
																		'Unknown error'
																)
															)
															break
														default:
															;(0,
															x.k)(
																!1,
																''.concat(
																	n.action,
																	' is not a valid request reply'
																)
															)
													}
													this.requestsWaitingForAnswers =
														this.requestsWaitingForAnswers.delete(
															i
														)
												} else
													this.eventEmitter.events.includes(
														n.action
													) &&
														this.eventEmitter.emit(
															n.action,
															n.payload
														),
														this.log(
															'incoming info message',
															n
														)
											} else {
												var r =
													this.parseUnauthenticatedFrame(
														t
													)
												switch (
													r.action
												) {
													case 'hello':
														this.onHello(
															r.payload
														)
														break
													case 'authenticated':
														this.onAuthenticated(
															r.payload
														)
														break
													case 'error':
														this.eventEmitter.emit(
															'error',
															r
																.payload
																.reason ||
																'Unknown error'
														)
												}
											}
										}
									},
									{
										key: 'onClose',
										value: function (
											e
										) {
											this.clearAuthenticationInformation(),
												this.abortOpenRequests(),
												this
													.reconnectTimer &&
													this.reconnectTimer.scheduleTimeout(),
												this.eventEmitter.emit(
													'disconnect'
												),
												this.log(
													'close',
													e
												)
										}
									},
									{
										key: 'onError',
										value: function (
											e
										) {
											this
												.reconnectTimer &&
												this.reconnectTimer.scheduleTimeout(),
												this.log(
													'error',
													e
												)
										}
									},
									{
										key: 'nextRequestId',
										value: function () {
											var e =
												this
													.lastRequestId +
												1
											return (
												(this.lastRequestId =
													e),
												e
											)
										}
									},
									{
										key: 'onHello',
										value: function (
											e
										) {
											var t =
												this
													.socket
											if (
												2 ===
												e.protocol_version
											) {
												var n =
													{
														protocol_version: 2,
														client_version:
															Z,
														client_info:
															A,
														auth_payload:
															this
																.authPayload
													}
												t.send(
													'hello_web:'.concat(
														JSON.stringify(
															n
														)
													)
												)
											} else
												t.send(
													'handshake_failed:'.concat(
														JSON.stringify(
															{
																reason: 'protocol_mismatch',
																protocol_version: 2,
																client_version:
																	Z,
																client_info:
																	A
															}
														)
													)
												),
													this.eventEmitter.emit(
														'error',
														'protocol_mismatch'
													)
										}
									},
									{
										key: 'onAuthenticated',
										value: function (
											e
										) {
											;(0,
											x.k)(
												e.client_id,
												'`authenticated` message has no `client_id`'
											),
												(this.clientId =
													e.client_id),
												(this.userId =
													e.user_id ||
													null),
												this.eventEmitter.emit(
													'connect',
													{
														clientId:
															this
																.clientId,
														userId: this
															.userId
													}
												)
										}
									},
									{
										key: 'log',
										value: function () {
											if (
												'development' ===
												(0,
												w.zj)()
											) {
												for (
													var e,
														t =
															arguments.length,
														n =
															new Array(
																t
															),
														i = 0;
													i <
													t;
													i++
												)
													n[
														i
													] =
														arguments[
															i
														]
												;(e =
													console).log.apply(
													e,
													[
														'SYNCConnection'
													].concat(
														n
													)
												)
											}
										}
									},
									{
										key: 'parseFrame',
										value: function (
											e
										) {
											var t =
													/^(\d+|info):([a-zA-Z-_]+):(.+)$/.exec(
														e.toString()
													),
												n =
													(0,
													b.Z)(
														t,
														4
													),
												i =
													n[1],
												s =
													n[2],
												r =
													n[3],
												o =
													null
											return (
												'info' !==
													i &&
													(o =
														parseInt(
															i
														)),
												{
													requestId:
														o,
													action: s,
													payload:
														JSON.parse(
															r
														)
												}
											)
										}
									},
									{
										key: 'parseUnauthenticatedFrame',
										value: function (
											e
										) {
											var t =
													/^(hello|authenticated|error):(.+)$/.exec(
														e.toString()
													),
												n =
													(0,
													b.Z)(
														t,
														3
													),
												i =
													n[1],
												s =
													n[2]
											return {
												action: i,
												payload:
													JSON.parse(
														s
													)
											}
										}
									},
									{
										key: 'abortOpenRequests',
										value: function () {
											this.requestsWaitingForAnswers.forEach(
												function (
													e
												) {
													e.reject(
														new d.p2(
															'request aborted'
														)
													)
												}
											),
												(this.requestsWaitingForAnswers =
													(0,
													u.D5)())
										}
									},
									{
										key: 'clearAuthenticationInformation',
										value: function () {
											;(this.clientId =
												''),
												(this.userId =
													null)
										}
									}
								]
							),
							e
						)
					})(),
				T =
					n(
						90484
					)
			function U(
				e
			) {
				return (
					(0,
					d.kG)(
						'string' ==
							typeof e.client_id,
						'The client payload must have a `client_id`'
					),
					(0,
					d.kG)(
						'object' ===
							(0,
							T.Z)(
								e.presence
							),
						'The client payload must have a `presence`'
					),
					new _(
						{
							clientId:
								e.client_id,
							userId: e.user_id,
							presenceContent:
								e.presence
						}
					)
				)
			}
			function B(
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
									return D(
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
									return D(
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
						var i = 0,
							s =
								function () {}
						return {
							s: s,
							n: function () {
								return i >=
									e.length
									? {
											done: !0
									  }
									: {
											done: !1,
											value: e[
												i++
											]
									  }
							},
							e: function (
								e
							) {
								throw e
							},
							f: s
						}
					}
					throw new TypeError(
						'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
					)
				}
				var r,
					o =
						!0,
					a =
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
							(o =
								e.done),
							e
						)
					},
					e: function (
						e
					) {
						;(a =
							!0),
							(r =
								e)
					},
					f: function () {
						try {
							o ||
								null ==
									n.return ||
								n.return()
						} finally {
							if (
								a
							)
								throw r
						}
					}
				}
			}
			function D(
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
						i =
							new Array(
								t
							);
					n <
					t;
					n++
				)
					i[
						n
					] =
						e[
							n
						]
				return i
			}
			var G =
					(function () {
						function e() {
							var t =
									arguments.length >
										0 &&
									void 0 !==
										arguments[0]
										? arguments[0]
										: new C(),
								n =
									arguments.length >
										1 &&
									void 0 !==
										arguments[1]
										? arguments[1]
										: E
							;(0,
							r.Z)(
								this,
								e
							),
								(this.state =
									t),
								(this.connectionClass =
									n)
						}
						return (
							(0,
							o.Z)(
								e,
								[
									{
										key: 'load',
										value: function (
											e,
											t,
											n
										) {
											var i =
												this
											return new Promise(
												function (
													s,
													r
												) {
													;(i.setState =
														function (
															e
														) {
															i.state =
																e
														}),
														(i.connection =
															new i.connectionClass(
																e,
																t,
																{
																	events: [
																		'client_presence'
																	]
																}
															)),
														i.connection.on(
															'connect',
															function (
																e
															) {
																var t =
																	new _(
																		{
																			clientId:
																				e.clientId,
																			userId: e.userId,
																			presenceContent:
																				n
																		}
																	)
																i.setState(
																	i.state
																		.set(
																			'status',
																			'online'
																		)
																		.set(
																			'currentClient',
																			t
																		)
																),
																	i
																		.populateClients(
																			n
																		)
																		.then(
																			function () {
																				s(
																					i
																				)
																			}
																		)
																		.catch(
																			r
																		)
															}
														),
														i.connection.on(
															'error',
															function (
																e
															) {
																r(
																	new d.p2(
																		e.toString()
																	)
																)
															}
														),
														i.connection.on(
															'client_presence',
															function (
																e
															) {
																return i.onInfoClientPresence(
																	e
																)
															}
														),
														i.connection.connect()
												}
											)
										}
									},
									{
										key: 'populateClients',
										value: function (
											e
										) {
											var t =
												this
											return new Promise(
												function (
													n,
													i
												) {
													t.connection
														.sendRequest(
															'enter_layer',
															{
																presence:
																	e
															}
														)
														.then(
															function (
																e
															) {
																t.setState(
																	(function (
																		e,
																		t
																	) {
																		return (
																			(0,
																			x.k)(
																				t.clients,
																				'The payload must have a `clients` list'
																			),
																			e.withMutations(
																				function (
																					n
																				) {
																					var i,
																						s =
																							(0,
																							u.D5)(
																								t.clients
																									.map(
																										function (
																											e
																										) {
																											return U(
																												e
																											)
																										}
																									)
																									.map(
																										function (
																											e
																										) {
																											return [
																												e.clientId,
																												e
																											]
																										}
																									)
																							).set(
																								null ===
																									(i =
																										e.currentClient) ||
																									void 0 ===
																										i
																									? void 0
																									: i.clientId,
																								e.currentClient
																							)
																					n.set(
																						'clients',
																						s
																					)
																				}
																			)
																		)
																	})(
																		t.state,
																		e
																	)
																),
																	n()
															}
														)
														.catch(
															i
														)
												}
											)
										}
									},
									{
										key: 'onInfoClientPresence',
										value: function (
											e
										) {
											if (
												(this.setState(
													(function (
														e,
														t
													) {
														;(0,
														x.k)(
															'object' ==
																(0,
																T.Z)(
																	t.clients
																),
															'The payload must have `clients`'
														)
														var n =
															e.clients.withMutations(
																function (
																	n
																) {
																	if (
																		t
																			.clients
																			.entered
																	) {
																		var i,
																			s =
																				B(
																					t
																						.clients
																						.entered
																				)
																		try {
																			for (
																				s.s();
																				!(i =
																					s.n())
																					.done;

																			) {
																				var r =
																					i.value
																				if (
																					e.clients.has(
																						r.client_id
																					)
																				)
																					throw new d.p2(
																						'The client marked as entered is already known'
																					)
																				var o =
																					U(
																						r
																					)
																				n.set(
																					o.clientId,
																					o
																				)
																			}
																		} catch (e) {
																			s.e(
																				e
																			)
																		} finally {
																			s.f()
																		}
																	}
																	if (
																		t
																			.clients
																			.updated
																	) {
																		var a,
																			c =
																				B(
																					t
																						.clients
																						.updated
																				)
																		try {
																			for (
																				c.s();
																				!(a =
																					c.n())
																					.done;

																			) {
																				var l =
																					a.value
																				;(0,
																				x.k)(
																					'string' ==
																						typeof l.client_id,
																					'The client payload must have a `client_id`'
																				),
																					(0,
																					x.k)(
																						'object' ===
																							(0,
																							T.Z)(
																								l.presence
																							),
																						'The client payload must have a `presence`'
																					)
																				var u =
																					e.clients.get(
																						l.client_id
																					)
																				if (
																					!u
																				)
																					throw new d.p2(
																						'The client marked as updated is not known'
																					)
																				n.set(
																					u.clientId,
																					u.set(
																						'presenceContent',
																						l.presence
																					)
																				)
																			}
																		} catch (e) {
																			c.e(
																				e
																			)
																		} finally {
																			c.f()
																		}
																	}
																	if (
																		t
																			.clients
																			.left
																	) {
																		var h,
																			f =
																				B(
																					t
																						.clients
																						.left
																				)
																		try {
																			for (
																				f.s();
																				!(h =
																					f.n())
																					.done;

																			) {
																				var p =
																					h.value
																				if (
																					!e.clients.has(
																						p
																					)
																				)
																					throw new d.p2(
																						'The client marked as left is not known'
																					)
																				n.delete(
																					p
																				)
																			}
																		} catch (e) {
																			f.e(
																				e
																			)
																		} finally {
																			f.f()
																		}
																	}
																}
															)
														return e.set(
															'clients',
															n
														)
													})(
														this
															.state,
														e
													)
												),
												this
													.shouldFireClientUpdatesCallback)
											) {
												var t =
													(0,
													u.D5)()
												if (
													e
														.clients
														.entered
												) {
													var n =
														e.clients.entered.map(
															function (
																e
															) {
																return e.client_id
															}
														)
													t =
														this.state.clients
															.filter(
																function (
																	e
																) {
																	return (
																		-1 !==
																		n.indexOf(
																			e.clientId
																		)
																	)
																}
															)
															.toMap()
												}
												var i =
													(0,
													u.D5)()
												if (
													e
														.clients
														.updated
												) {
													var s =
														e.clients.updated.map(
															function (
																e
															) {
																return e.client_id
															}
														)
													i =
														this.state.clients
															.filter(
																function (
																	e
																) {
																	return (
																		-1 !==
																		s.indexOf(
																			e.clientId
																		)
																	)
																}
															)
															.toMap()
												}
												var r =
													(0,
													u.aV)()
												e
													.clients
													.updated &&
													(r =
														(0,
														u.aV)(
															e
																.clients
																.left
														)),
													this.clientUpdatesCallback(
														t,
														i,
														r
													)
											}
										}
									},
									{
										key: 'disconnect',
										value: function () {
											'offline' !==
												this.getStatus() &&
												(this.setState(
													this.state.set(
														'status',
														'offline'
													)
												),
												this.connection.disconnect())
										}
									},
									{
										key: 'getStatus',
										value: function () {
											return this
												.state
												.status
										}
									},
									{
										key: 'getCurrentClient',
										value: function () {
											return this
												.state
												.currentClient
										}
									},
									{
										key: 'getClients',
										value: function () {
											return (
												(this.shouldFireClientUpdatesCallback =
													!0),
												this
													.state
													.clients
											)
										}
									},
									{
										key: 'updatePresence',
										value: function (
											e
										) {
											var t =
												this
											return new Promise(
												function (
													n,
													i
												) {
													if (
														'online' !==
														t.getStatus()
													)
														return i(
															new d.p2(
																'ClientsPresence is not connected'
															)
														)
													t.connection
														.sendRequest(
															'update_client_presence',
															{
																presence:
																	e
															}
														)
														.then(
															function () {
																t.setState(
																	(function (
																		e,
																		t
																	) {
																		var n
																		return e
																			.setIn(
																				[
																					'currentClient',
																					'presenceContent'
																				],
																				t
																			)
																			.setIn(
																				[
																					'clients',
																					null ===
																						(n =
																							e.currentClient) ||
																					void 0 ===
																						n
																						? void 0
																						: n.clientId,
																					'presenceContent'
																				],
																				t
																			)
																	})(
																		t.state,
																		e
																	)
																),
																	n(
																		!0
																	)
															},
															function () {
																i(
																	new d.p2(
																		'Unable to update presence'
																	)
																)
															}
														)
												}
											)
										}
									},
									{
										key: 'onClientUpdates',
										value: function (
											e
										) {
											if (
												'function' !=
												typeof e
											)
												throw new TypeError(
													'callback must be a function'
												)
											this.clientUpdatesCallback =
												e
										}
									}
								]
							),
							e
						)
					})(),
				O =
					n(
						52376
					)
			function z(
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
							k.Z)(
								e
							)
					if (
						t
					) {
						var s =
							(0,
							k.Z)(
								this
							).constructor
						n =
							Reflect.construct(
								i,
								arguments,
								s
							)
					} else
						n =
							i.apply(
								this,
								arguments
							)
					return (0,
					v.Z)(
						this,
						n
					)
				}
			}
			var H =
					(function (
						e
					) {
						;(0,
						m.Z)(
							n,
							e
						)
						var t =
							z(
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
						o.Z)(
							n
						)
					})(
						u.WV(
							{
								content:
									null,
								attachments:
									null,
								id: null,
								type: null,
								group: void 0,
								resolve:
									function () {},
								reject: function () {}
							}
						)
					),
				W =
					n(
						32289
					)
			function j(
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
							k.Z)(
								e
							)
					if (
						t
					) {
						var s =
							(0,
							k.Z)(
								this
							).constructor
						n =
							Reflect.construct(
								i,
								arguments,
								s
							)
					} else
						n =
							i.apply(
								this,
								arguments
							)
					return (0,
					v.Z)(
						this,
						n
					)
				}
			}
			var L =
					(function (
						e
					) {
						;(0,
						m.Z)(
							n,
							e
						)
						var t =
							j(
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
						o.Z)(
							n
						)
					})(
						u.WV(
							{
								requestInfo:
									null,
								status: 'offline',
								currentClient:
									null,
								localRecordsContents:
									(0,
									u.zN)(),
								localRecordsChanges:
									(0,
									u.aV)(),
								stagedRecordsChanges:
									(0,
									u.aV)(),
								localRecordsRev: 0,
								requiredAttachmentIds:
									(0,
									u.l4)(),
								clients:
									(0,
									u.D5)()
							}
						)
					),
				M =
					n(
						14295
					),
				N =
					(function () {
						function e() {
							var t =
									this,
								n =
									arguments.length >
										0 &&
									void 0 !==
										arguments[0]
										? arguments[0]
										: new L(),
								i =
									arguments.length >
										1 &&
									void 0 !==
										arguments[1]
										? arguments[1]
										: W.ZP
							;(0,
							r.Z)(
								this,
								e
							),
								(0,
								a.Z)(
									this,
									'_recordsUpdatesCallback',
									function () {}
								),
								(0,
								a.Z)(
									this,
									'_acceptedRecordsResponseCallback',
									function () {}
								),
								(0,
								a.Z)(
									this,
									'_shouldFireRecordsUpdateCallback',
									!1
								),
								(0,
								a.Z)(
									this,
									'onChanges',
									function (
										e
									) {
										if (
											t._shouldFireRecordsUpdateCallback
										) {
											var n =
													e.created,
												i =
													e.updated,
												s =
													e.deleted
											t._recordsUpdatesCallback(
												(0,
												u.aV)(
													n
												),
												(0,
												u.aV)(
													i
												),
												(0,
												u.aV)(
													s
												)
											)
										}
									}
								),
								(0,
								a.Z)(
									this,
									'onAcceptedRecords',
									function (
										e
									) {
										if (
											t._shouldFireRecordsUpdateCallback
										) {
											var n =
													e.created,
												i =
													e.updated,
												s =
													e.deleted
											t._acceptedRecordsResponseCallback(
												(0,
												u.aV)(
													n
												),
												(0,
												u.aV)(
													i
												),
												(0,
												u.aV)(
													s
												)
											)
										}
									}
								),
								(0,
								a.Z)(
									this,
									'setOnDocumentHandleConflictCallback',
									function (
										e
									) {
										if (
											'function' !=
											typeof e
										)
											throw new TypeError(
												'callback must be a function'
											)
										t._cycle.setOnDocumentHandleConflictCallback(
											e
										)
									}
								),
								(0,
								a.Z)(
									this,
									'syncChanges',
									(0,
									M.k)(
										function () {
											return t._cycle.nextCycle()
										}
									)
								),
								(this._state =
									n),
								(this._CycleClass =
									i)
						}
						return (
							(0,
							o.Z)(
								e,
								[
									{
										key: 'getRecords',
										value: function () {
											return (
												(this._shouldFireRecordsUpdateCallback =
													!0),
												this._state.localRecordsContents
													.map(
														function (
															e,
															t
														) {
															return {
																content:
																	e.content,
																permissions:
																	e.permissions,
																group: e.group,
																id: t
															}
														}
													)
													.toList()
											)
										}
									},
									{
										key: 'createRecord',
										value: function (
											e,
											t,
											n,
											i
										) {
											var s =
												this
											return new Promise(
												function (
													r,
													o
												) {
													var a =
														new H(
															{
																id: e,
																content:
																	t,
																attachments:
																	n,
																group: i,
																type: 'created',
																resolve:
																	r,
																reject: o
															}
														)
													s.enqueueChangeRequest(
														a
													)
												}
											)
										}
									},
									{
										key: 'updateRecord',
										value: function (
											e,
											t,
											n
										) {
											var i =
												this
											return new Promise(
												function (
													s,
													r
												) {
													if (
														!i.isKnownRecordId(
															e
														)
													)
														return r(
															new d.p2(
																'Record with ID: '.concat(
																	e,
																	' not found.'
																)
															)
														)
													var o =
														new H(
															{
																id: e,
																content:
																	t,
																group: n,
																type: 'updated',
																resolve:
																	s,
																reject: r
															}
														)
													i.enqueueChangeRequest(
														o
													)
												}
											)
										}
									},
									{
										key: 'deleteRecord',
										value: function (
											e
										) {
											var t =
												this
											return new Promise(
												function (
													n,
													i
												) {
													if (
														!t.isKnownRecordId(
															e
														)
													)
														return i(
															new d.p2(
																'Record with ID: '.concat(
																	e,
																	' not found.'
																)
															)
														)
													var s =
														new H(
															{
																id: e,
																type: 'deleted',
																resolve:
																	n,
																reject: i
															}
														)
													t.enqueueChangeRequest(
														s
													)
												}
											)
										}
									},
									{
										key: 'onRecordsUpdates',
										value: function (
											e,
											t
										) {
											if (
												'function' !=
												typeof e
											)
												throw new TypeError(
													'recordsUpdateCallback must be a function'
												)
											if (
												'function' !=
												typeof t
											)
												throw new TypeError(
													'acceptedRecordsCallback must be a function'
												)
											;(this._recordsUpdatesCallback =
												e),
												(this._acceptedRecordsResponseCallback =
													t)
										}
									},
									{
										key: 'destroy',
										value: function () {
											this
												._cycle &&
												this._cycle.destroy()
										}
									},
									{
										key: 'load',
										value: function (
											e,
											t
										) {
											var n =
													this,
												i =
													!(
														arguments.length >
															2 &&
														void 0 !==
															arguments[2]
													) ||
													arguments[2]
											return new Promise(
												function (
													s,
													r
												) {
													var o =
														n.setState.bind(
															n
														)
													n.setState(
														n._state.set(
															'requestInfo',
															{
																serverURL:
																	e,
																authPayload:
																	t
															}
														)
													),
														(n._cycle =
															new n._CycleClass(
																{
																	getState:
																		function () {
																			return n._state
																		},
																	setState:
																		o,
																	onChanges:
																		n.onChanges,
																	onAcceptedRecords:
																		n.onAcceptedRecords,
																	longPollingTimeout:
																		i
																			? W.mH
																			: 0
																}
															)),
														n._cycle
															.nextCycle(
																0
															)
															.then(
																function () {
																	s(
																		n
																	)
																}
															)
															.catch(
																r
															)
												}
											)
										}
									},
									{
										key: 'setState',
										value: function (
											e
										) {
											this._state =
												e
										}
									},
									{
										key: 'enqueueChangeRequest',
										value: function (
											e
										) {
											var t =
												(0,
												O.n)(
													{
														oldChanges:
															this
																._state
																.localRecordsChanges,
														newChanges:
															(0,
															u.aV)(
																[
																	e
																]
															)
													}
												)
											this.setState(
												this._state.set(
													'localRecordsChanges',
													t
												)
											)
										}
									},
									{
										key: 'isKnownRecordId',
										value: function (
											e
										) {
											function t(
												t
											) {
												return (
													'created' ===
														t.type &&
													t.id ===
														e
												)
											}
											var n =
													this._state.localRecordsContents.has(
														e
													),
												i =
													!!this._state.localRecordsChanges.find(
														t
													),
												s =
													!!this._state.stagedRecordsChanges.find(
														t
													)
											return (
												n ||
												i ||
												s
											)
										}
									}
								]
							),
							e
						)
					})(),
				K =
					n(
						47291
					),
				J =
					n(
						11171
					)
			function Q(
				e,
				t
			) {
				var n,
					i =
						e.get(
							'annotations'
						),
					s =
						e.get(
							'formFields'
						),
					r =
						e.get(
							'comments'
						),
					o =
						e.get(
							'formattedFormFieldValues'
						)
				return (
					t.id.startsWith(
						'form-field-value/'
					) &&
						(n =
							t.id.split(
								'/'
							)[1]),
					i.get(
						t.id
					) ||
						s.find(
							function (
								e
							) {
								return (
									e.id ===
									t.id
								)
							}
						) ||
						r.get(
							t.id
						) ||
						(n
							? o.get(
									n
							  )
							: void 0)
				)
			}
			function Y(
				e,
				t
			) {
				return Boolean(
					Q(
						e,
						t
					)
				)
			}
			var $ =
					n(
						44006
					),
				X =
					n(
						91002
					),
				ee =
					n(
						16105
					),
				te =
					n(
						81172
					),
				ne =
					n(
						36091
					),
				ie =
					n(
						72706
					),
				se =
					n(
						33502
					),
				re = [
					'id'
				],
				oe = [
					'group',
					'permissions'
				],
				ae = [
					'id'
				],
				ce = [
					'group',
					'permissions'
				],
				le = [
					'id',
					'permissions',
					'group'
				],
				ue = [
					'id'
				],
				de = [
					'id'
				],
				he = [
					'id'
				],
				fe = [
					'group',
					'permissions'
				],
				pe =
					(function () {
						function e(
							t,
							n,
							i
						) {
							var s =
									this,
								o =
									arguments.length >
										3 &&
									void 0 !==
										arguments[3]
										? arguments[3]
										: K.q
							;(0,
							r.Z)(
								this,
								e
							),
								(0,
								a.Z)(
									this,
									'_existingBookmarksIds',
									(0,
									u.l4)()
								),
								(0,
								a.Z)(
									this,
									'_existingFormFieldsIds',
									(0,
									u.l4)()
								),
								(0,
								a.Z)(
									this,
									'_existingFormFieldValuesIds',
									(0,
									u.l4)()
								),
								(0,
								a.Z)(
									this,
									'_existingCommentIds',
									(0,
									u.l4)()
								),
								(0,
								a.Z)(
									this,
									'_documentHandleConflictCallback',
									function () {}
								),
								(0,
								a.Z)(
									this,
									'canCreateBackendOrphanWidgets',
									!0
								),
								(0,
								a.Z)(
									this,
									'setDocumentHandleConflictCallback',
									function (
										e
									) {
										s._documentHandleConflictCallback =
											e
									}
								),
								(0,
								a.Z)(
									this,
									'setDocumentHandleOutdated',
									function (
										e
									) {
										s._setDocumentHandleOutdatedCallback =
											e
									}
								),
								(0,
								a.Z)(
									this,
									'onDocumentHandleConflict',
									function () {
										s._documentHandleConflictCallback &&
											s._documentHandleConflictCallback(),
											s._setDocumentHandleOutdatedCallback &&
												s._setDocumentHandleOutdatedCallback(
													!0
												)
									}
								),
								(this._serverURL =
									t),
								(this._documentURL =
									n),
								(this._authPayload =
									i),
								(this._settings =
									o),
								(this._hasLoadedInitialRecords =
									!1),
								(this._setReadStateCallbacksPromise =
									new Promise(
										function (
											e
										) {
											s._setReadStateCallbacksPromiseResolve =
												e
										}
									))
						}
						var t,
							n,
							c,
							m,
							v,
							k,
							y
						return (
							(0,
							o.Z)(
								e,
								[
									{
										key: 'load',
										value: function () {
											var e =
													this,
												t =
													arguments.length >
														0 &&
													void 0 !==
														arguments[0]
														? arguments[0]
														: N,
												n =
													arguments.length >
														1 &&
													void 0 !==
														arguments[1]
														? arguments[1]
														: G,
												i =
													[]
											return (
												(this._sync =
													new t()),
												i.push(
													this._sync
														.load(
															''.concat(
																this
																	._documentURL,
																'/sync'
															),
															this
																._authPayload,
															this
																._settings
																.listenToServerChangesEnabled
														)
														.catch(
															d.vU
														)
												),
												this._sync.setOnDocumentHandleConflictCallback(
													this
														.onDocumentHandleConflict
												),
												this
													._settings
													.clientsPresenceEnabled &&
													((this._clients =
														new n()),
													i.push(
														this._clients
															.load(
																''.concat(
																	this._serverURL.replace(
																		/^http/i,
																		'ws'
																	),
																	'/websocket'
																),
																this
																	._authPayload,
																{}
															)
															.then(
																function () {
																	var t =
																		e._clients
																	null !=
																		t &&
																		(t.onClientUpdates(
																			function () {
																				return e._onClientsChange(
																					t.getClients()
																				)
																			}
																		),
																		e._onClientsChange(
																			t.getClients()
																		))
																}
															)
															.catch(
																function (
																	e
																) {
																	;(0,
																	d.ZK)(
																		'PSPDFKit: An error occurred while initializing the connected clients module. This might be due to a lack of support for WebSockets or a related failure.\n\nFailure details:\n\n' +
																			e.message
																	)
																}
															)
													)),
												Promise.all(
													i
												)
													.then(
														function () {
															return e
														}
													)
													.catch(
														function (
															e
														) {
															throw new d.p2(
																'Initialization of PSPDFKit Instant failed:\n'.concat(
																	e.message
																)
															)
														}
													)
											)
										}
									},
									{
										key: 'destroy',
										value: function () {
											this
												._sync &&
												this._sync.destroy()
										}
									},
									{
										key: 'setFormsEnabledInConfig',
										value: function (
											e
										) {
											this._formsEnabledInConfig =
												e
										}
									},
									{
										key: 'setReadStateCallbacks',
										value: function (
											e
										) {
											var t
											;(this._readStateCallbacks =
												e),
												null ===
													(t =
														this
															._setReadStateCallbacksPromiseResolve) ||
													void 0 ===
														t ||
													t.call(
														this
													)
										}
									},
									{
										key: 'setAnnotationCallbacks',
										value: function (
											e
										) {
											this._annotationCallbacks =
												e
										}
									},
									{
										key: 'setBookmarkCallbacks',
										value: function (
											e
										) {
											this._bookmarkCallbacks =
												e
										}
									},
									{
										key: 'setFormFieldCallbacks',
										value: function (
											e
										) {
											this._formFieldCallbacks =
												e
										}
									},
									{
										key: 'setFormFieldValueCallbacks',
										value: function (
											e
										) {
											this._formFieldValueCallbacks =
												e
										}
									},
									{
										key: 'setCommentCallbacks',
										value: function (
											e
										) {
											this._commentCallbacks =
												e
										}
									},
									{
										key: 'createAnnotation',
										value: function (
											e,
											t
										) {
											var n =
													(0,
													h.Hs)(
														e
													),
												i =
													n.id,
												r =
													(0,
													s.Z)(
														n,
														re
													),
												o =
													r.group,
												a =
													(r.permissions,
													(0,
													s.Z)(
														r,
														oe
													))
											return this._sync.createRecord(
												i,
												a,
												(0,
												h.Lw)(
													t
												),
												o
											)
										}
									},
									{
										key: 'createComment',
										value: function (
											e
										) {
											var t =
													(0,
													h.jA)(
														e
													),
												n =
													t.id,
												i =
													(0,
													s.Z)(
														t,
														ae
													),
												r =
													i.group,
												o =
													(i.permissions,
													(0,
													s.Z)(
														i,
														ce
													))
											return (
												(this._existingCommentIds =
													this._existingCommentIds.add(
														n
													)),
												this._sync.createRecord(
													n,
													o,
													{},
													r
												)
											)
										}
									},
									{
										key: 'updateComment',
										value:
											((y =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
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
																					(e.prev = 0),
																					(e.next = 3),
																					this.updateRecord(
																						(0,
																						h.jA)(
																							t
																						)
																					)
																				)
																			case 3:
																				return e.abrupt(
																					'return',
																					e.sent
																				)
																			case 6:
																				if (
																					((e.prev = 6),
																					(e.t0 =
																						e.catch(
																							0
																						)),
																					e.t0 instanceof
																						d.p2)
																				) {
																					e.next = 10
																					break
																				}
																				throw e.t0
																			case 10:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this,
																[
																	[
																		0,
																		6
																	]
																]
															)
														}
													)
												)),
											function (
												e
											) {
												return y.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'deleteComment',
										value: function (
											e
										) {
											return (
												(this._existingCommentIds =
													this._existingCommentIds.delete(
														e
													)),
												this._sync
													.deleteRecord(
														e
													)
													.then(
														function () {}
													)
											)
										}
									},
									{
										key: 'setStateGetter',
										value: function (
											e
										) {
											this._getState =
												e
										}
									},
									{
										key: 'updateRecord',
										value:
											((k =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
															var n,
																i,
																r,
																o,
																a
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
																				if (
																					((i =
																						t.id),
																					(r =
																						t.permissions),
																					(o =
																						t.group),
																					(a =
																						(0,
																						s.Z)(
																							t,
																							le
																						)),
																					!(
																						this
																							._getState &&
																						this._getState() &&
																						null !==
																							(n =
																								this._getState()
																									.backend) &&
																						void 0 !==
																							n &&
																						n.isCollaborationPermissionsEnabled()
																					))
																				) {
																					e.next = 5
																					break
																				}
																				return e.abrupt(
																					'return',
																					this._sync.updateRecord(
																						i,
																						r.edit
																							? a
																							: void 0,
																						r.setGroup
																							? o
																							: void 0
																					)
																				)
																			case 5:
																				return e.abrupt(
																					'return',
																					this._sync.updateRecord(
																						i,
																						a,
																						o
																					)
																				)
																			case 6:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this
															)
														}
													)
												)),
											function (
												e
											) {
												return k.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'updateAnnotation',
										value:
											((v =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
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
																					(e.prev = 0),
																					(e.next = 3),
																					this.updateRecord(
																						(0,
																						h.Hs)(
																							t
																						)
																					)
																				)
																			case 3:
																				return e.abrupt(
																					'return',
																					e.sent
																				)
																			case 6:
																				if (
																					((e.prev = 6),
																					(e.t0 =
																						e.catch(
																							0
																						)),
																					e.t0 instanceof
																						d.p2)
																				) {
																					e.next = 10
																					break
																				}
																				throw e.t0
																			case 10:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this,
																[
																	[
																		0,
																		6
																	]
																]
															)
														}
													)
												)),
											function (
												e
											) {
												return v.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'deleteAnnotation',
										value: function (
											e
										) {
											return this._sync
												.deleteRecord(
													e.id
												)
												.then(
													function () {}
												)
										}
									},
									{
										key: 'createBookmark',
										value: function (
											e
										) {
											var t =
													(0,
													f.a)(
														e
													),
												n =
													t.id,
												i =
													(0,
													s.Z)(
														t,
														ue
													)
											return (
												(this._existingBookmarksIds =
													this._existingBookmarksIds.add(
														n
													)),
												this._sync.createRecord(
													n,
													i,
													{}
												)
											)
										}
									},
									{
										key: 'updateBookmark',
										value:
											((m =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
															var n,
																i,
																r
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
																					(n =
																						(0,
																						f.a)(
																							t
																						)),
																					(i =
																						n.id),
																					(r =
																						(0,
																						s.Z)(
																							n,
																							de
																						)),
																					(e.prev = 1),
																					(e.next = 4),
																					this._sync.updateRecord(
																						i,
																						r
																					)
																				)
																			case 4:
																				return e.abrupt(
																					'return',
																					e.sent
																				)
																			case 7:
																				if (
																					((e.prev = 7),
																					(e.t0 =
																						e.catch(
																							1
																						)),
																					e.t0 instanceof
																						d.p2)
																				) {
																					e.next = 11
																					break
																				}
																				throw e.t0
																			case 11:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this,
																[
																	[
																		1,
																		7
																	]
																]
															)
														}
													)
												)),
											function (
												e
											) {
												return m.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'deleteBookmark',
										value: function (
											e
										) {
											var t =
												this
											return this._sync
												.deleteRecord(
													e
												)
												.then(
													function () {
														t._existingBookmarksIds =
															t._existingBookmarksIds.delete(
																e
															)
													}
												)
										}
									},
									{
										key: 'createFormField',
										value: function (
											e
										) {
											var t =
													(0,
													h.vD)(
														e
													),
												n =
													t.id,
												i =
													(0,
													s.Z)(
														t,
														he
													),
												r =
													i.group,
												o =
													(i.permissions,
													(0,
													s.Z)(
														i,
														fe
													))
											return (
												(this._existingFormFieldsIds =
													this._existingFormFieldsIds.add(
														n
													)),
												this._sync.createRecord(
													n,
													o,
													{},
													r
												)
											)
										}
									},
									{
										key: 'updateFormField',
										value:
											((c =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
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
																					(e.prev = 0),
																					(e.next = 3),
																					this.updateRecord(
																						(0,
																						h.vD)(
																							t
																						)
																					)
																				)
																			case 3:
																				return e.abrupt(
																					'return',
																					e.sent
																				)
																			case 6:
																				if (
																					((e.prev = 6),
																					(e.t0 =
																						e.catch(
																							0
																						)),
																					e.t0 instanceof
																						d.p2)
																				) {
																					e.next = 10
																					break
																				}
																				throw e.t0
																			case 10:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this,
																[
																	[
																		0,
																		6
																	]
																]
															)
														}
													)
												)),
											function (
												e
											) {
												return c.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'deleteFormField',
										value: function (
											e
										) {
											var t =
												this
											return this._sync
												.deleteRecord(
													e.id
												)
												.then(
													function () {
														t._existingFormFieldsIds =
															t._existingFormFieldsIds.delete(
																e.id
															)
													}
												)
										}
									},
									{
										key: 'loadFormFields',
										value: function () {
											return this.loadAnnotationsForPageIndex()
										}
									},
									{
										key: 'createFormFieldValue',
										value: function (
											e
										) {
											var t =
													(0,
													h.kr)(
														e
													),
												n =
													(0,
													J.X)(
														e
													)
											return (
												(this._existingFormFieldValuesIds =
													this._existingFormFieldValuesIds.add(
														n
													)),
												this._sync.createRecord(
													n,
													t,
													{}
												)
											)
										}
									},
									{
										key: 'setFormFieldValue',
										value:
											((n =
												(0,
												i.Z)(
													l().mark(
														function e(
															t
														) {
															var n
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
																					(n =
																						(0,
																						h.kr)(
																							t
																						)),
																					(e.prev = 1),
																					(e.next = 4),
																					this._sync.updateRecord(
																						(0,
																						J.X)(
																							t
																						),
																						n
																					)
																				)
																			case 4:
																				return e.abrupt(
																					'return',
																					e.sent
																				)
																			case 7:
																				if (
																					((e.prev = 7),
																					(e.t0 =
																						e.catch(
																							1
																						)),
																					e.t0 instanceof
																						d.p2)
																				) {
																					e.next = 11
																					break
																				}
																				throw e.t0
																			case 11:
																			case 'end':
																				return e.stop()
																		}
																},
																e,
																this,
																[
																	[
																		1,
																		7
																	]
																]
															)
														}
													)
												)),
											function (
												e
											) {
												return n.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'deleteFormFieldValue',
										value: function (
											e
										) {
											var t =
												this
											return this._sync
												.deleteRecord(
													e
												)
												.then(
													function () {
														t._existingFormFieldValuesIds =
															t._existingFormFieldValuesIds.delete(
																e
															)
													}
												)
										}
									},
									{
										key: 'loadAnnotationsForPageIndex',
										value: function () {
											var e =
												this
											return (
												this
													._loadPromise ||
													(this._loadPromise =
														new Promise(
															function (
																e
															) {
																return setTimeout(
																	e,
																	0
																)
															}
														).then(
															function () {
																e._hasLoadedInitialRecords ||
																	(e._sync.onRecordsUpdates(
																		function (
																			t,
																			n,
																			i
																		) {
																			return e._onRecordsUpdates(
																				t,
																				n,
																				i,
																				p.z
																			)
																		},
																		function (
																			t,
																			n,
																			i
																		) {
																			return e._onAcceptedRecords(
																				t,
																				n,
																				i
																			)
																		}
																	),
																	e._onRecordsUpdates(
																		e._sync.getRecords(),
																		(0,
																		u.aV)(),
																		(0,
																		u.aV)(),
																		p.y
																	),
																	(e._hasLoadedInitialRecords =
																		!0))
															}
														)),
												this
													._loadPromise
											)
										}
									},
									{
										key: 'loadBookmarks',
										value:
											((t =
												(0,
												i.Z)(
													l().mark(
														function e() {
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
																				return e.abrupt(
																					'return'
																				)
																			case 1:
																			case 'end':
																				return e.stop()
																		}
																},
																e
															)
														}
													)
												)),
											function () {
												return t.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'syncChanges',
										value: function () {
											return this._sync.syncChanges()
										}
									},
									{
										key: '_filterRecords',
										value: function (
											e
										) {
											var t =
												this
											return e.filter(
												function (
													e
												) {
													var n =
														e.content
													return (
														t._formsEnabledInConfig ||
														!(0,
														h._Q)(
															n
														)
													)
												}
											)
										}
									},
									{
										key: '_onRecordsUpdates',
										value: function (
											e,
											t,
											n,
											i
										) {
											var s =
													this,
												r =
													(0,
													u.aV)(),
												o =
													[],
												a =
													(0,
													u.aV)(),
												c =
													(0,
													u.aV)(),
												l =
													(0,
													u.l4)(),
												p =
													(0,
													u.l4)(),
												m =
													(0,
													u.l4)(),
												v =
													(0,
													u.l4)(),
												k =
													(0,
													u.l4)(),
												y =
													this
														._getState
														? this._getState()
														: void 0,
												_ =
													e,
												g =
													t,
												C =
													n
											if (
												y &&
												y.backend &&
												y.backend.isCollaborationPermissionsEnabled()
											) {
												_ =
													_.filter(
														function (
															e
														) {
															return !!e.content
														}
													)
												var b =
													[]
												t.forEach(
													function (
														e,
														t
													) {
														e.content
															? Y(
																	y,
																	e
															  ) ||
															  ((_ =
																	_.push(
																		e
																	)),
															  b.push(
																	t
															  ))
															: Y(
																	y,
																	e
															  )
															? ((C =
																	C.push(
																		e.id
																	)),
															  b.push(
																	t
															  ))
															: b.push(
																	t
															  )
													}
												),
													(g =
														g.filter(
															function (
																e,
																t
															) {
																return !b.includes(
																	t
																)
															}
														)),
													(C =
														C.filter(
															function (
																e
															) {
																return (
																	y.annotations.has(
																		e
																	) ||
																	s._existingFormFieldValuesIds.has(
																		e
																	) ||
																	s._existingFormFieldsIds.has(
																		e
																	) ||
																	s._existingCommentIds.has(
																		e
																	) ||
																	s._existingBookmarksIds.has(
																		e
																	)
																)
															}
														))
											}
											var F =
													(0,
													u.aV)().withMutations(
														function (
															e
														) {
															s._filterRecords(
																_
															).forEach(
																function (
																	t
																) {
																	var n =
																			t.id,
																		i =
																			t.content,
																		l =
																			{
																				permissions:
																					t.permissions,
																				group: t.group
																			}
																	try {
																		;(0,
																		h._Q)(
																			i
																		)
																			? (o.push(
																					(0,
																					h.IN)(
																						n,
																						i,
																						l
																					)
																			  ),
																			  (s._existingFormFieldsIds =
																					s._existingFormFieldsIds.add(
																						n
																					)))
																			: (0,
																			  h.Qp)(
																					i
																			  )
																			? ((a =
																					a.push(
																						(0,
																						h.u9)(
																							i
																						)
																					)),
																			  (s._existingFormFieldValuesIds =
																					s._existingFormFieldValuesIds.add(
																						n
																					)))
																			: (0,
																			  h.l9)(
																					i
																			  )
																			? ((r =
																					r.push(
																						(0,
																						f.i)(
																							n,
																							i
																						)
																					)),
																			  (s._existingBookmarksIds =
																					s._existingBookmarksIds.add(
																						n
																					)))
																			: (0,
																			  h.Fd)(
																					i
																			  )
																			? ((s._existingCommentIds =
																					s._existingCommentIds.add(
																						n
																					)),
																			  (c =
																					c.push(
																						(0,
																						h.Mu)(
																							n,
																							i,
																							l
																						)
																					)))
																			: (0,
																			  h.$T)(
																					i
																			  ) ||
																			  (0,
																			  h._o)(
																					i
																			  ) ||
																			  e.push(
																					(0,
																					h.vH)(
																						n,
																						i,
																						l
																					)
																			  )
																	} catch (e) {
																		;(0,
																		d.um)(
																			'Skipped creating record #'.concat(
																				n,
																				' from payload because an error occurred while deserializing.'
																			),
																			i
																		),
																			(0,
																			d.um)(
																				e
																			)
																	}
																}
															)
														}
													),
												w =
													!y ||
													(0,
													ne.xW)(
														y.features,
														y.signatureFeatureAvailability
													)
											o.length >
												0 &&
												((0,
												d.kG)(
													this
														._formFieldCallbacks
												),
												y &&
												!w
													? this._formFieldCallbacks.createFormFields(
															(0,
															u.aV)(
																o.filter(
																	function (
																		e
																	) {
																		return !(
																			e instanceof
																			ie.Yo
																		)
																	}
																)
															),
															i
													  )
													: this._formFieldCallbacks.createFormFields(
															(0,
															u.aV)(
																o
															),
															i
													  )),
												F.size >
													0 &&
													((0,
													d.kG)(
														this
															._annotationCallbacks
													),
													y &&
														!w &&
														(F =
															F.filter(
																function (
																	e
																) {
																	if (
																		!(
																			e instanceof
																			se.x_
																		)
																	)
																		return e
																	var t =
																		o.find(
																			function (
																				t
																			) {
																				return (
																					t.name ===
																					e.formFieldName
																				)
																			}
																		) ||
																		y.formFields.get(
																			e.formFieldName
																		)
																	return !(
																		t &&
																		t instanceof
																			ie.Yo
																	)
																}
															)),
													this._annotationCallbacks.createAnnotations(
														F,
														(0,
														u.D5)(),
														i
													)),
												a.size >
													0 &&
													((0,
													d.kG)(
														this
															._formFieldValueCallbacks
													),
													y &&
														!w &&
														(a =
															a.filter(
																function (
																	e
																) {
																	var t =
																		o.find(
																			function (
																				t
																			) {
																				return (
																					t.name ===
																					e.name
																				)
																			}
																		) ||
																		y.formFields.get(
																			e.formFieldName
																		)
																	return !(
																		t &&
																		t instanceof
																			ie.Yo
																	)
																}
															)),
													this._formFieldValueCallbacks.createFormFieldValues(
														(0,
														u.aV)(
															a
														),
														i
													)),
												c.size >
													0 &&
													((0,
													d.kG)(
														this
															._commentCallbacks
													),
													this._commentCallbacks.createComments(
														c,
														i
													)),
												r.size >
													0 &&
													((0,
													d.kG)(
														this
															._bookmarkCallbacks
													),
													this._bookmarkCallbacks.createBookmarks(
														r,
														i
													))
											var R =
													(0,
													u.aV)().asMutable(),
												I =
													[],
												x =
													[],
												Z =
													[],
												S =
													(0,
													u.aV)().withMutations(
														function (
															e
														) {
															s._filterRecords(
																g
															).forEach(
																function (
																	t
																) {
																	var n =
																			t.id,
																		i =
																			t.content,
																		s =
																			t.group,
																		r =
																			{
																				permissions:
																					t.permissions,
																				group: s
																			}
																	try {
																		if (
																			(0,
																			h._Q)(
																				i
																			)
																		)
																			try {
																				I.push(
																					(0,
																					h.IN)(
																						n,
																						i,
																						r
																					)
																				)
																			} catch (e) {
																				;(m =
																					m.add(
																						n
																					)),
																					(0,
																					d.um)(
																						'Skipped updating form field #'.concat(
																							n,
																							' from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.'
																						),
																						i
																					),
																					(0,
																					d.um)(
																						e
																					)
																			}
																		else if (
																			(0,
																			h.Qp)(
																				i
																			)
																		)
																			try {
																				x.push(
																					(0,
																					h.u9)(
																						i
																					)
																				)
																			} catch (e) {
																				;(v =
																					v.add(
																						n
																					)),
																					(0,
																					d.um)(
																						'Skipped updating form field value #'.concat(
																							n,
																							' from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.'
																						),
																						i
																					),
																					(0,
																					d.um)(
																						e
																					)
																			}
																		else if (
																			(0,
																			h.l9)(
																				i
																			)
																		)
																			try {
																				R.push(
																					(0,
																					f.i)(
																						n,
																						i
																					)
																				)
																			} catch (e) {
																				;(p =
																					p.add(
																						n
																					)),
																					(0,
																					d.um)(
																						'Skipped updating bookmark #'.concat(
																							n,
																							' from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.'
																						),
																						i
																					),
																					(0,
																					d.um)(
																						e
																					)
																			}
																		else if (
																			(0,
																			h.Fd)(
																				i
																			)
																		)
																			try {
																				Z.push(
																					(0,
																					h.Mu)(
																						n,
																						i,
																						r
																					)
																				)
																			} catch (e) {
																				;(k =
																					k.add(
																						n
																					)),
																					(0,
																					d.um)(
																						'Skipped updating comment #'.concat(
																							n,
																							' from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.'
																						),
																						i,
																						e
																					)
																			}
																		else
																			e.push(
																				(0,
																				h.vH)(
																					n,
																					i,
																					r
																				)
																			)
																	} catch (e) {
																		;(l =
																			l.add(
																				n
																			)),
																			(0,
																			d.um)(
																				'Skipped updating annotation #'.concat(
																					n,
																					' from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.'
																				),
																				i
																			),
																			(0,
																			d.um)(
																				e
																			)
																	}
																}
															)
														}
													)
											S.size >
												0 &&
												((0,
												d.kG)(
													this
														._annotationCallbacks
												),
												this._annotationCallbacks.updateAnnotations(
													S
												)),
												R.size >
													0 &&
													((0,
													d.kG)(
														this
															._bookmarkCallbacks
													),
													this._bookmarkCallbacks.updateBookmarks(
														R
													)),
												I.length >
													0 &&
													((0,
													d.kG)(
														this
															._formFieldCallbacks
													),
													this._formFieldCallbacks.updateFormFields(
														(0,
														u.aV)(
															I
														)
													)),
												x.length >
													0 &&
													((0,
													d.kG)(
														this
															._formFieldValueCallbacks
													),
													this._formFieldValueCallbacks.setFormFieldValues(
														(0,
														u.aV)(
															x
														)
													)),
												Z.length >
													0 &&
													((0,
													d.kG)(
														this
															._commentCallbacks
													),
													this._commentCallbacks.updateComments(
														(0,
														u.aV)(
															Z
														)
													)),
												(l =
													l.concat(
														C.filter(
															function (
																e
															) {
																return !(
																	s._existingBookmarksIds.has(
																		e
																	) ||
																	s._existingFormFieldsIds.has(
																		e
																	) ||
																	s._existingFormFieldValuesIds.has(
																		e
																	) ||
																	s._existingCommentIds.has(
																		e
																	)
																)
															}
														).toSet()
													))
													.size >
													0 &&
													((0,
													d.kG)(
														this
															._annotationCallbacks
													),
													this._annotationCallbacks.deleteAnnotations(
														l
													)),
												(p =
													p.concat(
														C.filter(
															function (
																e
															) {
																var t =
																	s._existingBookmarksIds.has(
																		e
																	)
																return (
																	t &&
																		(s._existingBookmarksIds =
																			s._existingBookmarksIds.delete(
																				e
																			)),
																	t
																)
															}
														).toSet()
													))
													.size >
													0 &&
													((0,
													d.kG)(
														this
															._bookmarkCallbacks
													),
													this._bookmarkCallbacks.deleteBookmarks(
														p
													)),
												(m =
													m.concat(
														C.filter(
															function (
																e
															) {
																var t =
																	s._existingFormFieldsIds.has(
																		e
																	)
																return (
																	t &&
																		(s._existingFormFieldsIds =
																			s._existingFormFieldsIds.delete(
																				e
																			)),
																	t
																)
															}
														).toSet()
													))
													.size >
													0 &&
													((0,
													d.kG)(
														this
															._formFieldCallbacks
													),
													this._formFieldCallbacks.deleteFormFields(
														m
													)),
												(v =
													v.concat(
														C.filter(
															function (
																e
															) {
																var t =
																	s._existingFormFieldValuesIds.has(
																		e
																	)
																return (
																	t &&
																		(s._existingFormFieldValuesIds =
																			s._existingFormFieldValuesIds.delete(
																				e
																			)),
																	t
																)
															}
														).toSet()
													))
													.size >
													0 &&
													((0,
													d.kG)(
														this
															._formFieldValueCallbacks
													),
													this._formFieldValueCallbacks.deleteFormFieldValues(
														v
													)),
												(k =
													k.concat(
														C.filter(
															function (
																e
															) {
																var t =
																	s._existingCommentIds.has(
																		e
																	)
																return (
																	t &&
																		(s._existingCommentIds =
																			s._existingCommentIds.delete(
																				e
																			)),
																	t
																)
															}
														).toSet()
													))
													.size >
													0 &&
													((0,
													d.kG)(
														this
															._commentCallbacks
													),
													this._commentCallbacks.deleteComments(
														k
													))
										}
									},
									{
										key: '_onAcceptedRecords',
										value: function (
											e,
											t
										) {
											var n =
												this
													._getState
													? this._getState()
													: void 0
											if (
												n &&
												n.backend &&
												n.backend.isCollaborationPermissionsEnabled()
											) {
												var i =
														[],
													s =
														[],
													r =
														[],
													o =
														[],
													a =
														[],
													c =
														[]
												e.isEmpty() ||
													e.forEach(
														l
													),
													t.isEmpty() ||
														t.forEach(
															l
														),
													i.length >
														0 &&
														((0,
														d.kG)(
															this
																._annotationCallbacks
														),
														this._annotationCallbacks.updateAnnotations(
															(0,
															u.aV)(
																i
															),
															!0
														)),
													s.length >
														0 &&
														((0,
														d.kG)(
															this
																._commentCallbacks
														),
														this._commentCallbacks.updateComments(
															(0,
															u.aV)(
																s
															)
														)),
													r.length >
														0 &&
														((0,
														d.kG)(
															this
																._formFieldCallbacks
														),
														this._formFieldCallbacks.updateFormFields(
															(0,
															u.aV)(
																r
															)
														)),
													o.length >
														0 &&
														((0,
														d.kG)(
															this
																._annotationCallbacks
														),
														this._annotationCallbacks.deleteAnnotations(
															(0,
															u.l4)(
																o
															),
															!0
														)),
													a.length >
														0 &&
														((0,
														d.kG)(
															this
																._commentCallbacks
														),
														this._commentCallbacks.deleteComments(
															(0,
															u.l4)(
																a
															)
														)),
													c.length >
														0 &&
														((0,
														d.kG)(
															this
																._formFieldCallbacks
														),
														this._formFieldCallbacks.deleteFormFields(
															(0,
															u.l4)(
																c
															)
														))
											}
											function l(
												e
											) {
												var t =
														{
															permissions:
																e.permissions,
															group: e.group
														},
													l =
														Q(
															n,
															e
														)
												if (
													l &&
													'string' !=
														typeof l
												) {
													;(0,
													te.G)(
														t
													)
													var u =
														(0,
														te.a5)(
															t
														)
													;(l =
														l.merge(
															u
														)) instanceof
													$.Z
														? t.permissions &&
														  t
																.permissions
																.view
															? i.push(
																	l
															  )
															: o.push(
																	l.id
															  )
														: l instanceof
														  X.Z
														? t.permissions &&
														  t
																.permissions
																.view
															? s.push(
																	l
															  )
															: ((0,
															  d.kG)(
																	l.id
															  ),
															  a.push(
																	l.id
															  ))
														: l instanceof
																ee.ZP &&
														  (t.permissions &&
														  t
																.permissions
																.view
																? r.push(
																		l
																  )
																: c.push(
																		l.id
																  ))
												}
											}
										}
									},
									{
										key: 'onClientsChange',
										value: function (
											e
										) {
											if (
												'function' !=
												typeof e
											)
												throw new TypeError(
													'Callback must be a function'
												)
											this.onClientsChangeCallback =
												e
										}
									},
									{
										key: '_onClientsChange',
										value: function (
											e
										) {
											this.onClientsChangeCallback.call(
												null,
												e
											)
										}
									}
								]
							),
							e
						)
					})()
		}
	}
])
