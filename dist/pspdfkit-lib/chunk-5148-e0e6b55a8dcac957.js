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
	[5148],
	{
		22078: function (
			e,
			r
		) {
			Object.defineProperty(
				r,
				'__esModule',
				{
					value: !0
				}
			)
			var t =
				new WeakMap()
			r.default =
				function (
					e
				) {
					var r =
						t.get(
							e
						)
					return (
						r ||
							((r =
								Object.create(
									null
								)),
							t.set(
								e,
								r
							)),
						r
					)
				}
		},
		26362: function (
			e,
			r,
			t
		) {
			Object.defineProperty(
				r,
				'__esModule',
				{
					value: !0
				}
			),
				(r.PluralRules =
					void 0)
			var n =
					t(
						70655
					),
				a =
					t(
						99342
					),
				u =
					n.__importDefault(
						t(
							22078
						)
					)
			function i(
				e,
				r
			) {
				if (
					!(
						e instanceof
						l
					)
				)
					throw new TypeError(
						'Method Intl.PluralRules.prototype.' +
							r +
							' called on incompatible receiver ' +
							String(
								e
							)
					)
			}
			function o(
				e,
				r,
				t,
				n
			) {
				var a =
						n.IntegerDigits,
					u =
						n.NumberOfFractionDigits,
					i =
						n.FractionDigits
				return l.localeData[
					e
				].fn(
					u
						? a +
								'.' +
								i
						: a,
					'ordinal' ===
						r
				)
			}
			var l =
				(function () {
					function e(
						r,
						t
					) {
						if (
							!(this &&
							this instanceof
								e
								? this
										.constructor
								: void 0)
						)
							throw new TypeError(
								"Intl.PluralRules must be called with 'new'"
							)
						return a.InitializePluralRules(
							this,
							r,
							t,
							{
								availableLocales:
									e.availableLocales,
								relevantExtensionKeys:
									e.relevantExtensionKeys,
								localeData:
									e.localeData,
								getDefaultLocale:
									e.getDefaultLocale,
								getInternalSlots:
									u.default
							}
						)
					}
					return (
						(e.prototype.resolvedOptions =
							function () {
								i(
									this,
									'resolvedOptions'
								)
								var r =
										Object.create(
											null
										),
									t =
										u.default(
											this
										)
								return (
									(r.locale =
										t.locale),
									(r.type =
										t.type),
									[
										'minimumIntegerDigits',
										'minimumFractionDigits',
										'maximumFractionDigits',
										'minimumSignificantDigits',
										'maximumSignificantDigits'
									].forEach(
										function (
											e
										) {
											var n =
												t[
													e
												]
											void 0 !==
												n &&
												(r[
													e
												] =
													n)
										}
									),
									(r.pluralCategories =
										n.__spreadArrays(
											e
												.localeData[
												r
													.locale
											]
												.categories[
												r
													.type
											]
										)),
									r
								)
							}),
						(e.prototype.select =
							function (
								e
							) {
								i(
									this,
									'select'
								)
								var r =
									a.ToNumber(
										e
									)
								return a.ResolvePlural(
									this,
									r,
									{
										getInternalSlots:
											u.default,
										PluralRuleSelect:
											o
									}
								)
							}),
						(e.prototype.toString =
							function () {
								return '[object Intl.PluralRules]'
							}),
						(e.supportedLocalesOf =
							function (
								r,
								t
							) {
								return a.SupportedLocales(
									e.availableLocales,
									a.CanonicalizeLocaleList(
										r
									),
									t
								)
							}),
						(e.__addLocaleData =
							function () {
								for (
									var r =
											[],
										t = 0;
									t <
									arguments.length;
									t++
								)
									r[
										t
									] =
										arguments[
											t
										]
								for (
									var n =
											function (
												r
											) {
												r.availableLocales.forEach(
													function (
														t
													) {
														try {
															e.localeData[
																t
															] =
																a.unpackData(
																	t,
																	r
																)
														} catch (e) {
															if (
																a.isMissingLocaleDataError(
																	e
																)
															)
																return
															throw e
														}
													}
												)
											},
										u = 0,
										i =
											r;
									u <
									i.length;
									u++
								) {
									var o =
										i[
											u
										]
									n(
										o
									)
								}
								;(e.availableLocales =
									Object.keys(
										e.localeData
									)),
									e.__defaultLocale ||
										(e.__defaultLocale =
											e.availableLocales[0])
							}),
						(e.getDefaultLocale =
							function () {
								return e.__defaultLocale
							}),
						(e.localeData =
							{}),
						(e.availableLocales =
							[]),
						(e.__defaultLocale =
							'en'),
						(e.relevantExtensionKeys =
							[]),
						(e.polyfilled =
							!0),
						e
					)
				})()
			r.PluralRules =
				l
			try {
				'undefined' !=
					typeof Symbol &&
					Object.defineProperty(
						l.prototype,
						Symbol.toStringTag,
						{
							value: 'Intl.PluralRules',
							writable:
								!1,
							enumerable:
								!1,
							configurable:
								!0
						}
					)
				try {
					Object.defineProperty(
						l,
						'length',
						{
							value: 0,
							writable:
								!1,
							enumerable:
								!1,
							configurable:
								!0
						}
					)
				} catch (e) {}
				Object.defineProperty(
					l
						.prototype
						.constructor,
					'length',
					{
						value: 0,
						writable:
							!1,
						enumerable:
							!1,
						configurable:
							!0
					}
				),
					Object.defineProperty(
						l.supportedLocalesOf,
						'length',
						{
							value: 1,
							writable:
								!1,
							enumerable:
								!1,
							configurable:
								!0
						}
					)
			} catch (e) {}
		},
		99342: function (
			e,
			r,
			t
		) {
			t.r(r),
				t.d(r, {
					ArrayCreate:
						function () {
							return R
						},
					BasicFormatMatcher:
						function () {
							return M
						},
					BestFitFormatMatcher:
						function () {
							return S
						},
					CanonicalCodeForDisplayNames:
						function () {
							return Se
						},
					CanonicalizeLocaleList:
						function () {
							return C
						},
					CanonicalizeTimeZoneName:
						function () {
							return O
						},
					ComputeExponent:
						function () {
							return Le
						},
					ComputeExponentForMagnitude:
						function () {
							return Ie
						},
					CurrencyDigits:
						function () {
							return Be
						},
					DATE_TIME_PROPS:
						function () {
							return d
						},
					DateFromTime:
						function () {
							return q
						},
					DateTimeStyleFormat:
						function () {
							return N
						},
					Day: function () {
						return z
					},
					DayFromYear:
						function () {
							return U
						},
					DayWithinYear:
						function () {
							return K
						},
					DaysInYear:
						function () {
							return Y
						},
					FormatDateTime:
						function () {
							return ue
						},
					FormatDateTimeRange:
						function () {
							return le
						},
					FormatDateTimeRangeToParts:
						function () {
							return ce
						},
					FormatDateTimeToParts:
						function () {
							return se
						},
					FormatNumericToParts:
						function () {
							return qe
						},
					FormatNumericToString:
						function () {
							return Re
						},
					FormatRelativeTime:
						function () {
							return ur
						},
					FormatRelativeTimeToParts:
						function () {
							return ir
						},
					GetNumberOption:
						function () {
							return Oe
						},
					GetOperands:
						function () {
							return Xe
						},
					GetOption:
						function () {
							return me
						},
					HasOwnProperty:
						function () {
							return L
						},
					HourFromTime:
						function () {
							return V
						},
					InLeapYear:
						function () {
							return H
						},
					InitializeDateTimeFormat:
						function () {
							return ye
						},
					InitializeNumberFormat:
						function () {
							return Qe
						},
					InitializePluralRules:
						function () {
							return er
						},
					InitializeRelativeTimeFormat:
						function () {
							return lr
						},
					IsSanctionedSimpleUnitIdentifier:
						function () {
							return Ae
						},
					IsValidTimeZoneName:
						function () {
							return pe
						},
					IsWellFormedCurrencyCode:
						function () {
							return Fe
						},
					IsWellFormedUnitIdentifier:
						function () {
							return ke
						},
					MakePartsList:
						function () {
							return nr
						},
					MinFromTime:
						function () {
							return J
						},
					MonthFromTime:
						function () {
							return W
						},
					PartitionDateTimePattern:
						function () {
							return ae
						},
					PartitionNumberPattern:
						function () {
							return We
						},
					PartitionPattern:
						function () {
							return ne
						},
					PartitionRelativeTimePattern:
						function () {
							return ar
						},
					RangePatternType:
						function () {
							return mr
						},
					ResolveLocale:
						function () {
							return ve
						},
					ResolvePlural:
						function () {
							return rr
						},
					SANCTIONED_UNITS:
						function () {
							return Me
						},
					SIMPLE_UNITS:
						function () {
							return xe
						},
					SameValue:
						function () {
							return T
						},
					SecFromTime:
						function () {
							return Q
						},
					SetNumberFormatDigitOptions:
						function () {
							return Je
						},
					SetNumberFormatUnitOptions:
						function () {
							return Ve
						},
					SingularRelativeTimeUnit:
						function () {
							return tr
						},
					SupportedLocales:
						function () {
							return sr
						},
					TimeClip:
						function () {
							return I
						},
					TimeFromYear:
						function () {
							return $
						},
					ToDateTimeOptions:
						function () {
							return fe
						},
					ToNumber:
						function () {
							return k
						},
					ToObject:
						function () {
							return P
						},
					ToRawFixed:
						function () {
							return Te
						},
					ToRawPrecision:
						function () {
							return Pe
						},
					ToString:
						function () {
							return A
						},
					Type: function () {
						return B
					},
					WeekDay:
						function () {
							return Z
						},
					YearFromTime:
						function () {
							return G
						},
					_formatToParts:
						function () {
							return Ge
						},
					defineProperty:
						function () {
							return f
						},
					getInternalSlot:
						function () {
							return l
						},
					getLocaleHierarchy:
						function () {
							return fr
						},
					getMagnitude:
						function () {
							return a
						},
					getMultiInternalSlots:
						function () {
							return c
						},
					invariant:
						function () {
							return g
						},
					isLiteralPart:
						function () {
							return s
						},
					isMissingLocaleDataError:
						function () {
							return dr
						},
					parseDateTimeSkeleton:
						function () {
							return b
						},
					removeUnitNamespace:
						function () {
							return Ne
						},
					setInternalSlot:
						function () {
							return i
						},
					setMultiInternalSlots:
						function () {
							return o
						},
					unpackData:
						function () {
							return vr
						}
				})
			var n =
				t(70655)
			function a(
				e
			) {
				return Math.floor(
					Math.log(
						e
					) *
						Math.LOG10E
				)
			}
			function u(
				e,
				r
			) {
				if (
					'function' ==
					typeof e.repeat
				)
					return e.repeat(
						r
					)
				for (
					var t =
							new Array(
								r
							),
						n = 0;
					n <
					t.length;
					n++
				)
					t[
						n
					] = e
				return t.join(
					''
				)
			}
			function i(
				e,
				r,
				t,
				n
			) {
				e.get(
					r
				) ||
					e.set(
						r,
						Object.create(
							null
						)
					),
					(e.get(
						r
					)[
						t
					] = n)
			}
			function o(
				e,
				r,
				t
			) {
				for (
					var n = 0,
						a =
							Object.keys(
								t
							);
					n <
					a.length;
					n++
				) {
					var u =
						a[
							n
						]
					i(
						e,
						r,
						u,
						t[
							u
						]
					)
				}
			}
			function l(
				e,
				r,
				t
			) {
				return c(
					e,
					r,
					t
				)[t]
			}
			function c(
				e,
				r
			) {
				for (
					var t =
							[],
						n = 2;
					n <
					arguments.length;
					n++
				)
					t[
						n -
							2
					] =
						arguments[
							n
						]
				var a =
					e.get(
						r
					)
				if (!a)
					throw new TypeError(
						r +
							' InternalSlot has not been initialized'
					)
				return t.reduce(
					function (
						e,
						r
					) {
						return (
							(e[
								r
							] =
								a[
									r
								]),
							e
						)
					},
					Object.create(
						null
					)
				)
			}
			function s(
				e
			) {
				return (
					'literal' ===
					e.type
				)
			}
			function f(
				e,
				r,
				t
			) {
				var n =
					t.value
				Object.defineProperty(
					e,
					r,
					{
						configurable:
							!0,
						enumerable:
							!1,
						writable:
							!0,
						value: n
					}
				)
			}
			var m =
				/-u(?:-[0-9a-z]{2,8})+/gi
			function g(
				e,
				r,
				t
			) {
				if (
					(void 0 ===
						t &&
						(t =
							Error),
					!e)
				)
					throw new t(
						r
					)
			}
			var d = [
					'weekday',
					'era',
					'year',
					'month',
					'day',
					'hour',
					'minute',
					'second',
					'timeZoneName'
				],
				v =
					/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
				p =
					/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
			function h(
				e,
				r
			) {
				var t =
					e.length
				switch (
					e[0]
				) {
					case 'G':
						return (
							(r.era =
								4 ===
								t
									? 'long'
									: 5 ===
									  t
									? 'narrow'
									: 'short'),
							'{era}'
						)
					case 'y':
					case 'Y':
					case 'u':
					case 'U':
					case 'r':
						return (
							(r.year =
								2 ===
								t
									? '2-digit'
									: 'numeric'),
							'{year}'
						)
					case 'q':
					case 'Q':
						throw new RangeError(
							'`w/Q` (quarter) patterns are not supported'
						)
					case 'M':
					case 'L':
						return (
							(r.month =
								[
									'numeric',
									'2-digit',
									'short',
									'long',
									'narrow'
								][
									t -
										1
								]),
							'{month}'
						)
					case 'w':
					case 'W':
						throw new RangeError(
							'`w/W` (week of year) patterns are not supported'
						)
					case 'd':
						return (
							(r.day =
								[
									'numeric',
									'2-digit'
								][
									t -
										1
								]),
							'{day}'
						)
					case 'D':
					case 'F':
					case 'g':
						return (
							(r.day =
								'numeric'),
							'{day}'
						)
					case 'E':
						return (
							(r.weekday =
								4 ===
								t
									? 'long'
									: 5 ===
									  t
									? 'narrow'
									: 'short'),
							'{weekday}'
						)
					case 'e':
						return (
							(r.weekday =
								[
									'numeric',
									'2-digit',
									'short',
									'long',
									'narrow',
									'short'
								][
									t -
										1
								]),
							'{weekday}'
						)
					case 'c':
						return (
							(r.weekday =
								[
									'numeric',
									void 0,
									'short',
									'long',
									'narrow',
									'short'
								][
									t -
										1
								]),
							'{weekday}'
						)
					case 'a':
					case 'b':
					case 'B':
						return (
							(r.hour12 =
								!0),
							'{ampm}'
						)
					case 'h':
					case 'K':
						return (
							(r.hour =
								[
									'numeric',
									'2-digit'
								][
									t -
										1
								]),
							(r.hour12 =
								!0),
							'{hour}'
						)
					case 'H':
					case 'k':
						return (
							(r.hour =
								[
									'numeric',
									'2-digit'
								][
									t -
										1
								]),
							'{hour}'
						)
					case 'j':
					case 'J':
					case 'C':
						throw new RangeError(
							'`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead'
						)
					case 'm':
						return (
							(r.minute =
								[
									'numeric',
									'2-digit'
								][
									t -
										1
								]),
							'{minute}'
						)
					case 's':
						return (
							(r.second =
								[
									'numeric',
									'2-digit'
								][
									t -
										1
								]),
							'{second}'
						)
					case 'S':
					case 'A':
						return (
							(r.second =
								'numeric'),
							'{second}'
						)
					case 'z':
					case 'Z':
					case 'O':
					case 'v':
					case 'V':
					case 'X':
					case 'x':
						return (
							(r.timeZoneName =
								t <
								4
									? 'short'
									: 'long'),
							'{timeZoneName}'
						)
				}
				return ''
			}
			function D(
				e
			) {
				switch (
					e
				) {
					case 'G':
						return 'era'
					case 'y':
					case 'Y':
					case 'u':
					case 'U':
					case 'r':
						return 'year'
					case 'M':
					case 'L':
						return 'month'
					case 'd':
					case 'D':
					case 'F':
					case 'g':
						return 'day'
					case 'a':
					case 'b':
					case 'B':
						return 'ampm'
					case 'h':
					case 'H':
					case 'K':
					case 'k':
						return 'hour'
					case 'm':
						return 'minute'
					case 's':
					case 'S':
					case 'A':
						return 'second'
					default:
						throw new RangeError(
							'Invalid range pattern token'
						)
				}
			}
			function y(
				e,
				r
			) {
				var t =
						[],
					n = e
						.replace(
							/'{2}/g,
							'{apostrophe}'
						)
						.replace(
							/'(.*?)'/g,
							function (
								e,
								r
							) {
								return (
									t.push(
										r
									),
									'$$' +
										(t.length -
											1) +
										'$$'
								)
							}
						)
						.replace(
							v,
							function (
								e
							) {
								return h(
									e,
									r ||
										{}
								)
							}
						)
				return (
					t.length &&
						(n =
							n
								.replace(
									/\$\$(\d+)\$\$/g,
									function (
										e,
										r
									) {
										return t[
											+r
										]
									}
								)
								.replace(
									/\{apostrophe\}/g,
									"'"
								)),
					[
						n
							.replace(
								/([\s\uFEFF\xA0])\{ampm\}([\s\uFEFF\xA0])/,
								'$1'
							)
							.replace(
								'{ampm}',
								''
							)
							.replace(
								p,
								''
							),
						n
					]
				)
			}
			function b(
				e,
				r,
				t,
				a
			) {
				void 0 ===
					r &&
					(r =
						e)
				var u = {
					pattern:
						'',
					pattern12:
						'',
					skeleton:
						e,
					rawPattern:
						r,
					rangePatterns:
						{},
					rangePatterns12:
						{}
				}
				if (t)
					for (var i in t) {
						var o =
								D(
									i
								),
							l =
								{
									patternParts:
										[]
								},
							c =
								y(
									t[
										i
									],
									l
								),
							s =
								c[0],
							f =
								c[1]
						;(u.rangePatterns[
							o
						] =
							(0,
							n.__assign)(
								(0,
								n.__assign)(
									{},
									l
								),
								{
									patternParts:
										F(
											s
										)
								}
							)),
							(u.rangePatterns12[
								o
							] =
								(0,
								n.__assign)(
									(0,
									n.__assign)(
										{},
										l
									),
									{
										patternParts:
											F(
												f
											)
									}
								))
					}
				else if (
					a
				) {
					var m =
						(function (
							e
						) {
							return e
								.split(
									/(\{[0|1]\})/g
								)
								.filter(
									Boolean
								)
								.map(
									function (
										e
									) {
										switch (
											e
										) {
											case '{0}':
												return {
													source: 'startRange',
													pattern:
														e
												}
											case '{1}':
												return {
													source: 'endRange',
													pattern:
														e
												}
											default:
												return {
													source: 'shared',
													pattern:
														e
												}
										}
									}
								)
						})(
							a
						)
					;(u.rangePatterns.default =
						{
							patternParts:
								m
						}),
						(u.rangePatterns12.default =
							{
								patternParts:
									m
							})
				}
				e.replace(
					v,
					function (
						e
					) {
						return h(
							e,
							u
						)
					}
				)
				var g =
						y(
							r
						),
					d =
						g[0],
					p =
						g[1]
				return (
					(u.pattern =
						d),
					(u.pattern12 =
						p),
					u
				)
			}
			function F(
				e
			) {
				for (
					var r,
						t =
							{},
						n = 0;
					(r =
						/\{(.*?)\}/g.exec(
							e
						));

				) {
					if (
						r[0] in
						t
					) {
						n =
							r.index
						break
					}
					t[
						r[0]
					] =
						r.index
				}
				return n
					? [
							{
								source: 'startRange',
								pattern:
									e.slice(
										0,
										n
									)
							},
							{
								source: 'endRange',
								pattern:
									e.slice(
										n
									)
							}
					  ]
					: [
							{
								source: 'startRange',
								pattern:
									e
							}
					  ]
			}
			function w(
				e
			) {
				return (
					'numeric' ===
						e ||
					'2-digit' ===
						e
				)
			}
			function E(
				e,
				r
			) {
				var t = 0
				e.hour12 &&
				!r.hour12
					? (t -= 120)
					: !e.hour12 &&
					  r.hour12 &&
					  (t -= 20)
				for (
					var n = 0,
						a =
							d;
					n <
					a.length;
					n++
				) {
					var u =
							a[
								n
							],
						i =
							e[
								u
							],
						o =
							r[
								u
							]
					if (
						void 0 ===
							i &&
						void 0 !==
							o
					)
						t -= 20
					else if (
						void 0 !==
							i &&
						void 0 ===
							o
					)
						t -= 120
					else if (
						i !==
						o
					)
						if (
							w(
								i
							) !==
							w(
								o
							)
						)
							t -= 15
						else {
							var l =
									[
										'2-digit',
										'numeric',
										'narrow',
										'short',
										'long'
									],
								c =
									l.indexOf(
										i
									),
								s =
									l.indexOf(
										o
									),
								f =
									Math.max(
										-2,
										Math.min(
											s -
												c,
											2
										)
									)
							2 ===
							f
								? (t -= 6)
								: 1 ===
								  f
								? (t -= 3)
								: -1 ===
								  f
								? (t -= 6)
								: -2 ===
										f &&
								  (t -= 8)
						}
				}
				return t
			}
			function S(
				e,
				r
			) {
				var t =
						-1 /
						0,
					a =
						r[0]
				g(
					Array.isArray(
						r
					),
					'formats should be a list of things'
				)
				for (
					var u = 0,
						i =
							r;
					u <
					i.length;
					u++
				) {
					var o =
							i[
								u
							],
						l =
							E(
								e,
								o
							)
					l >
						t &&
						((t =
							l),
						(a =
							o))
				}
				var c =
						(0,
						n.__assign)(
							{},
							a
						),
					s = {
						rawPattern:
							a.rawPattern
					}
				for (var f in (y(
					a.rawPattern,
					s
				),
				c)) {
					var m =
							c[
								f
							],
						d =
							s[
								f
							],
						v =
							e[
								f
							]
					'minute' !==
						f &&
						'second' !==
							f &&
						v &&
						((w(
							d
						) &&
							!w(
								v
							)) ||
							(m !==
								v &&
								(s[
									f
								] =
									v)))
				}
				return (
					(s.pattern =
						c.pattern),
					(s.pattern12 =
						c.pattern12),
					(s.skeleton =
						c.skeleton),
					(s.rangePatterns =
						c.rangePatterns),
					(s.rangePatterns12 =
						c.rangePatterns12),
					s
				)
			}
			function C(
				e
			) {
				return Intl.getCanonicalLocales(
					e
				)
			}
			function O(
				e,
				r
			) {
				var t =
						r.tzData,
					n =
						r.uppercaseLinks,
					a =
						e.toUpperCase(),
					u =
						Object.keys(
							t
						).reduce(
							function (
								e,
								r
							) {
								return (
									(e[
										r.toUpperCase()
									] =
										r),
									e
								)
							},
							{}
						),
					i =
						n[
							a
						] ||
						u[
							a
						]
				return 'Etc/UTC' ===
					i ||
					'Etc/GMT' ===
						i
					? 'UTC'
					: i
			}
			function M(
				e,
				r
			) {
				var t =
						-1 /
						0,
					a =
						r[0]
				g(
					Array.isArray(
						r
					),
					'formats should be a list of things'
				)
				for (
					var u = 0,
						i =
							r;
					u <
					i.length;
					u++
				) {
					for (
						var o =
								i[
									u
								],
							l = 0,
							c = 0,
							s =
								d;
						c <
						s.length;
						c++
					) {
						var f =
								s[
									c
								],
							m =
								e[
									f
								],
							v =
								o[
									f
								]
						if (
							void 0 ===
								m &&
							void 0 !==
								v
						)
							l -= 20
						else if (
							void 0 !==
								m &&
							void 0 ===
								v
						)
							l -= 120
						else if (
							m !==
							v
						) {
							var p =
									[
										'2-digit',
										'numeric',
										'narrow',
										'short',
										'long'
									],
								h =
									p.indexOf(
										m
									),
								D =
									p.indexOf(
										v
									),
								y =
									Math.max(
										-2,
										Math.min(
											D -
												h,
											2
										)
									)
							2 ===
							y
								? (l -= 6)
								: 1 ===
								  y
								? (l -= 3)
								: -1 ===
								  y
								? (l -= 6)
								: -2 ===
										y &&
								  (l -= 8)
						}
					}
					l >
						t &&
						((t =
							l),
						(a =
							o))
				}
				return (0,
				n.__assign)(
					{},
					a
				)
			}
			function N(
				e,
				r,
				t
			) {
				var n, a
				if (
					(void 0 !==
						r &&
						(g(
							'full' ===
								r ||
								'long' ===
									r ||
								'medium' ===
									r ||
								'short' ===
									r,
							'invalid timeStyle'
						),
						(a =
							t
								.timeFormat[
								r
							])),
					void 0 !==
						e &&
						(g(
							'full' ===
								e ||
								'long' ===
									e ||
								'medium' ===
									e ||
								'short' ===
									e,
							'invalid dateStyle'
						),
						(n =
							t
								.dateFormat[
								e
							])),
					void 0 !==
						e &&
						void 0 !==
							r)
				) {
					var u =
						{}
					for (var i in n)
						'pattern' !==
							i &&
							(u[
								i
							] =
								n[
									i
								])
					for (var i in a)
						'pattern' !==
							i &&
							'pattern12' !==
								i &&
							(u[
								i
							] =
								a[
									i
								])
					var o =
							t
								.dateTimeFormat[
								e
							],
						l =
							o
								.replace(
									'{0}',
									a.pattern
								)
								.replace(
									'{1}',
									n.pattern
								)
					if (
						((u.pattern =
							l),
						'pattern12' in
							a)
					) {
						var c =
							o
								.replace(
									'{0}',
									a.pattern12
								)
								.replace(
									'{1}',
									n.pattern
								)
						u.pattern12 =
							c
					}
					return u
				}
				return void 0 !==
					r
					? a
					: (g(
							void 0 !==
								e,
							'dateStyle should not be undefined'
					  ),
					  n)
			}
			var x =
				t(90484)
			function A(
				e
			) {
				if (
					'symbol' ===
					(0,
					x.Z)(
						e
					)
				)
					throw TypeError(
						'Cannot convert a Symbol value to a string'
					)
				return String(
					e
				)
			}
			function k(
				e
			) {
				if (
					void 0 ===
					e
				)
					return NaN
				if (
					null ===
					e
				)
					return 0
				if (
					'boolean' ==
					typeof e
				)
					return e
						? 1
						: 0
				if (
					'number' ==
					typeof e
				)
					return e
				if (
					'symbol' ===
						(0,
						x.Z)(
							e
						) ||
					'bigint' ==
						typeof e
				)
					throw new TypeError(
						'Cannot convert symbol/bigint to number'
					)
				return Number(
					e
				)
			}
			function I(
				e
			) {
				return isFinite(
					e
				)
					? Math.abs(
							e
					  ) >
					  864e14
						? NaN
						: (function (
								e
						  ) {
								var r =
									k(
										e
									)
								if (
									isNaN(
										r
									) ||
									T(
										r,
										-0
									)
								)
									return 0
								if (
									isFinite(
										r
									)
								)
									return r
								var t =
									Math.floor(
										Math.abs(
											r
										)
									)
								return (
									r <
										0 &&
										(t =
											-t),
									T(
										t,
										-0
									)
										? 0
										: t
								)
						  })(
								e
						  )
					: NaN
			}
			function P(
				e
			) {
				if (
					null ==
					e
				)
					throw new TypeError(
						'undefined/null cannot be converted to object'
					)
				return Object(
					e
				)
			}
			function T(
				e,
				r
			) {
				return Object.is
					? Object.is(
							e,
							r
					  )
					: e ===
					  r
					? 0 !==
							e ||
					  1 /
							e ==
							1 /
								r
					: e !=
							e &&
					  r !=
							r
			}
			function R(
				e
			) {
				return new Array(
					e
				)
			}
			function L(
				e,
				r
			) {
				return Object.prototype.hasOwnProperty.call(
					e,
					r
				)
			}
			function B(
				e
			) {
				return null ===
					e
					? 'Null'
					: void 0 ===
					  e
					? 'Undefined'
					: 'function' ==
							typeof e ||
					  'object' ===
							(0,
							x.Z)(
								e
							)
					? 'Object'
					: 'number' ==
					  typeof e
					? 'Number'
					: 'boolean' ==
					  typeof e
					? 'Boolean'
					: 'string' ==
					  typeof e
					? 'String'
					: 'symbol' ===
					  (0,
					  x.Z)(
							e
					  )
					? 'Symbol'
					: 'bigint' ==
					  typeof e
					? 'BigInt'
					: void 0
			}
			var j = 864e5
			function _(
				e,
				r
			) {
				return (
					e -
					Math.floor(
						e /
							r
					) *
						r
				)
			}
			function z(
				e
			) {
				return Math.floor(
					e / j
				)
			}
			function Z(
				e
			) {
				return _(
					z(
						e
					) +
						4,
					7
				)
			}
			function U(
				e
			) {
				return (
					365 *
						(e -
							1970) +
					Math.floor(
						(e -
							1969) /
							4
					) -
					Math.floor(
						(e -
							1901) /
							100
					) +
					Math.floor(
						(e -
							1601) /
							400
					)
				)
			}
			function $(
				e
			) {
				return (
					j *
					U(e)
				)
			}
			function G(
				e
			) {
				for (
					var r =
						Math.ceil(
							e /
								j /
								366
						);
					$(
						r
					) <=
					e;

				)
					r++
				return (
					r - 1
				)
			}
			function Y(
				e
			) {
				return e %
					4 !=
					0
					? 365
					: e %
							100 !=
					  0
					? 366
					: e %
							400 !=
					  0
					? 365
					: 366
			}
			function K(
				e
			) {
				return (
					z(
						e
					) -
					U(
						G(
							e
						)
					)
				)
			}
			function H(
				e
			) {
				return 365 ===
					Y(
						G(
							e
						)
					)
					? 0
					: 1
			}
			function W(
				e
			) {
				var r =
						K(
							e
						),
					t =
						H(
							e
						)
				if (
					r >=
						0 &&
					r <
						31
				)
					return 0
				if (
					r <
					59 +
						t
				)
					return 1
				if (
					r <
					90 +
						t
				)
					return 2
				if (
					r <
					120 +
						t
				)
					return 3
				if (
					r <
					151 +
						t
				)
					return 4
				if (
					r <
					181 +
						t
				)
					return 5
				if (
					r <
					212 +
						t
				)
					return 6
				if (
					r <
					243 +
						t
				)
					return 7
				if (
					r <
					273 +
						t
				)
					return 8
				if (
					r <
					304 +
						t
				)
					return 9
				if (
					r <
					334 +
						t
				)
					return 10
				if (
					r <
					365 +
						t
				)
					return 11
				throw new Error(
					'Invalid time'
				)
			}
			function q(
				e
			) {
				var r =
						K(
							e
						),
					t =
						W(
							e
						),
					n =
						H(
							e
						)
				if (
					0 ===
					t
				)
					return (
						r +
						1
					)
				if (
					1 ===
					t
				)
					return (
						r -
						30
					)
				if (
					2 ===
					t
				)
					return (
						r -
						58 -
						n
					)
				if (
					3 ===
					t
				)
					return (
						r -
						89 -
						n
					)
				if (
					4 ===
					t
				)
					return (
						r -
						119 -
						n
					)
				if (
					5 ===
					t
				)
					return (
						r -
						150 -
						n
					)
				if (
					6 ===
					t
				)
					return (
						r -
						180 -
						n
					)
				if (
					7 ===
					t
				)
					return (
						r -
						211 -
						n
					)
				if (
					8 ===
					t
				)
					return (
						r -
						242 -
						n
					)
				if (
					9 ===
					t
				)
					return (
						r -
						272 -
						n
					)
				if (
					10 ===
					t
				)
					return (
						r -
						303 -
						n
					)
				if (
					11 ===
					t
				)
					return (
						r -
						333 -
						n
					)
				throw new Error(
					'Invalid time'
				)
			}
			function V(
				e
			) {
				return _(
					Math.floor(
						e /
							36e5
					),
					24
				)
			}
			function J(
				e
			) {
				return _(
					Math.floor(
						e /
							6e4
					),
					60
				)
			}
			function Q(
				e
			) {
				return _(
					Math.floor(
						e /
							1e3
					),
					60
				)
			}
			function X(
				e,
				r,
				t,
				n
			) {
				var a =
					n.tzData
				g(
					'Number' ===
						B(
							e
						),
					'invalid time'
				),
					g(
						'gregory' ===
							r,
						'We only support Gregory calendar right now'
					)
				var u =
						(function (
							e,
							r,
							t
						) {
							var n,
								a =
									t[
										r
									]
							if (
								!a
							)
								return [
									0,
									!1
								]
							for (
								var u = 0,
									i = 0,
									o =
										!1;
								u <=
								a.length;
								u++
							)
								if (
									u ===
										a.length ||
									1e3 *
										a[
											u
										][0] >
										e
								) {
									;(i =
										(n =
											a[
												u -
													1
											])[2]),
										(o =
											n[3])
									break
								}
							return [
								1e3 *
									i,
								o
							]
						})(
							e,
							t,
							a
						),
					i =
						u[0],
					o =
						u[1],
					l =
						e +
						i,
					c =
						G(
							l
						)
				return {
					weekday:
						Z(
							l
						),
					era:
						c <
						0
							? 'BC'
							: 'AD',
					year: c,
					relatedYear:
						void 0,
					yearName:
						void 0,
					month: W(
						l
					),
					day: q(
						l
					),
					hour: V(
						l
					),
					minute: J(
						l
					),
					second: Q(
						l
					),
					inDST: o,
					timeZoneOffset:
						i
				}
			}
			function ee(
				e
			) {
				return e <
					10
					? '0' +
							e
					: String(
							e
					  )
			}
			function re(
				e,
				r,
				t,
				n
			) {
				var a =
						Math.floor(
							t /
								6e4
						),
					u =
						Math.abs(
							a
						) %
						60,
					i =
						Math.floor(
							Math.abs(
								a
							) /
								60
						),
					o =
						r.split(
							';'
						),
					l =
						o[0],
					c =
						o[1],
					s =
						'',
					f =
						t <
						0
							? c
							: l
				return (
					'long' ===
					n
						? (s =
								f
									.replace(
										'HH',
										ee(
											i
										)
									)
									.replace(
										'H',
										String(
											i
										)
									)
									.replace(
										'mm',
										ee(
											u
										)
									)
									.replace(
										'm',
										String(
											u
										)
									))
						: (u ||
								i) &&
						  (u ||
								(f =
									f.replace(
										/:?m+/,
										''
									)),
						  (s =
								f
									.replace(
										/H+/,
										String(
											i
										)
									)
									.replace(
										/m+/,
										String(
											u
										)
									))),
					e.replace(
						'{0}',
						s
					)
				)
			}
			function te(
				e,
				r,
				t,
				n
			) {
				var a =
						n.getInternalSlots,
					u =
						n.localeData,
					i =
						n.getDefaultTimeZone,
					o =
						n.tzData
				t = I(t)
				var l =
						a(
							e
						),
					c =
						u[
							l
								.dataLocale
						],
					s =
						l.locale,
					f =
						Object.create(
							null
						)
				f.useGrouping =
					!1
				var m =
						new Intl.NumberFormat(
							s,
							f
						),
					g =
						Object.create(
							null
						)
				;(g.minimumIntegerDigits = 2),
					(g.useGrouping =
						!1)
				for (
					var v =
							new Intl.NumberFormat(
								s,
								g
							),
						p =
							X(
								t,
								l.calendar,
								l.timeZone,
								{
									tzData: o
								}
							),
						h =
							[],
						D = 0,
						y =
							r;
					D <
					y.length;
					D++
				) {
					var b =
							y[
								D
							],
						F =
							b.type
					if (
						'literal' ===
						F
					)
						h.push(
							{
								type: 'literal',
								value: b.value
							}
						)
					else if (
						d.indexOf(
							F
						) >
						-1
					) {
						var w =
								'',
							E =
								l[
									F
								],
							S =
								p[
									F
								]
						'year' ===
							F &&
							S <=
								0 &&
							(S =
								1 -
								S),
							'month' ===
								F &&
								S++
						var C =
							l.hourCycle
						if (
							('hour' !==
								F ||
								('h11' !==
									C &&
									'h12' !==
										C) ||
								(0 ===
									(S %= 12) &&
									'h12' ===
										C &&
									(S = 12)),
							'hour' ===
								F &&
								'h24' ===
									C &&
								0 ===
									S &&
								(S = 24),
							'numeric' ===
								E)
						)
							w =
								m.format(
									S
								)
						else if (
							'2-digit' ===
							E
						)
							(w =
								v.format(
									S
								))
								.length >
								2 &&
								(w =
									w.slice(
										w.length -
											2,
										w.length
									))
						else if (
							'narrow' ===
								E ||
							'short' ===
								E ||
							'long' ===
								E
						)
							if (
								'era' ===
								F
							)
								w =
									c[
										F
									][
										E
									][
										S
									]
							else if (
								'timeZoneName' ===
								F
							) {
								var O =
										c.timeZoneName,
									M =
										c.gmtFormat,
									N =
										c.hourFormat,
									x =
										O[
											l.timeZone ||
												i()
										]
								w =
									x &&
									x[
										E
									]
										? x[
												E
										  ][
												+p.inDST
										  ]
										: re(
												M,
												N,
												p.timeZoneOffset,
												E
										  )
							} else
								w =
									'month' ===
									F
										? c
												.month[
												E
										  ][
												S -
													1
										  ]
										: c[
												F
										  ][
												E
										  ][
												S
										  ]
						h.push(
							{
								type: F,
								value: w
							}
						)
					} else if (
						'ampm' ===
						F
					) {
						w =
							void 0
						;(w =
							(S =
								p.hour) >
							11
								? c.pm
								: c.am),
							h.push(
								{
									type: 'dayPeriod',
									value: w
								}
							)
					} else if (
						'relatedYear' ===
						F
					) {
						;(S =
							p.relatedYear),
							(w =
								m.format(
									S
								))
						h.push(
							{
								type: 'relatedYear',
								value: w
							}
						)
					} else if (
						'yearName' ===
						F
					) {
						;(S =
							p.yearName),
							(w =
								m.format(
									S
								))
						h.push(
							{
								type: 'yearName',
								value: w
							}
						)
					}
				}
				return h
			}
			function ne(
				e
			) {
				for (
					var r =
							[],
						t =
							e.indexOf(
								'{'
							),
						n = 0,
						a = 0,
						u =
							e.length;
					t <
						e.length &&
					t >
						-1;

				)
					g(
						(n =
							e.indexOf(
								'}',
								t
							)) >
							t,
						'Invalid pattern ' +
							e
					),
						t >
							a &&
							r.push(
								{
									type: 'literal',
									value: e.substring(
										a,
										t
									)
								}
							),
						r.push(
							{
								type: e.substring(
									t +
										1,
									n
								),
								value: void 0
							}
						),
						(a =
							n +
							1),
						(t =
							e.indexOf(
								'{',
								a
							))
				return (
					a <
						u &&
						r.push(
							{
								type: 'literal',
								value: e.substring(
									a,
									u
								)
							}
						),
					r
				)
			}
			function ae(
				e,
				r,
				t
			) {
				if (
					((r =
						I(
							r
						)),
					isNaN(
						r
					))
				)
					throw new RangeError(
						'invalid time'
					)
				return te(
					e,
					ne(
						(0,
						t.getInternalSlots)(
							e
						)
							.pattern
					),
					r,
					t
				)
			}
			function ue(
				e,
				r,
				t
			) {
				for (
					var n =
							'',
						a = 0,
						u =
							ae(
								e,
								r,
								t
							);
					a <
					u.length;
					a++
				) {
					n +=
						u[
							a
						]
							.value
				}
				return n
			}
			var ie = [
				'era',
				'year',
				'month',
				'day',
				'ampm',
				'hour',
				'minute',
				'second'
			]
			function oe(
				e,
				r,
				t,
				n
			) {
				if (
					((r =
						I(
							r
						)),
					isNaN(
						r
					))
				)
					throw new RangeError(
						'Invalid start time'
					)
				if (
					((t =
						I(
							t
						)),
					isNaN(
						t
					))
				)
					throw new RangeError(
						'Invalid end time'
					)
				for (
					var a,
						u =
							n.getInternalSlots,
						i =
							n.tzData,
						o =
							u(
								e
							),
						l =
							X(
								r,
								o.calendar,
								o.timeZone,
								{
									tzData: i
								}
							),
						c =
							X(
								t,
								o.calendar,
								o.timeZone,
								{
									tzData: i
								}
							),
						s =
							o.pattern,
						f =
							o.rangePatterns,
						m =
							!0,
						g =
							!1,
						d = 0,
						v =
							ie;
					d <
					v.length;
					d++
				) {
					var p =
						v[
							d
						]
					if (
						m &&
						!g
					)
						if (
							'ampm' ===
							p
						) {
							var h =
									l.hour,
								D =
									c.hour,
								y =
									f.ampm
							;((h >
								11 &&
								D <
									11) ||
								(h <
									11 &&
									D >
										11)) &&
								(m =
									!1),
								void 0 !==
									a &&
									void 0 ===
										y &&
									(g =
										!0),
								(a =
									y)
						} else {
							;(h =
								l[
									p
								]),
								(D =
									c[
										p
									]),
								(y =
									f[
										p
									])
							T(
								h,
								D
							) ||
								(m =
									!1),
								void 0 !==
									a &&
									void 0 ===
										y &&
									(g =
										!0),
								(a =
									y)
						}
				}
				if (m) {
					for (
						var b =
								te(
									e,
									ne(
										s
									),
									r,
									n
								),
							F = 0,
							w =
								b;
						F <
						w.length;
						F++
					) {
						w[
							F
						].source =
							'shared'
					}
					return b
				}
				var E =
					[]
				void 0 ===
					a &&
					(a =
						f.default)
				for (
					var S = 0,
						C =
							a.patternParts;
					S <
					C.length;
					S++
				) {
					var O =
							C[
								S
							],
						M =
							O.source,
						N =
							void 0
					N =
						'startRange' ===
							M ||
						'shared' ===
							M
							? r
							: t
					for (
						var x =
								te(
									e,
									ne(
										O.pattern
									),
									N,
									n
								),
							A = 0,
							k =
								x;
						A <
						k.length;
						A++
					) {
						k[
							A
						].source =
							M
					}
					E =
						E.concat(
							x
						)
				}
				return E
			}
			function le(
				e,
				r,
				t,
				n
			) {
				for (
					var a =
							'',
						u = 0,
						i =
							oe(
								e,
								r,
								t,
								n
							);
					u <
					i.length;
					u++
				) {
					a +=
						i[
							u
						]
							.value
				}
				return a
			}
			function ce(
				e,
				r,
				t,
				n
			) {
				for (
					var a =
							oe(
								e,
								r,
								t,
								n
							),
						u =
							new Array(
								0
							),
						i = 0,
						o =
							a;
					i <
					o.length;
					i++
				) {
					var l =
						o[
							i
						]
					u.push(
						{
							type: l.type,
							value: l.value,
							source: l.source
						}
					)
				}
				return u
			}
			function se(
				e,
				r,
				t
			) {
				for (
					var n =
							ae(
								e,
								r,
								t
							),
						a =
							R(
								0
							),
						u = 0,
						i =
							n;
					u <
					i.length;
					u++
				) {
					var o =
						i[
							u
						]
					a.push(
						{
							type: o.type,
							value: o.value
						}
					)
				}
				return a
			}
			function fe(
				e,
				r,
				t
			) {
				;(e =
					void 0 ===
					e
						? null
						: P(
								e
						  )),
					(e =
						Object.create(
							e
						))
				var n =
					!0
				if (
					'date' ===
						r ||
					'any' ===
						r
				)
					for (
						var a = 0,
							u =
								[
									'weekday',
									'year',
									'month',
									'day'
								];
						a <
						u.length;
						a++
					) {
						void 0 !==
							e[
								u[
									a
								]
							] &&
							(n =
								!1)
					}
				if (
					'time' ===
						r ||
					'any' ===
						r
				)
					for (
						var i = 0,
							o =
								[
									'hour',
									'minute',
									'second'
								];
						i <
						o.length;
						i++
					) {
						void 0 !==
							e[
								o[
									i
								]
							] &&
							(n =
								!1)
					}
				if (
					((void 0 ===
						e.dateStyle &&
						void 0 ===
							e.timeStyle) ||
						(n =
							!1),
					'date' ===
						r &&
						e.timeStyle)
				)
					throw new TypeError(
						'Intl.DateTimeFormat date was required but timeStyle was included'
					)
				if (
					'time' ===
						r &&
					e.dateStyle
				)
					throw new TypeError(
						'Intl.DateTimeFormat time was required but dateStyle was included'
					)
				if (
					n &&
					('date' ===
						t ||
						'all' ===
							t)
				)
					for (
						var l = 0,
							c =
								[
									'year',
									'month',
									'day'
								];
						l <
						c.length;
						l++
					) {
						e[
							c[
								l
							]
						] =
							'numeric'
					}
				if (
					n &&
					('time' ===
						t ||
						'all' ===
							t)
				)
					for (
						var s = 0,
							f =
								[
									'hour',
									'minute',
									'second'
								];
						s <
						f.length;
						s++
					) {
						e[
							f[
								s
							]
						] =
							'numeric'
					}
				return e
			}
			function me(
				e,
				r,
				t,
				n,
				a
			) {
				var u =
					e[r]
				if (
					void 0 !==
					u
				) {
					if (
						'boolean' !==
							t &&
						'string' !==
							t
					)
						throw new TypeError(
							'invalid type'
						)
					if (
						('boolean' ===
							t &&
							(u =
								Boolean(
									u
								)),
						'string' ===
							t &&
							(u =
								A(
									u
								)),
						void 0 !==
							n &&
							!n.filter(
								function (
									e
								) {
									return (
										e ==
										u
									)
								}
							)
								.length)
					)
						throw new RangeError(
							u +
								' is not within ' +
								n.join(
									', '
								)
						)
					return u
				}
				return a
			}
			function ge(
				e,
				r
			) {
				for (
					var t =
						r;
					;

				) {
					if (
						~e.indexOf(
							t
						)
					)
						return t
					var n =
						t.lastIndexOf(
							'-'
						)
					if (
						!~n
					)
						return
					n >=
						2 &&
						'-' ===
							t[
								n -
									2
							] &&
						(n -= 2),
						(t =
							t.slice(
								0,
								n
							))
				}
			}
			function de(
				e,
				r
			) {
				g(
					2 ===
						r.length,
					'key must have 2 elements'
				)
				var t =
						e.length,
					n =
						'-' +
						r +
						'-',
					a =
						e.indexOf(
							n
						)
				if (
					-1 !==
					a
				) {
					for (
						var u =
								a +
								4,
							i =
								u,
							o =
								u,
							l =
								!1;
						!l;

					) {
						var c =
							e.indexOf(
								'-',
								o
							)
						2 ===
						(-1 ===
						c
							? t -
							  o
							: c -
							  o)
							? (l =
									!0)
							: -1 ===
							  c
							? ((i =
									t),
							  (l =
									!0))
							: ((i =
									c),
							  (o =
									c +
									1))
					}
					return e.slice(
						u,
						i
					)
				}
				if (
					((n =
						'-' +
						r),
					-1 !==
						(a =
							e.indexOf(
								n
							)) &&
						a +
							3 ===
							t)
				)
					return ''
			}
			function ve(
				e,
				r,
				t,
				n,
				a,
				u
			) {
				var i
				i =
					'lookup' ===
					t.localeMatcher
						? (function (
								e,
								r,
								t
						  ) {
								for (
									var n =
											{
												locale: ''
											},
										a = 0,
										u =
											r;
									a <
									u.length;
									a++
								) {
									var i =
											u[
												a
											],
										o =
											i.replace(
												m,
												''
											),
										l =
											ge(
												e,
												o
											)
									if (
										l
									)
										return (
											(n.locale =
												l),
											i !==
												o &&
												(n.extension =
													i.slice(
														o.length +
															1,
														i.length
													)),
											n
										)
								}
								return (
									(n.locale =
										t()),
									n
								)
						  })(
								e,
								r,
								u
						  )
						: (function (
								e,
								r,
								t
						  ) {
								for (
									var n =
											{
												locale: ''
											},
										a = 0,
										u =
											r;
									a <
									u.length;
									a++
								) {
									var i =
											u[
												a
											],
										o =
											i.replace(
												m,
												''
											),
										l =
											ge(
												e,
												o
											)
									if (
										l
									)
										return (
											(n.locale =
												l),
											i !==
												o &&
												(n.extension =
													i.slice(
														o.length +
															1,
														i.length
													)),
											n
										)
								}
								return (
									(n.locale =
										t()),
									n
								)
						  })(
								e,
								r,
								u
						  )
				for (
					var o =
							i.locale,
						l =
							{
								locale: '',
								dataLocale:
									o
							},
						c =
							'-u',
						s = 0,
						f =
							n;
					s <
					f.length;
					s++
				) {
					var d =
						f[
							s
						]
					g(
						o in
							a,
						'Missing locale data for ' +
							o
					)
					var v =
						a[
							o
						]
					g(
						'object' ===
							(0,
							x.Z)(
								v
							) &&
							null !==
								v,
						'locale data ' +
							d +
							' must be an object'
					)
					var p =
						v[
							d
						]
					g(
						Array.isArray(
							p
						),
						'keyLocaleData for ' +
							d +
							' must be an array'
					)
					var h =
						p[0]
					g(
						'string' ==
							typeof h ||
							null ===
								h,
						'value must be string or null but got ' +
							(0,
							x.Z)(
								h
							) +
							' in key ' +
							d
					)
					var D =
						''
					if (
						i.extension
					) {
						var y =
							de(
								i.extension,
								d
							)
						void 0 !==
							y &&
							('' !==
							y
								? ~p.indexOf(
										y
								  ) &&
								  (D =
										'-' +
										d +
										'-' +
										(h =
											y))
								: ~y.indexOf(
										'true'
								  ) &&
								  ((h =
										'true'),
								  (D =
										'-' +
										d)))
					}
					if (
						d in
						t
					) {
						var b =
							t[
								d
							]
						g(
							'string' ==
								typeof b ||
								null ==
									b,
							'optionsValue must be String, Undefined or Null'
						),
							~p.indexOf(
								b
							) &&
								b !==
									h &&
								((h =
									b),
								(D =
									''))
					}
					;(l[
						d
					] =
						h),
						(c +=
							D)
				}
				if (
					c.length >
					2
				) {
					var F =
						o.indexOf(
							'-x-'
						)
					if (
						-1 ===
						F
					)
						o +=
							c
					else {
						var w =
								o.slice(
									0,
									F
								),
							E =
								o.slice(
									F,
									o.length
								)
						o =
							w +
							c +
							E
					}
					o =
						Intl.getCanonicalLocales(
							o
						)[0]
				}
				return (
					(l.locale =
						o),
					l
				)
			}
			function pe(
				e,
				r
			) {
				var t =
						r.tzData,
					n =
						r.uppercaseLinks,
					a =
						e.toUpperCase()
				return (
					new Set(
						Object.keys(
							t
						).map(
							function (
								e
							) {
								return e.toUpperCase()
							}
						)
					).has(
						a
					) ||
					a in
						n
				)
			}
			function he(
				e,
				r,
				t
			) {
				return (
					null ==
						e &&
						(e =
							r),
					void 0 !==
						t &&
						(t
							? (e =
									'h11' ===
										r ||
									'h23' ===
										r
										? 'h11'
										: 'h12')
							: (g(
									!t,
									'hour12 must not be set'
							  ),
							  (e =
									'h11' ===
										r ||
									'h23' ===
										r
										? 'h23'
										: 'h24'))),
					e
				)
			}
			var De =
				/^[a-z0-9]{3,8}$/i
			function ye(
				e,
				r,
				t,
				n
			) {
				var a =
						n.getInternalSlots,
					u =
						n.availableLocales,
					i =
						n.localeData,
					o =
						n.getDefaultLocale,
					l =
						n.getDefaultTimeZone,
					c =
						n.relevantExtensionKeys,
					s =
						n.tzData,
					f =
						n.uppercaseLinks,
					m =
						C(
							r
						),
					v =
						fe(
							t,
							'any',
							'date'
						),
					p =
						Object.create(
							null
						),
					h =
						me(
							v,
							'localeMatcher',
							'string',
							[
								'lookup',
								'best fit'
							],
							'best fit'
						)
				p.localeMatcher =
					h
				var D =
					me(
						v,
						'calendar',
						'string',
						void 0,
						void 0
					)
				if (
					void 0 !==
						D &&
					!De.test(
						D
					)
				)
					throw new RangeError(
						'Malformed calendar'
					)
				var y =
					a(e)
				p.ca = D
				var b =
					me(
						v,
						'numberingSystem',
						'string',
						void 0,
						void 0
					)
				if (
					void 0 !==
						b &&
					!De.test(
						b
					)
				)
					throw new RangeError(
						'Malformed numbering system'
					)
				p.nu = b
				var F =
						me(
							v,
							'hour12',
							'boolean',
							void 0,
							void 0
						),
					w =
						me(
							v,
							'hourCycle',
							'string',
							[
								'h11',
								'h12',
								'h23',
								'h24'
							],
							void 0
						)
				void 0 !==
					F &&
					(w =
						null),
					(p.hc =
						w)
				var E =
					ve(
						u,
						m,
						p,
						c,
						i,
						o
					)
				;(y.locale =
					E.locale),
					(D =
						E.ca),
					(y.calendar =
						D),
					(y.hourCycle =
						E.hc),
					(y.numberingSystem =
						E.nu)
				var x =
					E.dataLocale
				y.dataLocale =
					x
				var A =
					v.timeZone
				if (
					void 0 !==
					A
				) {
					if (
						!pe(
							(A =
								String(
									A
								)),
							{
								tzData: s,
								uppercaseLinks:
									f
							}
						)
					)
						throw new RangeError(
							'Invalid timeZoneName'
						)
					A =
						O(
							A,
							{
								tzData: s,
								uppercaseLinks:
									f
							}
						)
				} else
					A =
						l()
				;(y.timeZone =
					A),
					((p =
						Object.create(
							null
						)).weekday =
						me(
							v,
							'weekday',
							'string',
							[
								'narrow',
								'short',
								'long'
							],
							void 0
						)),
					(p.era =
						me(
							v,
							'era',
							'string',
							[
								'narrow',
								'short',
								'long'
							],
							void 0
						)),
					(p.year =
						me(
							v,
							'year',
							'string',
							[
								'2-digit',
								'numeric'
							],
							void 0
						)),
					(p.month =
						me(
							v,
							'month',
							'string',
							[
								'2-digit',
								'numeric',
								'narrow',
								'short',
								'long'
							],
							void 0
						)),
					(p.day =
						me(
							v,
							'day',
							'string',
							[
								'2-digit',
								'numeric'
							],
							void 0
						)),
					(p.hour =
						me(
							v,
							'hour',
							'string',
							[
								'2-digit',
								'numeric'
							],
							void 0
						)),
					(p.minute =
						me(
							v,
							'minute',
							'string',
							[
								'2-digit',
								'numeric'
							],
							void 0
						)),
					(p.second =
						me(
							v,
							'second',
							'string',
							[
								'2-digit',
								'numeric'
							],
							void 0
						)),
					(p.timeZoneName =
						me(
							v,
							'timeZoneName',
							'string',
							[
								'short',
								'long'
							],
							void 0
						))
				var k =
					i[x]
				g(
					!!k,
					'Missing locale data for ' +
						x
				)
				var I =
					k
						.formats[
						D
					]
				if (!I)
					throw new RangeError(
						'Calendar "' +
							D +
							'" is not supported. Try setting "calendar" to 1 of the following: ' +
							Object.keys(
								k.formats
							).join(
								', '
							)
					)
				h = me(
					v,
					'formatMatcher',
					'string',
					[
						'basic',
						'best fit'
					],
					'best fit'
				)
				var P =
					me(
						v,
						'dateStyle',
						'string',
						[
							'full',
							'long',
							'medium',
							'short'
						],
						void 0
					)
				y.dateStyle =
					P
				var T,
					R,
					L,
					B =
						me(
							v,
							'timeStyle',
							'string',
							[
								'full',
								'long',
								'medium',
								'short'
							],
							void 0
						)
				if (
					((y.timeStyle =
						B),
					void 0 ===
						P &&
						void 0 ===
							B)
				)
					if (
						'basic' ===
						h
					)
						T =
							M(
								p,
								I
							)
					else {
						if (
							(function (
								e
							) {
								for (
									var r = 0,
										t =
											[
												'hour',
												'minute',
												'second'
											];
									r <
									t.length;
									r++
								)
									if (
										void 0 !==
										e[
											t[
												r
											]
										]
									)
										return !0
								return !1
							})(
								p
							)
						) {
							var j =
								he(
									y.hourCycle,
									k.hourCycle,
									F
								)
							p.hour12 =
								'h11' ===
									j ||
								'h12' ===
									j
						}
						T =
							S(
								p,
								I
							)
					}
				else {
					for (
						var _ = 0,
							z =
								d;
						_ <
						z.length;
						_++
					) {
						if (
							void 0 !==
							(U =
								p[
									(Z =
										z[
											_
										])
								])
						)
							throw new TypeError(
								"Intl.DateTimeFormat can't set option " +
									Z +
									' when ' +
									(P
										? 'dateStyle'
										: 'timeStyle') +
									' is used'
							)
					}
					T =
						N(
							P,
							B,
							k
						)
				}
				for (var Z in ((y.format =
					T),
				p)) {
					var U
					void 0 !==
						(U =
							T[
								Z
							]) &&
						(y[
							Z
						] =
							U)
				}
				if (
					void 0 !==
					y.hour
				) {
					j =
						he(
							y.hourCycle,
							k.hourCycle,
							F
						)
					;(y.hourCycle =
						j),
						'h11' ===
							j ||
						'h12' ===
							j
							? ((R =
									T.pattern12),
							  (L =
									T.rangePatterns12))
							: ((R =
									T.pattern),
							  (L =
									T.rangePatterns))
				} else
					(y.hourCycle =
						void 0),
						(R =
							T.pattern),
						(L =
							T.rangePatterns)
				return (
					(y.pattern =
						R),
					(y.rangePatterns =
						L),
					e
				)
			}
			var be =
				/[^A-Z]/
			function Fe(
				e
			) {
				return (
					3 ===
						(e =
							e.replace(
								/([a-z])/g,
								function (
									e,
									r
								) {
									return r.toUpperCase()
								}
							))
							.length &&
					!be.test(
						e
					)
				)
			}
			var we =
					/^([a-z]{2}|[0-9]{3})$/i,
				Ee =
					/^[a-z]{4}$/i
			function Se(
				e,
				r
			) {
				if (
					'language' ===
					e
				)
					return C(
						[
							r
						]
					)[0]
				if (
					'region' ===
					e
				) {
					if (
						((t =
							r),
						!we.test(
							t
						))
					)
						throw RangeError(
							'invalid region'
						)
					return r.toUpperCase()
				}
				var t, n
				if (
					'script' ===
					e
				) {
					if (
						((n =
							r),
						!Ee.test(
							n
						))
					)
						throw RangeError(
							'invalid script'
						)
					return (
						'' +
						r[0].toUpperCase() +
						r.slice(
							1
						)
					)
				}
				if (
					(g(
						'currency' ===
							e,
						'invalid type'
					),
					!Fe(
						r
					))
				)
					throw RangeError(
						'invalid currency'
					)
				return r.toUpperCase()
			}
			function Ce(
				e,
				r,
				t,
				n
			) {
				if (
					void 0 !==
					e
				) {
					if (
						((e =
							Number(
								e
							)),
						isNaN(
							e
						) ||
							e <
								r ||
							e >
								t)
					)
						throw new RangeError(
							e +
								' is outside of range [' +
								r +
								', ' +
								t +
								']'
						)
					return Math.floor(
						e
					)
				}
				return n
			}
			function Oe(
				e,
				r,
				t,
				n,
				a
			) {
				return Ce(
					e[r],
					t,
					n,
					a
				)
			}
			var Me = [
				'angle-degree',
				'area-acre',
				'area-hectare',
				'concentr-percent',
				'digital-bit',
				'digital-byte',
				'digital-gigabit',
				'digital-gigabyte',
				'digital-kilobit',
				'digital-kilobyte',
				'digital-megabit',
				'digital-megabyte',
				'digital-petabyte',
				'digital-terabit',
				'digital-terabyte',
				'duration-day',
				'duration-hour',
				'duration-millisecond',
				'duration-minute',
				'duration-month',
				'duration-second',
				'duration-week',
				'duration-year',
				'length-centimeter',
				'length-foot',
				'length-inch',
				'length-kilometer',
				'length-meter',
				'length-mile-scandinavian',
				'length-mile',
				'length-millimeter',
				'length-yard',
				'mass-gram',
				'mass-kilogram',
				'mass-ounce',
				'mass-pound',
				'mass-stone',
				'temperature-celsius',
				'temperature-fahrenheit',
				'volume-fluid-ounce',
				'volume-gallon',
				'volume-liter',
				'volume-milliliter'
			]
			function Ne(
				e
			) {
				return e.slice(
					e.indexOf(
						'-'
					) + 1
				)
			}
			var xe =
				Me.map(
					Ne
				)
			function Ae(
				e
			) {
				return (
					xe.indexOf(
						e
					) >
					-1
				)
			}
			function ke(
				e
			) {
				if (
					Ae(
						(e =
							e.replace(
								/([A-Z])/g,
								function (
									e,
									r
								) {
									return r.toLowerCase()
								}
							))
					)
				)
					return !0
				var r =
					e.split(
						'-per-'
					)
				if (
					2 !==
					r.length
				)
					return !1
				var t =
						r[0],
					n =
						r[1]
				return !(
					!Ae(
						t
					) ||
					!Ae(
						n
					)
				)
			}
			function Ie(
				e,
				r,
				t
			) {
				var n =
						(0,
						t.getInternalSlots)(
							e
						),
					a =
						n.notation,
					u =
						n.dataLocaleData,
					i =
						n.numberingSystem
				switch (
					a
				) {
					case 'standard':
						return 0
					case 'scientific':
						return r
					case 'engineering':
						return (
							3 *
							Math.floor(
								r /
									3
							)
						)
					default:
						var o =
								n.compactDisplay,
							l =
								n.style,
							c =
								n.currencyDisplay,
							s =
								void 0
						if (
							'currency' ===
								l &&
							'name' !==
								c
						) {
							s =
								(
									u
										.numbers
										.currency[
										i
									] ||
									u
										.numbers
										.currency[
										u
											.numbers
											.nu[0]
									]
								)
									.short
						} else {
							var f =
								u
									.numbers
									.decimal[
									i
								] ||
								u
									.numbers
									.decimal[
									u
										.numbers
										.nu[0]
								]
							s =
								'long' ===
								o
									? f.long
									: f.short
						}
						if (
							!s
						)
							return 0
						var m =
								String(
									Math.pow(
										10,
										r
									)
								),
							g =
								Object.keys(
									s
								)
						if (
							m <
							g[0]
						)
							return 0
						if (
							m >
							g[
								g.length -
									1
							]
						)
							return (
								g[
									g.length -
										1
								]
									.length -
								1
							)
						var d =
							g.indexOf(
								m
							)
						if (
							-1 ===
							d
						)
							return 0
						var v =
							g[
								d
							]
						return '0' ===
							s[
								v
							]
								.other
							? 0
							: v.length -
									s[
										v
									].other.match(
										/0+/
									)[0]
										.length
				}
			}
			function Pe(
				e,
				r,
				t
			) {
				var n,
					i,
					o,
					l,
					c = t
				if (
					0 ===
					e
				)
					(n =
						u(
							'0',
							c
						)),
						(i = 0),
						(o = 0)
				else {
					var s =
							e.toString(),
						f =
							s.indexOf(
								'e'
							),
						m =
							s.split(
								'e'
							),
						g =
							m[0],
						d =
							m[1],
						v =
							g.replace(
								'.',
								''
							)
					if (
						f >=
							0 &&
						v.length <=
							c
					)
						(i =
							+d),
							(n =
								v +
								u(
									'0',
									c -
										v.length
								)),
							(o =
								e)
					else {
						var p =
								(i =
									a(
										e
									)) -
								c +
								1,
							h =
								Math.round(
									y(
										e,
										p
									)
								)
						y(
							h,
							c -
								1
						) >=
							10 &&
							((i += 1),
							(h =
								Math.floor(
									h /
										10
								))),
							(n =
								h.toString()),
							(o =
								y(
									h,
									c -
										1 -
										i
								))
					}
				}
				if (
					(i >=
					c - 1
						? ((n +=
								u(
									'0',
									i -
										c +
										1
								)),
						  (l =
								i +
								1))
						: i >=
						  0
						? ((n =
								n.slice(
									0,
									i +
										1
								) +
								'.' +
								n.slice(
									i +
										1
								)),
						  (l =
								i +
								1))
						: ((n =
								'0.' +
								u(
									'0',
									-i -
										1
								) +
								n),
						  (l = 1)),
					n.indexOf(
						'.'
					) >=
						0 &&
						t >
							r)
				) {
					for (
						var D =
							t -
							r;
						D >
							0 &&
						'0' ===
							n[
								n.length -
									1
							];

					)
						(n =
							n.slice(
								0,
								-1
							)),
							D--
					'.' ===
						n[
							n.length -
								1
						] &&
						(n =
							n.slice(
								0,
								-1
							))
				}
				return {
					formattedString:
						n,
					roundedNumber:
						o,
					integerDigitsCount:
						l
				}
				function y(
					e,
					r
				) {
					return r <
						0
						? e *
								Math.pow(
									10,
									-r
								)
						: e /
								Math.pow(
									10,
									r
								)
				}
			}
			function Te(
				e,
				r,
				t
			) {
				var n,
					a,
					i =
						t,
					o =
						Math.round(
							e *
								Math.pow(
									10,
									i
								)
						),
					l =
						o /
						Math.pow(
							10,
							i
						)
				if (
					o <
					1e21
				)
					n =
						o.toString()
				else {
					var c =
							(n =
								o.toString()).split(
								'e'
							),
						s =
							c[0],
						f =
							c[1]
					;(n =
						s.replace(
							'.',
							''
						)),
						(n +=
							u(
								'0',
								Math.max(
									+f -
										n.length +
										1,
									0
								)
							))
				}
				if (
					0 !==
					i
				) {
					var m =
						n.length
					if (
						m <=
						i
					)
						(n =
							u(
								'0',
								i +
									1 -
									m
							) +
							n),
							(m =
								i +
								1)
					var g =
							n.slice(
								0,
								m -
									i
							),
						d =
							n.slice(
								m -
									i
							)
					;(n =
						g +
						'.' +
						d),
						(a =
							g.length)
				} else
					a =
						n.length
				for (
					var v =
						t -
						r;
					v >
						0 &&
					'0' ===
						n[
							n.length -
								1
						];

				)
					(n =
						n.slice(
							0,
							-1
						)),
						v--
				return (
					'.' ===
						n[
							n.length -
								1
						] &&
						(n =
							n.slice(
								0,
								-1
							)),
					{
						formattedString:
							n,
						roundedNumber:
							l,
						integerDigitsCount:
							a
					}
				)
			}
			function Re(
				e,
				r
			) {
				var t,
					n =
						r <
							0 ||
						T(
							r,
							-0
						)
				switch (
					(n &&
						(r =
							-r),
					e.roundingType)
				) {
					case 'significantDigits':
						t =
							Pe(
								r,
								e.minimumSignificantDigits,
								e.maximumSignificantDigits
							)
						break
					case 'fractionDigits':
						t =
							Te(
								r,
								e.minimumFractionDigits,
								e.maximumFractionDigits
							)
						break
					default:
						;(t =
							Pe(
								r,
								1,
								2
							))
							.integerDigitsCount >
							1 &&
							(t =
								Te(
									r,
									0,
									0
								))
				}
				r =
					t.roundedNumber
				var a =
						t.formattedString,
					i =
						t.integerDigitsCount,
					o =
						e.minimumIntegerDigits
				i < o &&
					(a =
						u(
							'0',
							o -
								i
						) +
						a)
				return (
					n &&
						(r =
							-r),
					{
						roundedNumber:
							r,
						formattedString:
							a
					}
				)
			}
			function Le(
				e,
				r,
				t
			) {
				var n =
					t.getInternalSlots
				if (
					0 ===
					r
				)
					return [
						0,
						0
					]
				r < 0 &&
					(r =
						-r)
				var u =
						a(
							r
						),
					i =
						Ie(
							e,
							u,
							{
								getInternalSlots:
									n
							}
						)
				r =
					i < 0
						? r *
						  Math.pow(
								10,
								-i
						  )
						: r /
						  Math.pow(
								10,
								i
						  )
				var o =
					Re(
						n(
							e
						),
						r
					)
				return 0 ===
					o.roundedNumber ||
					a(
						o.roundedNumber
					) ===
						u -
							i
					? [
							i,
							u
					  ]
					: [
							Ie(
								e,
								u +
									1,
								{
									getInternalSlots:
										n
								}
							),
							u +
								1
					  ]
			}
			function Be(
				e,
				r
			) {
				var t =
					r.currencyDigitsData
				return L(
					t,
					e
				)
					? t[
							e
					  ]
					: 2
			}
			var je =
					JSON.parse(
						'{"adlm":["𞥐","𞥑","𞥒","𞥓","𞥔","𞥕","𞥖","𞥗","𞥘","𞥙"],"ahom":["𑜰","𑜱","𑜲","𑜳","𑜴","𑜵","𑜶","𑜷","𑜸","𑜹"],"arab":["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],"arabext":["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],"bali":["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],"beng":["০","১","২","৩","৪","৫","৬","৭","৮","৯"],"bhks":["𑱐","𑱑","𑱒","𑱓","𑱔","𑱕","𑱖","𑱗","𑱘","𑱙"],"brah":["𑁦","𑁧","𑁨","𑁩","𑁪","𑁫","𑁬","𑁭","𑁮","𑁯"],"cakm":["𑄶","𑄷","𑄸","𑄹","𑄺","𑄻","𑄼","𑄽","𑄾","𑄿"],"cham":["꩐","꩑","꩒","꩓","꩔","꩕","꩖","꩗","꩘","꩙"],"deva":["०","१","२","३","४","५","६","७","८","९"],"diak":["𑥐","𑥑","𑥒","𑥓","𑥔","𑥕","𑥖","𑥗","𑥘","𑥙"],"fullwide":["０","１","２","３","４","５","６","７","８","９"],"gong":["𑶠","𑶡","𑶢","𑶣","𑶤","𑶥","𑶦","𑶧","𑶨","𑶩"],"gonm":["𑵐","𑵑","𑵒","𑵓","𑵔","𑵕","𑵖","𑵗","𑵘","𑵙"],"gujr":["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],"guru":["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],"hanidec":["〇","一","二","三","四","五","六","七","八","九"],"hmng":["𖭐","𖭑","𖭒","𖭓","𖭔","𖭕","𖭖","𖭗","𖭘","𖭙"],"hmnp":["𞅀","𞅁","𞅂","𞅃","𞅄","𞅅","𞅆","𞅇","𞅈","𞅉"],"java":["꧐","꧑","꧒","꧓","꧔","꧕","꧖","꧗","꧘","꧙"],"kali":["꤀","꤁","꤂","꤃","꤄","꤅","꤆","꤇","꤈","꤉"],"khmr":["០","១","២","៣","៤","៥","៦","៧","៨","៩"],"knda":["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],"lana":["᪀","᪁","᪂","᪃","᪄","᪅","᪆","᪇","᪈","᪉"],"lanatham":["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],"laoo":["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],"lepc":["᪐","᪑","᪒","᪓","᪔","᪕","᪖","᪗","᪘","᪙"],"limb":["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],"mathbold":["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗"],"mathdbl":["𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"],"mathmono":["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"],"mathsanb":["𝟬","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵"],"mathsans":["𝟢","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫"],"mlym":["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],"modi":["𑙐","𑙑","𑙒","𑙓","𑙔","𑙕","𑙖","𑙗","𑙘","𑙙"],"mong":["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],"mroo":["𖩠","𖩡","𖩢","𖩣","𖩤","𖩥","𖩦","𖩧","𖩨","𖩩"],"mtei":["꯰","꯱","꯲","꯳","꯴","꯵","꯶","꯷","꯸","꯹"],"mymr":["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],"mymrshan":["႐","႑","႒","႓","႔","႕","႖","႗","႘","႙"],"mymrtlng":["꧰","꧱","꧲","꧳","꧴","꧵","꧶","꧷","꧸","꧹"],"newa":["𑑐","𑑑","𑑒","𑑓","𑑔","𑑕","𑑖","𑑗","𑑘","𑑙"],"nkoo":["߀","߁","߂","߃","߄","߅","߆","߇","߈","߉"],"olck":["᱐","᱑","᱒","᱓","᱔","᱕","᱖","᱗","᱘","᱙"],"orya":["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],"osma":["𐒠","𐒡","𐒢","𐒣","𐒤","𐒥","𐒦","𐒧","𐒨","𐒩"],"rohg":["𐴰","𐴱","𐴲","𐴳","𐴴","𐴵","𐴶","𐴷","𐴸","𐴹"],"saur":["꣐","꣑","꣒","꣓","꣔","꣕","꣖","꣗","꣘","꣙"],"segment":["🯰","🯱","🯲","🯳","🯴","🯵","🯶","🯷","🯸","🯹"],"shrd":["𑇐","𑇑","𑇒","𑇓","𑇔","𑇕","𑇖","𑇗","𑇘","𑇙"],"sind":["𑋰","𑋱","𑋲","𑋳","𑋴","𑋵","𑋶","𑋷","𑋸","𑋹"],"sinh":["෦","෧","෨","෩","෪","෫","෬","෭","෮","෯"],"sora":["𑃰","𑃱","𑃲","𑃳","𑃴","𑃵","𑃶","𑃷","𑃸","𑃹"],"sund":["᮰","᮱","᮲","᮳","᮴","᮵","᮶","᮷","᮸","᮹"],"takr":["𑛀","𑛁","𑛂","𑛃","𑛄","𑛅","𑛆","𑛇","𑛈","𑛉"],"talu":["᧐","᧑","᧒","᧓","᧔","᧕","᧖","᧗","᧘","᧙"],"tamldec":["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],"telu":["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],"thai":["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],"tibt":["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"],"tirh":["𑓐","𑓑","𑓒","𑓓","𑓔","𑓕","𑓖","𑓗","𑓘","𑓙"],"vaii":["ᘠ","ᘡ","ᘢ","ᘣ","ᘤ","ᘥ","ᘦ","ᘧ","ᘨ","ᘩ"],"wara":["𑣠","𑣡","𑣢","𑣣","𑣤","𑣥","𑣦","𑣧","𑣨","𑣩"],"wcho":["𞋰","𞋱","𞋲","𞋳","𞋴","𞋵","𞋶","𞋷","𞋸","𞋹"]}'
					),
				_e = t.t(
					je,
					2
				),
				ze =
					/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BFF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD6C\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED5\uDEE0-\uDEEC\uDEF0-\uDEFA\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD00-\uDD0B\uDD0D-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95]/,
				Ze =
					new RegExp(
						'^' +
							ze.source
					),
				Ue =
					new RegExp(
						ze.source +
							'$'
					),
				$e =
					/[#0](?:[\.,][#0]+)*/g
			function Ge(
				e,
				r,
				t,
				n
			) {
				var a,
					u,
					i =
						e.sign,
					o =
						e.exponent,
					l =
						e.magnitude,
					c =
						n.notation,
					s =
						n.style,
					f =
						n.numberingSystem,
					m =
						r
							.numbers
							.nu[0],
					g =
						null
				if (
					('compact' ===
						c &&
						l &&
						(g =
							(function (
								e,
								r,
								t,
								n,
								a,
								u,
								i
							) {
								var o,
									l,
									c =
										e.roundedNumber,
									s =
										e.sign,
									f =
										e.magnitude,
									m =
										String(
											Math.pow(
												10,
												f
											)
										),
									g =
										t
											.numbers
											.nu[0]
								if (
									'currency' ===
										n &&
									'name' !==
										u
								) {
									var d =
										null ===
											(o =
												(
													(v =
														t
															.numbers
															.currency)[
														i
													] ||
													v[
														g
													]
												)
													.short) ||
										void 0 ===
											o
											? void 0
											: o[
													m
											  ]
									if (
										!d
									)
										return null
									l =
										He(
											r,
											c,
											d
										)
								} else {
									var v,
										p =
											((v =
												t
													.numbers
													.decimal)[
												i
											] ||
												v[
													g
												])[
												a
											][
												m
											]
									if (
										!p
									)
										return null
									l =
										He(
											r,
											c,
											p
										)
								}
								if (
									'0' ===
									l
								)
									return null
								return (l =
									Ke(
										l,
										s
									)
										.replace(
											/([^\s;\-\+\d¤]+)/g,
											'{c:$1}'
										)
										.replace(
											/0+/,
											'0'
										))
							})(
								e,
								t,
								r,
								s,
								n.compactDisplay,
								n.currencyDisplay,
								f
							)),
					'currency' ===
						s &&
						'name' !==
							n.currencyDisplay)
				) {
					var d =
						r
							.currencies[
							n
								.currency
						]
					if (
						d
					)
						switch (
							n.currencyDisplay
						) {
							case 'code':
								a =
									n.currency
								break
							case 'symbol':
								a =
									d.symbol
								break
							default:
								a =
									d.narrow
						}
					else
						a =
							n.currency
				}
				if (g)
					u = g
				else if (
					'decimal' ===
						s ||
					'unit' ===
						s ||
					('currency' ===
						s &&
						'name' ===
							n.currencyDisplay)
				)
					u =
						Ke(
							(
								r
									.numbers
									.decimal[
									f
								] ||
								r
									.numbers
									.decimal[
									m
								]
							)
								.standard,
							i
						)
				else if (
					'currency' ===
					s
				) {
					u =
						Ke(
							(p =
								r
									.numbers
									.currency[
									f
								] ||
								r
									.numbers
									.currency[
									m
								])[
								n
									.currencySign
							],
							i
						)
				} else {
					u =
						Ke(
							r
								.numbers
								.percent[
								f
							] ||
								r
									.numbers
									.percent[
									m
								],
							i
						)
				}
				var v =
					$e.exec(
						u
					)[0]
				if (
					((u =
						u
							.replace(
								$e,
								'{0}'
							)
							.replace(
								/'(.)'/g,
								'$1'
							)),
					'currency' ===
						s &&
						'name' !==
							n.currencyDisplay)
				) {
					var p,
						h =
							(p =
								r
									.numbers
									.currency[
									f
								] ||
								r
									.numbers
									.currency[
									m
								])
								.currencySpacing
								.afterInsertBetween
					h &&
						!Ue.test(
							a
						) &&
						(u =
							u.replace(
								'¤{0}',
								'¤' +
									h +
									'{0}'
							))
					var D =
						p
							.currencySpacing
							.beforeInsertBetween
					D &&
						!Ze.test(
							a
						) &&
						(u =
							u.replace(
								'{0}¤',
								'{0}' +
									D +
									'¤'
							))
				}
				for (
					var y =
							u.split(
								/({c:[^}]+}|\{0\}|[¤%\-\+])/g
							),
						b =
							[],
						F =
							r
								.numbers
								.symbols[
								f
							] ||
							r
								.numbers
								.symbols[
								m
							],
						w = 0,
						E =
							y;
					w <
					E.length;
					w++
				) {
					if (
						(U =
							E[
								w
							])
					)
						switch (
							U
						) {
							case '{0}':
								b.push.apply(
									b,
									Ye(
										F,
										e,
										c,
										o,
										f,
										!g &&
											n.useGrouping,
										v
									)
								)
								break
							case '-':
								b.push(
									{
										type: 'minusSign',
										value: F.minusSign
									}
								)
								break
							case '+':
								b.push(
									{
										type: 'plusSign',
										value: F.plusSign
									}
								)
								break
							case '%':
								b.push(
									{
										type: 'percentSign',
										value: F.percentSign
									}
								)
								break
							case '¤':
								b.push(
									{
										type: 'currency',
										value: a
									}
								)
								break
							default:
								;/^\{c:/.test(
									U
								)
									? b.push(
											{
												type: 'compact',
												value: U.substring(
													3,
													U.length -
														1
												)
											}
									  )
									: b.push(
											{
												type: 'literal',
												value: U
											}
									  )
						}
				}
				switch (
					s
				) {
					case 'currency':
						if (
							'name' ===
							n.currencyDisplay
						) {
							var S =
									(
										r
											.numbers
											.currency[
											f
										] ||
										r
											.numbers
											.currency[
											m
										]
									)
										.unitPattern,
								C =
									void 0,
								O =
									r
										.currencies[
										n
											.currency
									]
							C =
								O
									? He(
											t,
											e.roundedNumber *
												Math.pow(
													10,
													o
												),
											O.displayName
									  )
									: n.currency
							for (
								var M =
										[],
									N = 0,
									x =
										S.split(
											/(\{[01]\})/g
										);
								N <
								x.length;
								N++
							) {
								switch (
									(U =
										x[
											N
										])
								) {
									case '{0}':
										M.push.apply(
											M,
											b
										)
										break
									case '{1}':
										M.push(
											{
												type: 'currency',
												value: C
											}
										)
										break
									default:
										U &&
											M.push(
												{
													type: 'literal',
													value: U
												}
											)
								}
							}
							return M
						}
						return b
					case 'unit':
						var A =
								n.unit,
							k =
								n.unitDisplay,
							I =
								r
									.units
									.simple[
									A
								]
						S =
							void 0
						if (
							I
						)
							S =
								He(
									t,
									e.roundedNumber *
										Math.pow(
											10,
											o
										),
									r
										.units
										.simple[
										A
									][
										k
									]
								)
						else {
							var P =
									A.split(
										'-per-'
									),
								T =
									P[0],
								R =
									P[1]
							I =
								r
									.units
									.simple[
									T
								]
							var L =
									He(
										t,
										e.roundedNumber *
											Math.pow(
												10,
												o
											),
										r
											.units
											.simple[
											T
										][
											k
										]
									),
								B =
									r
										.units
										.simple[
										R
									]
										.perUnit[
										k
									]
							if (
								B
							)
								S =
									B.replace(
										'{0}',
										L
									)
							else {
								var j =
										r
											.units
											.compound
											.per[
											k
										],
									_ =
										He(
											t,
											1,
											r
												.units
												.simple[
												R
											][
												k
											]
										)
								S =
									S =
										j
											.replace(
												'{0}',
												L
											)
											.replace(
												'{1}',
												_.replace(
													'{0}',
													''
												)
											)
							}
						}
						M =
							[]
						for (
							var z = 0,
								Z =
									S.split(
										/(\s*\{0\}\s*)/
									);
							z <
							Z.length;
							z++
						) {
							var U =
									Z[
										z
									],
								$ =
									/^(\s*)\{0\}(\s*)$/.exec(
										U
									)
							$
								? ($[1] &&
										M.push(
											{
												type: 'literal',
												value: $[1]
											}
										),
								  M.push.apply(
										M,
										b
								  ),
								  $[2] &&
										M.push(
											{
												type: 'literal',
												value: $[2]
											}
										))
								: U &&
								  M.push(
										{
											type: 'unit',
											value: U
										}
								  )
						}
						return M
					default:
						return b
				}
			}
			function Ye(
				e,
				r,
				t,
				n,
				a,
				u,
				i
			) {
				var o =
						[],
					l =
						r.formattedString,
					c =
						r.roundedNumber
				if (
					isNaN(
						c
					)
				)
					return [
						{
							type: 'nan',
							value: l
						}
					]
				if (
					!isFinite(
						c
					)
				)
					return [
						{
							type: 'infinity',
							value: l
						}
					]
				var s =
					_e[a]
				s &&
					(l =
						l.replace(
							/\d/g,
							function (
								e
							) {
								return (
									s[
										+e
									] ||
									e
								)
							}
						))
				var f,
					m,
					g =
						l.indexOf(
							'.'
						)
				if (
					(g >
					0
						? ((f =
								l.slice(
									0,
									g
								)),
						  (m =
								l.slice(
									g +
										1
								)))
						: (f =
								l),
					u &&
						('compact' !==
							t ||
							c >=
								1e4))
				) {
					var d =
							e.group,
						v =
							[],
						p =
							i
								.split(
									'.'
								)[0]
								.split(
									','
								),
						h = 3,
						D = 3
					p.length >
						1 &&
						(h =
							p[
								p.length -
									1
							]
								.length),
						p.length >
							2 &&
							(D =
								p[
									p.length -
										2
								]
									.length)
					var y =
						f.length -
						h
					if (
						y >
						0
					) {
						for (
							v.push(
								f.slice(
									y,
									y +
										h
								)
							),
								y -=
									D;
							y >
							0;
							y -=
								D
						)
							v.push(
								f.slice(
									y,
									y +
										D
								)
							)
						v.push(
							f.slice(
								0,
								y +
									D
							)
						)
					} else
						v.push(
							f
						)
					for (
						;
						v.length >
						0;

					) {
						var b =
							v.pop()
						o.push(
							{
								type: 'integer',
								value: b
							}
						),
							v.length >
								0 &&
								o.push(
									{
										type: 'group',
										value: d
									}
								)
					}
				} else
					o.push(
						{
							type: 'integer',
							value: f
						}
					)
				if (
					(void 0 !==
						m &&
						o.push(
							{
								type: 'decimal',
								value: e.decimal
							},
							{
								type: 'fraction',
								value: m
							}
						),
					('scientific' ===
						t ||
						'engineering' ===
							t) &&
						isFinite(
							c
						))
				) {
					o.push(
						{
							type: 'exponentSeparator',
							value: e.exponential
						}
					),
						n <
							0 &&
							(o.push(
								{
									type: 'exponentMinusSign',
									value: e.minusSign
								}
							),
							(n =
								-n))
					var F =
						Te(
							n,
							0,
							0
						)
					o.push(
						{
							type: 'exponentInteger',
							value: F.formattedString
						}
					)
				}
				return o
			}
			function Ke(
				e,
				r
			) {
				e.indexOf(
					';'
				) < 0 &&
					(e =
						e +
						';-' +
						e)
				var t =
						e.split(
							';'
						),
					n =
						t[0],
					a =
						t[1]
				switch (
					r
				) {
					case 0:
						return n
					case -1:
						return a
					default:
						return a.indexOf(
							'-'
						) >=
							0
							? a.replace(
									/-/g,
									'+'
							  )
							: '+' +
									n
				}
			}
			function He(
				e,
				r,
				t
			) {
				return (
					t[
						e.select(
							r
						)
					] ||
					t.other
				)
			}
			function We(
				e,
				r,
				t
			) {
				var n,
					a,
					u,
					i =
						t.getInternalSlots,
					o =
						i(
							e
						),
					l =
						o.pl,
					c =
						o.dataLocaleData,
					s =
						o.numberingSystem,
					f =
						c
							.numbers
							.symbols[
							s
						] ||
						c
							.numbers
							.symbols[
							c
								.numbers
								.nu[0]
						],
					m = 0,
					g = 0
				if (
					isNaN(
						r
					)
				)
					a =
						f.nan
				else if (
					isFinite(
						r
					)
				) {
					'percent' ===
						o.style &&
						(r *= 100),
						(g =
							(n =
								Le(
									e,
									r,
									{
										getInternalSlots:
											i
									}
								))[0]),
						(m =
							n[1])
					var d =
						Re(
							o,
							(r =
								g <
								0
									? r *
									  Math.pow(
											10,
											-g
									  )
									: r /
									  Math.pow(
											10,
											g
									  ))
						)
					;(a =
						d.formattedString),
						(r =
							d.roundedNumber)
				} else
					a =
						f.infinity
				switch (
					o.signDisplay
				) {
					case 'never':
						u = 0
						break
					case 'auto':
						u =
							T(
								r,
								0
							) ||
							r >
								0 ||
							isNaN(
								r
							)
								? 0
								: -1
						break
					case 'always':
						u =
							T(
								r,
								0
							) ||
							r >
								0 ||
							isNaN(
								r
							)
								? 1
								: -1
						break
					default:
						u =
							0 ===
								r ||
							isNaN(
								r
							)
								? 0
								: r >
								  0
								? 1
								: -1
				}
				return Ge(
					{
						roundedNumber:
							r,
						formattedString:
							a,
						exponent:
							g,
						magnitude:
							m,
						sign: u
					},
					o.dataLocaleData,
					l,
					o
				)
			}
			function qe(
				e,
				r,
				t
			) {
				for (
					var n =
							We(
								e,
								r,
								t
							),
						a =
							R(
								0
							),
						u = 0,
						i =
							n;
					u <
					i.length;
					u++
				) {
					var o =
						i[
							u
						]
					a.push(
						{
							type: o.type,
							value: o.value
						}
					)
				}
				return a
			}
			function Ve(
				e,
				r,
				t
			) {
				void 0 ===
					r &&
					(r =
						Object.create(
							null
						))
				var n =
						(0,
						t.getInternalSlots)(
							e
						),
					a =
						me(
							r,
							'style',
							'string',
							[
								'decimal',
								'percent',
								'currency',
								'unit'
							],
							'decimal'
						)
				n.style =
					a
				var u =
					me(
						r,
						'currency',
						'string',
						void 0,
						void 0
					)
				if (
					void 0 !==
						u &&
					!Fe(
						u
					)
				)
					throw RangeError(
						'Malformed currency code'
					)
				if (
					'currency' ===
						a &&
					void 0 ===
						u
				)
					throw TypeError(
						'currency cannot be undefined'
					)
				var i =
						me(
							r,
							'currencyDisplay',
							'string',
							[
								'code',
								'symbol',
								'narrowSymbol',
								'name'
							],
							'symbol'
						),
					o =
						me(
							r,
							'currencySign',
							'string',
							[
								'standard',
								'accounting'
							],
							'standard'
						),
					l =
						me(
							r,
							'unit',
							'string',
							void 0,
							void 0
						)
				if (
					void 0 !==
						l &&
					!ke(
						l
					)
				)
					throw RangeError(
						'Invalid unit argument for Intl.NumberFormat()'
					)
				if (
					'unit' ===
						a &&
					void 0 ===
						l
				)
					throw TypeError(
						'unit cannot be undefined'
					)
				var c =
					me(
						r,
						'unitDisplay',
						'string',
						[
							'short',
							'narrow',
							'long'
						],
						'short'
					)
				'currency' ===
					a &&
					((n.currency =
						u.toUpperCase()),
					(n.currencyDisplay =
						i),
					(n.currencySign =
						o)),
					'unit' ===
						a &&
						((n.unit =
							l),
						(n.unitDisplay =
							c))
			}
			function Je(
				e,
				r,
				t,
				n,
				a
			) {
				var u =
						Oe(
							r,
							'minimumIntegerDigits',
							1,
							21,
							1
						),
					i =
						r.minimumFractionDigits,
					o =
						r.maximumFractionDigits,
					l =
						r.minimumSignificantDigits,
					c =
						r.maximumSignificantDigits
				if (
					((e.minimumIntegerDigits =
						u),
					void 0 !==
						l ||
						void 0 !==
							c)
				)
					(e.roundingType =
						'significantDigits'),
						(l =
							Ce(
								l,
								1,
								21,
								1
							)),
						(c =
							Ce(
								c,
								l,
								21,
								21
							)),
						(e.minimumSignificantDigits =
							l),
						(e.maximumSignificantDigits =
							c)
				else if (
					void 0 !==
						i ||
					void 0 !==
						o
				) {
					;(e.roundingType =
						'fractionDigits'),
						(i =
							Ce(
								i,
								0,
								20,
								t
							)),
						(o =
							Ce(
								o,
								i,
								20,
								Math.max(
									i,
									n
								)
							)),
						(e.minimumFractionDigits =
							i),
						(e.maximumFractionDigits =
							o)
				} else
					'compact' ===
					a
						? (e.roundingType =
								'compactRounding')
						: ((e.roundingType =
								'fractionDigits'),
						  (e.minimumFractionDigits =
								t),
						  (e.maximumFractionDigits =
								n))
			}
			function Qe(
				e,
				r,
				t,
				n
			) {
				var a =
						n.getInternalSlots,
					u =
						n.localeData,
					i =
						n.availableLocales,
					o =
						n.numberingSystemNames,
					l =
						n.getDefaultLocale,
					c =
						n.currencyDigitsData,
					s =
						C(
							r
						),
					f =
						void 0 ===
						t
							? Object.create(
									null
							  )
							: P(
									t
							  ),
					m =
						Object.create(
							null
						),
					d =
						me(
							f,
							'localeMatcher',
							'string',
							[
								'lookup',
								'best fit'
							],
							'best fit'
						)
				m.localeMatcher =
					d
				var v =
					me(
						f,
						'numberingSystem',
						'string',
						void 0,
						void 0
					)
				if (
					void 0 !==
						v &&
					o.indexOf(
						v
					) < 0
				)
					throw RangeError(
						'Invalid numberingSystems: ' +
							v
					)
				m.nu = v
				var p,
					h,
					D =
						ve(
							i,
							s,
							m,
							[
								'nu'
							],
							u,
							l
						),
					y =
						u[
							((p =
								D.locale),
							(h =
								p.indexOf(
									'-u-'
								)),
							h >=
							0
								? p.slice(
										0,
										h
								  )
								: p)
						]
				g(
					!!y,
					'Missing locale data for ' +
						D.locale
				)
				var b =
					a(e)
				;(b.locale =
					D.locale),
					(b.dataLocale =
						D.dataLocale),
					(b.numberingSystem =
						D.nu),
					(b.dataLocaleData =
						y),
					Ve(
						e,
						f,
						{
							getInternalSlots:
								a
						}
					)
				var F,
					w,
					E =
						b.style
				if (
					'currency' ===
					E
				) {
					var S =
						Be(
							b.currency,
							{
								currencyDigitsData:
									c
							}
						)
					;(F =
						S),
						(w =
							S)
				} else
					(F = 0),
						(w =
							'percent' ===
							E
								? 0
								: 3)
				var O =
					me(
						f,
						'notation',
						'string',
						[
							'standard',
							'scientific',
							'engineering',
							'compact'
						],
						'standard'
					)
				;(b.notation =
					O),
					Je(
						b,
						f,
						F,
						w,
						O
					)
				var M =
					me(
						f,
						'compactDisplay',
						'string',
						[
							'short',
							'long'
						],
						'short'
					)
				'compact' ===
					O &&
					(b.compactDisplay =
						M)
				var N =
					me(
						f,
						'useGrouping',
						'boolean',
						void 0,
						!0
					)
				b.useGrouping =
					N
				var x =
					me(
						f,
						'signDisplay',
						'string',
						[
							'auto',
							'never',
							'always',
							'exceptZero'
						],
						'auto'
					)
				return (
					(b.signDisplay =
						x),
					e
				)
			}
			function Xe(
				e
			) {
				g(
					'string' ==
						typeof e,
					'GetOperands should have been called with a string'
				)
				var r =
					k(e)
				g(
					isFinite(
						r
					),
					'n should be finite'
				)
				var t,
					n,
					a,
					u =
						e.indexOf(
							'.'
						),
					i =
						''
				;-1 === u
					? ((t =
							r),
					  (n = 0),
					  (a = 0))
					: ((t =
							e.slice(
								0,
								u
							)),
					  (n =
							k(
								(i =
									e.slice(
										u,
										e.length
									))
							)),
					  (a =
							i.length))
				var o,
					l,
					c =
						Math.abs(
							k(
								t
							)
						)
				if (
					0 !==
					n
				) {
					var s =
						i.replace(
							/0+$/,
							''
						)
					;(o =
						s.length),
						(l =
							k(
								s
							))
				} else
					(o = 0),
						(l = 0)
				return {
					Number: r,
					IntegerDigits:
						c,
					NumberOfFractionDigits:
						a,
					NumberOfFractionDigitsWithoutTrailing:
						o,
					FractionDigits:
						n,
					FractionDigitsWithoutTrailing:
						l
				}
			}
			function er(
				e,
				r,
				t,
				n
			) {
				var a =
						n.availableLocales,
					u =
						n.relevantExtensionKeys,
					i =
						n.localeData,
					o =
						n.getDefaultLocale,
					l =
						n.getInternalSlots,
					c =
						C(
							r
						),
					s =
						Object.create(
							null
						),
					f =
						void 0 ===
						t
							? Object.create(
									null
							  )
							: P(
									t
							  ),
					m =
						l(
							e
						)
				m.initializedPluralRules =
					!0
				var g =
					me(
						f,
						'localeMatcher',
						'string',
						[
							'best fit',
							'lookup'
						],
						'best fit'
					)
				;(s.localeMatcher =
					g),
					(m.type =
						me(
							f,
							'type',
							'string',
							[
								'cardinal',
								'ordinal'
							],
							'cardinal'
						)),
					Je(
						m,
						f,
						0,
						3,
						'standard'
					)
				var d =
					ve(
						a,
						c,
						s,
						u,
						i,
						o
					)
				return (
					(m.locale =
						d.locale),
					e
				)
			}
			function rr(
				e,
				r,
				t
			) {
				var n =
						t.getInternalSlots,
					a =
						t.PluralRuleSelect,
					u =
						n(
							e
						)
				return (
					g(
						'Object' ===
							B(
								u
							),
						'pl has to be an object'
					),
					g(
						'initializedPluralRules' in
							u,
						'pluralrules must be initialized'
					),
					g(
						'Number' ===
							B(
								r
							),
						'n must be a number'
					),
					isFinite(
						r
					)
						? a(
								u.locale,
								u.type,
								r,
								Xe(
									Re(
										u,
										r
									)
										.formattedString
								)
						  )
						: 'other'
				)
			}
			function tr(
				e
			) {
				if (
					(g(
						'String' ===
							B(
								e
							),
						'unit must be a string'
					),
					'seconds' ===
						e)
				)
					return 'second'
				if (
					'minutes' ===
					e
				)
					return 'minute'
				if (
					'hours' ===
					e
				)
					return 'hour'
				if (
					'days' ===
					e
				)
					return 'day'
				if (
					'weeks' ===
					e
				)
					return 'week'
				if (
					'months' ===
					e
				)
					return 'month'
				if (
					'quarters' ===
					e
				)
					return 'quarter'
				if (
					'years' ===
					e
				)
					return 'year'
				if (
					'second' !==
						e &&
					'minute' !==
						e &&
					'hour' !==
						e &&
					'day' !==
						e &&
					'week' !==
						e &&
					'month' !==
						e &&
					'quarter' !==
						e &&
					'year' !==
						e
				)
					throw new RangeError(
						'invalid unit'
					)
				return e
			}
			function nr(
				e,
				r,
				t
			) {
				for (
					var n =
							[],
						a = 0,
						u =
							ne(
								e
							);
					a <
					u.length;
					a++
				) {
					var i =
						u[
							a
						]
					if (
						'literal' ===
						i.type
					)
						n.push(
							{
								type: 'literal',
								value: i.value
							}
						)
					else {
						g(
							'0' ===
								i.type,
							'Malformed pattern ' +
								e
						)
						for (
							var o = 0,
								l =
									t;
							o <
							l.length;
							o++
						) {
							var c =
								l[
									o
								]
							n.push(
								{
									type: c.type,
									value: c.value,
									unit: r
								}
							)
						}
					}
				}
				return n
			}
			function ar(
				e,
				r,
				t,
				n
			) {
				var a =
					n.getInternalSlots
				if (
					(g(
						'Number' ===
							B(
								r
							),
						'value must be number, instead got ' +
							(0,
							x.Z)(
								r
							),
						TypeError
					),
					g(
						'String' ===
							B(
								t
							),
						'unit must be number, instead got ' +
							(0,
							x.Z)(
								r
							),
						TypeError
					),
					isNaN(
						r
					) ||
						!isFinite(
							r
						))
				)
					throw new RangeError(
						'Invalid value ' +
							r
					)
				var u =
						tr(
							t
						),
					i =
						a(
							e
						),
					o =
						i.fields,
					l =
						i.style,
					c =
						i.numeric,
					s =
						i.pluralRules,
					f =
						i.numberFormat,
					m = u
				'short' ===
				l
					? (m =
							u +
							'-short')
					: 'narrow' ===
							l &&
					  (m =
							u +
							'-narrow'),
					m in
						o ||
						(m =
							u)
				var d =
					o[m]
				if (
					'auto' ===
						c &&
					A(
						r
					) in
						d
				)
					return [
						{
							type: 'literal',
							value: d[
								A(
									r
								)
							]
						}
					]
				var v =
					'future'
				;(T(
					r,
					-0
				) ||
					r <
						0) &&
					(v =
						'past')
				var p =
						d[
							v
						],
					h =
						'function' ==
						typeof f.formatToParts
							? f.formatToParts(
									Math.abs(
										r
									)
							  )
							: [
									{
										type: 'literal',
										value: f.format(
											Math.abs(
												r
											)
										),
										unit: t
									}
							  ]
				return nr(
					p[
						s.select(
							r
						)
					],
					u,
					h
				)
			}
			function ur(
				e,
				r,
				t,
				n
			) {
				for (
					var a =
							'',
						u = 0,
						i =
							ar(
								e,
								r,
								t,
								n
							);
					u <
					i.length;
					u++
				) {
					a +=
						i[
							u
						]
							.value
				}
				return a
			}
			function ir(
				e,
				r,
				t,
				n
			) {
				for (
					var a =
							ar(
								e,
								r,
								t,
								n
							),
						u =
							R(
								0
							),
						i = 0,
						o =
							a;
					i <
					o.length;
					i++
				) {
					var l =
							o[
								i
							],
						c =
							{
								type: l.type,
								value: l.value
							}
					'unit' in
						l &&
						(c.unit =
							l.unit),
						u.push(
							c
						)
				}
				return u
			}
			var or =
				/^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
			function lr(
				e,
				r,
				t,
				n
			) {
				var a =
						n.getInternalSlots,
					u =
						n.availableLocales,
					i =
						n.relevantExtensionKeys,
					o =
						n.localeData,
					l =
						n.getDefaultLocale,
					c =
						a(
							e
						)
				c.initializedRelativeTimeFormat =
					!0
				var s =
						C(
							r
						),
					f =
						Object.create(
							null
						),
					m =
						void 0 ===
						t
							? Object.create(
									null
							  )
							: P(
									t
							  ),
					d =
						me(
							m,
							'localeMatcher',
							'string',
							[
								'best fit',
								'lookup'
							],
							'best fit'
						)
				f.localeMatcher =
					d
				var v =
					me(
						m,
						'numberingSystem',
						'string',
						void 0,
						void 0
					)
				if (
					void 0 !==
						v &&
					!or.test(
						v
					)
				)
					throw new RangeError(
						'Invalid numbering system ' +
							v
					)
				f.nu = v
				var p =
						ve(
							u,
							s,
							f,
							i,
							o,
							l
						),
					h =
						p.locale,
					D =
						p.nu
				;(c.locale =
					h),
					(c.style =
						me(
							m,
							'style',
							'string',
							[
								'long',
								'narrow',
								'short'
							],
							'long'
						)),
					(c.numeric =
						me(
							m,
							'numeric',
							'string',
							[
								'always',
								'auto'
							],
							'always'
						))
				var y =
					o[h]
				return (
					g(
						!!y,
						'Missing locale data for ' +
							h
					),
					(c.fields =
						y),
					(c.numberFormat =
						new Intl.NumberFormat(
							r
						)),
					(c.pluralRules =
						new Intl.PluralRules(
							r
						)),
					(c.numberingSystem =
						D),
					e
				)
			}
			function cr(
				e,
				r
			) {
				for (
					var t =
							[],
						n = 0,
						a =
							r;
					n <
					a.length;
					n++
				) {
					var u =
						ge(
							e,
							a[
								n
							].replace(
								m,
								''
							)
						)
					u &&
						t.push(
							u
						)
				}
				return t
			}
			function sr(
				e,
				r,
				t
			) {
				return (
					void 0 !==
						t &&
						me(
							(t =
								P(
									t
								)),
							'localeMatcher',
							'string',
							[
								'lookup',
								'best fit'
							],
							'best fit'
						),
					cr(
						e,
						r
					)
				)
			}
			function fr(
				e
			) {
				for (
					var r =
							[
								e
							],
						t =
							e.split(
								'-'
							),
						n =
							t.length;
					n >
					1;
					n--
				)
					r.push(
						t
							.slice(
								0,
								n -
									1
							)
							.join(
								'-'
							)
					)
				return r
			}
			var mr,
				gr =
					(function (
						e
					) {
						function r() {
							var r =
								(null !==
									e &&
									e.apply(
										this,
										arguments
									)) ||
								this
							return (
								(r.type =
									'MISSING_LOCALE_DATA'),
								r
							)
						}
						return (
							(0,
							n.__extends)(
								r,
								e
							),
							r
						)
					})(
						Error
					)
			function dr(
				e
			) {
				return (
					'MISSING_LOCALE_DATA' ===
					e.type
				)
			}
			function vr(
				e,
				r,
				t
			) {
				void 0 ===
					t &&
					(t =
						function (
							e,
							r
						) {
							return (0,
							n.__assign)(
								(0,
								n.__assign)(
									{},
									e
								),
								r
							)
						})
				var a =
						fr(
							e
						),
					u = a
						.map(
							function (
								e
							) {
								return r
									.data[
									e
								]
							}
						)
						.filter(
							Boolean
						)
				if (
					!u.length
				)
					throw new gr(
						'Missing locale data for "' +
							e +
							'", lookup hierarchy: ' +
							a.join(
								', '
							)
					)
				return (
					u.reverse(),
					u.reduce(
						t,
						{}
					)
				)
			}
			!(function (
				e
			) {
				;(e.startRange =
					'startRange'),
					(e.shared =
						'shared'),
					(e.endRange =
						'endRange')
			})(
				mr ||
					(mr =
						{})
			)
		},
		85148: function (
			e,
			r,
			t
		) {
			Object.defineProperty(
				r,
				'__esModule',
				{
					value: !0
				}
			)
			var n =
				t(26362)
			t(
				41455
			).shouldPolyfill() &&
				Object.defineProperty(
					Intl,
					'PluralRules',
					{
						value: n.PluralRules,
						writable:
							!0,
						enumerable:
							!1,
						configurable:
							!0
					}
				)
		}
	}
])
