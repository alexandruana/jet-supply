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
	[3610],
	{
		72098: function (
			t,
			e,
			r
		) {
			'use strict'
			r.d(e, {
				Z: function () {
					return v
				}
			})
			var n =
					r(
						92137
					),
				o =
					r(
						6610
					),
				i =
					r(
						5991
					),
				a =
					r(
						96156
					),
				s =
					r(
						87757
					),
				u =
					r.n(
						s
					),
				c =
					r(
						42876
					),
				f =
					r.n(
						c
					),
				l =
					r(
						35369
					),
				p =
					r(
						70545
					),
				d =
					r(
						63880
					),
				h =
					function () {},
				v =
					(function () {
						function t() {
							var e =
								this
							;(0,
							o.Z)(
								this,
								t
							),
								(0,
								a.Z)(
									this,
									'_worker',
									new (f())()
								),
								(0,
								a.Z)(
									this,
									'_requests',
									(0,
									l.D5)()
								),
								(0,
								a.Z)(
									this,
									'_nextRequestId',
									1
								),
								(0,
								a.Z)(
									this,
									'_isLoading',
									!0
								),
								(0,
								a.Z)(
									this,
									'_loadPromise',
									null
								),
								(0,
								a.Z)(
									this,
									'_initPromise',
									null
								),
								(0,
								a.Z)(
									this,
									'_hasOpenedDocument',
									!1
								),
								(0,
								a.Z)(
									this,
									'_hasLoadedCertificates',
									!1
								),
								(0,
								a.Z)(
									this,
									'_handleMessage',
									function (
										t
									) {
										var r =
												t.data,
											n =
												e._requests.get(
													r.id
												)
										;(0,
										p.kG)(
											n,
											'No request was made for id '.concat(
												r.id,
												'.'
											)
										)
										var o =
												n.resolve,
											i =
												n.reject
										if (
											((e._requests =
												e._requests.delete(
													r.id
												)),
											r.error)
										) {
											var a =
												new p.p2(
													r.error
												)
											;(a.callArgs =
												r.callArgs),
												i(
													a
												)
										} else
											o(
												r.result
											)
									}
								),
								(this._worker.onmessage =
									this._handleMessage)
						}
						var e,
							r,
							s,
							c
						return (
							(0,
							i.Z)(
								t,
								[
									{
										key: 'loadNativeModule',
										value: function (
											t,
											e
										) {
											var r =
													this,
												n =
													e.mainThreadOrigin,
												o =
													e.disableWebAssembly,
												i =
													e.disableWebAssemblyStreaming,
												a =
													e.enableAutomaticLinkExtraction,
												s =
													e.overrideMemoryLimit
											return (
												(0,
												p.kG)(
													!this
														._hasOpenedDocument,
													'cannot invoke `loadNativeModule` while an instance is still in use. Please call `recycle` first.'
												),
												this
													._loadPromise
													? this._loadPromise.then(
															function () {}
													  )
													: (this
															._initPromise ||
															(this._initPromise =
																this._sendRequest(
																	'loadNativeModule',
																	[
																		t,
																		{
																			mainThreadOrigin:
																				n,
																			disableWebAssembly:
																				o,
																			disableWebAssemblyStreaming:
																				i,
																			enableAutomaticLinkExtraction:
																				a,
																			overrideMemoryLimit:
																				s
																		}
																	]
																)
																	.then(
																		function (
																			t
																		) {
																			return t
																		}
																	)
																	.catch(
																		function (
																			t
																		) {
																			throw (
																				((r._isLoading =
																					!1),
																				r._worker.terminate(),
																				t)
																			)
																		}
																	)),
													  this
															._initPromise)
											)
										}
									},
									{
										key: 'load',
										value: function (
											t,
											e,
											r
										) {
											var n =
													this,
												o =
													r.mainThreadOrigin,
												i =
													r.customFonts
											return (
												(0,
												p.kG)(
													!this
														._hasOpenedDocument,
													'cannot invoke `load` while an instance is still in use. Please call `recycle` first.'
												),
												this
													._loadPromise ||
													(this._loadPromise =
														this._sendRequest(
															'load',
															[
																t,
																e,
																{
																	mainThreadOrigin:
																		o,
																	customFonts:
																		i
																}
															]
														)
															.then(
																function (
																	t
																) {
																	return (
																		(n._isLoading =
																			!1),
																		t
																	)
																}
															)
															.catch(
																function (
																	t
																) {
																	throw (
																		((n._isLoading =
																			!1),
																		n._worker.terminate(),
																		t)
																	)
																}
															)),
												this
													._loadPromise
											)
										}
									},
									{
										key: 'version',
										value: function () {
											return (
												this._assertLoaded(),
												this._sendRequest(
													'version'
												)
											)
										}
									},
									{
										key: 'openDocument',
										value: function (
											t,
											e,
											r
										) {
											var n =
												this
											return (
												this._assertLoaded(),
												(this._hasOpenedDocument =
													!0),
												this._sendRequest(
													'openDocument',
													[
														t,
														e,
														r
													]
												).catch(
													function (
														t
													) {
														throw (
															((n._hasOpenedDocument =
																!1),
															t)
														)
													}
												)
											)
										}
									},
									{
										key: 'openDocumentAt',
										value:
											((c =
												(0,
												n.Z)(
													u().mark(
														function t() {
															return u().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				throw new Error(
																					'Should never be called'
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t
															)
														}
													)
												)),
											function () {
												return c.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getAllPageInfos',
										value:
											((s =
												(0,
												n.Z)(
													u().mark(
														function t(
															e
														) {
															return u().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._assertLoaded(),
																					t.abrupt(
																						'return',
																						this._sendRequest(
																							'getAllPageInfos',
																							[
																								e
																							]
																						)
																					)
																				)
																			case 2:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return s.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'enablePDFJavaScriptSupport',
										value:
											((r =
												(0,
												n.Z)(
													u().mark(
														function t() {
															return u().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._assertLoaded(),
																					t.abrupt(
																						'return',
																						this._sendRequest(
																							'enablePDFJavaScriptSupport'
																						)
																					)
																				)
																			case 2:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return r.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'runPDFFormattingScripts',
										value:
											((e =
												(0,
												n.Z)(
													u().mark(
														function t(
															e,
															r
														) {
															return u().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._assertLoaded(),
																					t.abrupt(
																						'return',
																						this._sendRequest(
																							'runPDFFormattingScripts',
																							[
																								e,
																								r
																							]
																						)
																					)
																				)
																			case 2:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												r
											) {
												return e.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getBookmarks',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getBookmarks'
												)
											)
										}
									},
									{
										key: 'getFormJSON',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getFormJSON'
												)
											)
										}
									},
									{
										key: 'evalFormValuesActions',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'evalFormValuesActions',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'evalScript',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'evalScript',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'setFormJSONUpdateBatchMode',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'setFormJSONUpdateBatchMode',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'getFormValues',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getFormValues'
												)
											)
										}
									},
									{
										key: 'closeDocument',
										value: function () {
											return (
												this._assertLoaded(),
												(this._hasOpenedDocument =
													!1),
												this._sendRequest(
													'closeDocument'
												)
											)
										}
									},
									{
										key: 'renderTile',
										value: function (
											t,
											e,
											r,
											n,
											o,
											i,
											a
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'renderTile',
													[
														t,
														e,
														r,
														n,
														o,
														i,
														a
													]
												)
											)
										}
									},
									{
										key: 'renderAnnotation',
										value: function (
											t,
											e,
											r,
											n,
											o
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'renderAnnotation',
													[
														t,
														e,
														r,
														n,
														o
													]
												)
											)
										}
									},
									{
										key: 'renderPageAnnotations',
										value: function (
											t,
											e,
											r,
											n,
											o
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'renderPageAnnotations',
													[
														t,
														e,
														r,
														n,
														o
													]
												)
											)
										}
									},
									{
										key: 'renderDetachedAnnotation',
										value: function (
											t,
											e,
											r,
											n,
											o
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'renderDetachedAnnotation',
													[
														t,
														e,
														r,
														n,
														o
													]
												)
											)
										}
									},
									{
										key: 'onKeystrokeEvent',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'onKeystrokeEvent',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'getAttachment',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getAttachment',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'textForPageIndex',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'textForPageIndex',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'annotationsForPageIndex',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'annotationsForPageIndex',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'createAnnotation',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'createAnnotation',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'updateAnnotation',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'updateAnnotation',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'deleteAnnotation',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'deleteAnnotation',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'createFormField',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'createFormField',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'updateFormField',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'updateFormField',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'deleteFormField',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'deleteFormField',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'setFormFieldValue',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'setFormFieldValue',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'deleteFormFieldValue',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'deleteFormFieldValue',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'createBookmark',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'createBookmark',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'updateBookmark',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'updateBookmark',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'deleteBookmark',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'deleteBookmark',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'getTextFromRects',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getTextFromRects',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'search',
										value: function (
											t,
											e,
											r,
											n
										) {
											var o =
												arguments.length >
													4 &&
												void 0 !==
													arguments[4]
													? arguments[4]
													: d
															.S
															.TEXT
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'search',
													[
														t,
														e,
														r,
														n,
														o
													]
												)
											)
										}
									},
									{
										key: 'parseXFDF',
										value: function (
											t
										) {
											return this._sendRequest(
												'parseXFDF',
												[
													t
												]
											)
										}
									},
									{
										key: 'getEmbeddedFilesList',
										value: function () {
											return this._sendRequest(
												'getEmbeddedFilesList'
											)
										}
									},
									{
										key: 'exportFile',
										value: function () {
											var t =
													arguments.length >
														0 &&
													void 0 !==
														arguments[0] &&
													arguments[0],
												e =
													arguments.length >
														1 &&
													void 0 !==
														arguments[1] &&
													arguments[1],
												r =
													arguments.length >
													2
														? arguments[2]
														: void 0,
												n =
													arguments.length >
														3 &&
													void 0 !==
														arguments[3]
														? arguments[3]
														: 'pdf',
												o =
													arguments.length >
														4 &&
													void 0 !==
														arguments[4] &&
													arguments[4]
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'exportFile',
													[
														t,
														e,
														r,
														n,
														o
													]
												)
											)
										}
									},
									{
										key: 'importXFDF',
										value: function (
											t
										) {
											var e =
												arguments.length >
													1 &&
												void 0 !==
													arguments[1] &&
												arguments[1]
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'importXFDF',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'exportXFDF',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'exportXFDF',
													[]
												)
											)
										}
									},
									{
										key: 'importInstantJSON',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'importInstantJSON',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'exportInstantJSON',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'exportInstantJSON',
													[]
												)
											)
										}
									},
									{
										key: 'getDocumentOutline',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getDocumentOutline'
												)
											)
										}
									},
									{
										key: 'applyOperations',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'applyOperations',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'reloadDocument',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'reloadDocument'
												)
											)
										}
									},
									{
										key: 'exportPDFWithOperations',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'exportPDFWithOperations',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'loadCertificates',
										value: function (
											t
										) {
											var e =
												this
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												(this._hasLoadedCertificates =
													Boolean(
														t.length
													)),
												this._sendRequest(
													'loadCertificates',
													[
														t
													]
												).catch(
													function (
														t
													) {
														throw (
															((e._hasLoadedCertificates =
																!1),
															t)
														)
													}
												)
											)
										}
									},
									{
										key: 'getSignaturesInfo',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'getSignaturesInfo',
													[]
												)
											)
										}
									},
									{
										key: 'prepareSignInvisible',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'prepareSignInvisible',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'sign',
										value: function (
											t,
											e,
											r
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'sign',
													[
														t,
														e,
														r
													]
												)
											)
										}
									},
									{
										key: 'restoreToOriginalState',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'restoreToOriginalState'
												)
											)
										}
									},
									{
										key: 'applyRedactions',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'applyRedactions',
													[]
												)
											)
										}
									},
									{
										key: 'readFormJSONObjects',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'readFormJSONObjects'
												)
											)
										}
									},
									{
										key: 'clearAPStreamCache',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'clearAPStreamCache'
												)
											)
										}
									},
									{
										key: 'setComparisonDocument',
										value: function (
											t,
											e
										) {
											return (
												this._assertLoaded(),
												e ||
													this._assertDocumentOpen(),
												this._sendRequest(
													'setComparisonDocument',
													[
														t,
														e
													]
												)
											)
										}
									},
									{
										key: 'openComparisonDocument',
										value: function (
											t
										) {
											var e =
												this
											return (
												this._assertLoaded(),
												(this._hasOpenedDocument =
													!0),
												this._sendRequest(
													'openComparisonDocument',
													[
														t
													]
												).catch(
													function (
														t
													) {
														throw (
															((e._hasOpenedDocument =
																!1),
															t)
														)
													}
												)
											)
										}
									},
									{
										key: 'documentCompareAndOpen',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'documentCompareAndOpen',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'persistOpenDocument',
										value: function (
											t
										) {
											return (
												this._assertLoaded(),
												t ||
													this._assertDocumentOpen(),
												this._sendRequest(
													'persistOpenDocument',
													[
														t
													]
												)
											)
										}
									},
									{
										key: 'cleanupDocumentComparison',
										value: function () {
											return (
												this._assertLoaded(),
												this._assertDocumentOpen(),
												this._sendRequest(
													'cleanupDocumentComparison'
												)
											)
										}
									},
									{
										key: 'recycle',
										value: function () {
											this
												._hasLoadedCertificates &&
												this.loadCertificates(
													[]
												),
												this
													._hasOpenedDocument &&
													this.closeDocument(),
												this
													._isLoading ||
													(this._requests =
														this._requests.map(
															function () {
																return {
																	resolve:
																		h,
																	reject: h
																}
															}
														))
										}
									},
									{
										key: 'destroy',
										value: function () {
											;(this._loadPromise =
												null),
												this._worker.terminate()
										}
									},
									{
										key: '_assertLoaded',
										value: function () {
											if (
												this
													._isLoading
											)
												throw new p.p2(
													'CoreClient not yet initialized'
												)
										}
									},
									{
										key: '_assertDocumentOpen',
										value: function () {
											if (
												!this
													._hasOpenedDocument
											)
												throw new p.p2(
													'This method can not be called since there is no open document. Have you run PSPDFKit.unload()?'
												)
										}
									},
									{
										key: '_sendRequest',
										value: function (
											t
										) {
											var e =
													this,
												r =
													arguments.length >
														1 &&
													void 0 !==
														arguments[1]
														? arguments[1]
														: []
											return new Promise(
												function (
													n,
													o
												) {
													var i =
															e._assignId(),
														a =
															r.filter(
																function (
																	t
																) {
																	return (
																		t instanceof
																		ArrayBuffer
																	)
																}
															)
													e._worker.postMessage(
														{
															id: i,
															action: t,
															args: r
														},
														a
													),
														(e._requests =
															e._requests.set(
																i,
																{
																	resolve:
																		n,
																	reject: o
																}
															))
												}
											)
										}
									},
									{
										key: '_assignId',
										value: function () {
											var t =
												this
													._nextRequestId
											return (
												(this._nextRequestId =
													this
														._nextRequestId +
													1),
												t
											)
										}
									}
								]
							),
							t
						)
					})()
		},
		46777: function (
			t,
			e,
			r
		) {
			'use strict'
			r.r(e),
				r.d(e, {
					corePool:
						function () {
							return ft
						},
					customFontsPromiseRef:
						function () {
							return At
						},
					default:
						function () {
							return _t
						},
					loadModule:
						function () {
							return St
						},
					normalizeCoreOptions:
						function () {
							return pt
						},
					validateStandaloneConfiguration:
						function () {
							return dt
						}
				})
			var n =
					r(
						90484
					),
				o =
					r(
						92137
					),
				i =
					r(
						96156
					),
				a =
					r(
						6610
					),
				s =
					r(
						5991
					),
				u =
					r(
						66213
					),
				c =
					r(
						10379
					),
				f =
					r(
						46070
					),
				l =
					r(
						77608
					),
				p =
					r(
						87757
					),
				d =
					r.n(
						p
					),
				h =
					r(
						14968
					),
				v =
					r(
						35369
					),
				m =
					r(
						70545
					),
				g =
					r(
						81253
					),
				y =
					r(
						28481
					),
				b =
					r(
						63349
					),
				w =
					r(
						24956
					),
				k =
					r(
						19491
					),
				x =
					r(
						50893
					),
				_ =
					r(
						29412
					),
				A =
					r(
						89595
					),
				S =
					r(
						80614
					),
				O =
					r(
						89777
					),
				F =
					r(
						41371
					),
				E =
					r(
						81928
					),
				I =
					r(
						57106
					),
				P =
					r(
						10163
					),
				D =
					r(
						51983
					),
				j =
					r(
						33502
					)
			function R(
				t,
				e
			) {
				var r =
					Object.keys(
						t
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var n =
						Object.getOwnPropertySymbols(
							t
						)
					e &&
						(n =
							n.filter(
								function (
									e
								) {
									return Object.getOwnPropertyDescriptor(
										t,
										e
									)
										.enumerable
								}
							)),
						r.push.apply(
							r,
							n
						)
				}
				return r
			}
			function T(
				t
			) {
				for (
					var e = 1;
					e <
					arguments.length;
					e++
				) {
					var r =
						null !=
						arguments[
							e
						]
							? arguments[
									e
							  ]
							: {}
					e % 2
						? R(
								Object(
									r
								),
								!0
						  ).forEach(
								function (
									e
								) {
									;(0,
									i.Z)(
										t,
										e,
										r[
											e
										]
									)
								}
						  )
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								t,
								Object.getOwnPropertyDescriptors(
									r
								)
						  )
						: R(
								Object(
									r
								)
						  ).forEach(
								function (
									e
								) {
									Object.defineProperty(
										t,
										e,
										Object.getOwnPropertyDescriptor(
											r,
											e
										)
									)
								}
						  )
				}
				return t
			}
			function L(
				t
			) {
				var e =
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
						} catch (t) {
							return !1
						}
					})()
				return function () {
					var r,
						n =
							(0,
							l.Z)(
								t
							)
					if (
						e
					) {
						var o =
							(0,
							l.Z)(
								this
							).constructor
						r =
							Reflect.construct(
								n,
								arguments,
								o
							)
					} else
						r =
							n.apply(
								this,
								arguments
							)
					return (0,
					f.Z)(
						this,
						r
					)
				}
			}
			var C =
					(function (
						t
					) {
						;(0,
						c.Z)(
							r,
							t
						)
						var e =
							L(
								r
							)
						function r() {
							return (
								(0,
								a.Z)(
									this,
									r
								),
								e.apply(
									this,
									arguments
								)
							)
						}
						return (0,
						s.Z)(
							r
						)
					})(
						(0,
						v.WV)(
							{
								alreadyLoadedPages:
									(0,
									v.D5)(),
								isLoaded:
									!1,
								isDestroyed:
									!1
							}
						)
					),
				N = {
					skippedPdfObjectIds:
						[],
					skippedPdfBookmarkIds:
						[],
					annotations:
						[],
					bookmarks:
						[],
					formFieldValues:
						[],
					formFields:
						[],
					attachments:
						{}
				},
				M =
					(function () {
						function t(
							e,
							r
						) {
							var n =
								this
							;(0,
							a.Z)(
								this,
								t
							),
								(0,
								i.Z)(
									this,
									'_state',
									new C()
								),
								(0,
								i.Z)(
									this,
									'_formFieldsLoadedPromise',
									null
								),
								(0,
								i.Z)(
									this,
									'_objectCreationPromises',
									(0,
									v.D5)()
								),
								(0,
								i.Z)(
									this,
									'_loadBookmarksPromise',
									null
								),
								(0,
								i.Z)(
									this,
									'canCreateBackendOrphanWidgets',
									!1
								),
								(this._core =
									e),
								(this._json =
									r
										? B(
												r
										  )
										: null),
								(this._setReadStateCallbacksPromise =
									new Promise(
										function (
											t
										) {
											n._setReadStateCallbacksPromiseResolve =
												t
										}
									))
						}
						var e,
							r,
							n,
							u,
							c,
							f
						return (
							(0,
							s.Z)(
								t,
								[
									{
										key: 'load',
										value:
											((f =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r,
																n,
																o,
																i,
																a
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				if (
																					((this._state =
																						this._state.set(
																							'isLoaded',
																							!0
																						)),
																					(t.t0 =
																						!this
																							._formFieldCallbacks),
																					!t.t0)
																				) {
																					t.next = 5
																					break
																				}
																				return (
																					(t.next = 5),
																					this._loadFormFieldValues()
																				)
																			case 5:
																				if (
																					this
																						._json
																				) {
																					t.next = 7
																					break
																				}
																				return t.abrupt(
																					'return',
																					this
																				)
																			case 7:
																				return (
																					(t.next = 9),
																					this._core.importInstantJSON(
																						T(
																							T(
																								{},
																								N
																							),
																							this
																								._json
																						)
																					)
																				)
																			case 9:
																				if (
																					((0,
																					m.kG)(
																						this
																							._json
																					),
																					(e =
																						this
																							._json),
																					(r =
																						e.annotations),
																					(n =
																						e.attachments),
																					!this._isDestroyed() &&
																						n &&
																						0 !==
																							Object.entries(
																								n
																							)
																								.length)
																				) {
																					t.next = 13
																					break
																				}
																				return t.abrupt(
																					'return',
																					this
																				)
																			case 13:
																				if (
																					r
																				)
																					for (
																						o = 0;
																						o <
																						r.length;
																						o++
																					)
																						if (
																							((i =
																								null),
																							r[
																								o
																							]
																								.imageAttachmentId &&
																								(a =
																									n
																										? n[
																												r[
																													o
																												]
																													.imageAttachmentId
																										  ]
																										: null))
																						)
																							try {
																								;(i =
																									(0,
																									I.Jc)(
																										atob(
																											a.binary
																										),
																										a.contentType
																									)),
																									(0,
																									m.kG)(
																										this
																											._annotationCallbacks
																									),
																									this._annotationCallbacks.createAttachment(
																										r[
																											o
																										]
																											.imageAttachmentId,
																										i
																									)
																							} catch (t) {
																								;(0,
																								m.um)(
																									'Skipped attachment with id '.concat(
																										r[
																											o
																										]
																											.imageAttachmentId,
																										' from payload because an error occurred while converting the binary image to blob.'
																									)
																								),
																									(0,
																									m.um)(
																										t
																									)
																							}
																				return t.abrupt(
																					'return',
																					this
																				)
																			case 15:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return f.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'destroy',
										value: function () {
											;(this._state =
												this._state.set(
													'isDestroyed',
													!0
												)),
												(this._annotationCallbacks =
													null),
												(this._readStateCallbacks =
													null),
												(this._bookmarkCallbacks =
													null),
												(this._formFieldCallbacks =
													null),
												(this._formFieldValueCallbacks =
													null)
										}
									},
									{
										key: 'setReadStateCallbacks',
										value: function (
											t
										) {
											var e
											;(this._readStateCallbacks =
												t),
												null ===
													(e =
														this
															._setReadStateCallbacksPromiseResolve) ||
													void 0 ===
														e ||
													e.call(
														this
													)
										}
									},
									{
										key: 'setAnnotationCallbacks',
										value: function (
											t
										) {
											this._annotationCallbacks =
												t
										}
									},
									{
										key: 'setBookmarkCallbacks',
										value: function (
											t
										) {
											this._bookmarkCallbacks =
												t
										}
									},
									{
										key: 'setFormFieldCallbacks',
										value: function (
											t
										) {
											this._formFieldCallbacks =
												t
										}
									},
									{
										key: 'setFormFieldValueCallbacks',
										value: function (
											t
										) {
											this._formFieldValueCallbacks =
												t
										}
									},
									{
										key: 'setCommentCallbacks',
										value: function () {}
									},
									{
										key: 'createComment',
										value: function () {
											return Promise.reject(
												'Comments are not supported in Standalone.'
											)
										}
									},
									{
										key: 'deleteComment',
										value: function () {
											return Promise.reject(
												'Comments are not supported in Standalone.'
											)
										}
									},
									{
										key: 'updateComment',
										value: function () {
											return Promise.reject(
												'Comments are not supported in Standalone.'
											)
										}
									},
									{
										key: 'createAnnotation',
										value: function (
											t,
											e
										) {
											var r =
												this
											this._verifyLoaded()
											var n =
												e.find(
													function (
														e,
														r
													) {
														return (
															r ===
															t.imageAttachmentId
														)
													}
												)
											return this._core
												.createAnnotation(
													(0,
													F.Hs)(
														t
													),
													n
														? n.data
														: null
												)
												.then(
													function (
														e
													) {
														'number' !=
															typeof e ||
															'number' !=
																typeof t.pdfObjectId ||
															t.pdfObjectId ===
																e ||
															r._isDestroyed() ||
															((0,
															m.kG)(
																r._annotationCallbacks
															),
															r._annotationCallbacks.updateAnnotations(
																(0,
																v.aV)(
																	[
																		t.set(
																			'pdfObjectId',
																			e
																		)
																	]
																)
															))
													}
												)
										}
									},
									{
										key: 'updateAnnotation',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.updateAnnotation(
													(0,
													F.Hs)(
														t
													)
												)
											)
										}
									},
									{
										key: 'deleteAnnotation',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.deleteAnnotation(
													(0,
													F.Hs)(
														t
													)
												)
											)
										}
									},
									{
										key: 'createBookmark',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.createBookmark(
													(0,
													E.a)(
														t
													)
												)
											)
										}
									},
									{
										key: 'updateBookmark',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.updateBookmark(
													(0,
													E.a)(
														t
													)
												)
											)
										}
									},
									{
										key: 'deleteBookmark',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.deleteBookmark(
													t
												)
											)
										}
									},
									{
										key: 'createFormField',
										value: function (
											t
										) {
											this._verifyLoaded(),
												(0,
												m.kG)(
													this
														._readStateCallbacks
												)
											var e =
												this._readStateCallbacks.getFormFieldWidgets(
													t
												)
											return this._core.createFormField(
												(0,
												F.vD)(
													t
												),
												e
													.map(
														F.Hs
													)
													.toArray()
											)
										}
									},
									{
										key: 'updateFormField',
										value: function (
											t
										) {
											this._verifyLoaded(),
												(0,
												m.kG)(
													this
														._readStateCallbacks
												)
											var e =
												this._readStateCallbacks.getFormFieldWidgets(
													t
												)
											return this._core.updateFormField(
												(0,
												F.vD)(
													t
												),
												e
													.map(
														F.Hs
													)
													.toArray()
											)
										}
									},
									{
										key: 'deleteFormField',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.deleteFormField(
													(0,
													F.vD)(
														t
													)
												)
											)
										}
									},
									{
										key: 'loadFormFields',
										value: function () {
											return (
												this
													._formFieldsLoadedPromise ||
													(this._formFieldsLoadedPromise =
														this._loadFormFields()),
												this
													._formFieldsLoadedPromise
											)
										}
									},
									{
										key: '_loadFormFields',
										value:
											((c =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r,
																n,
																o =
																	this
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._verifyLoaded(),
																					(t.next = 3),
																					this._core.readFormJSONObjects()
																				)
																			case 3:
																				return (
																					(e =
																						t.sent),
																					(r =
																						(0,
																						v.aV)()),
																					(n =
																						(0,
																						v.aV)().withMutations(
																							function (
																								t
																							) {
																								e.forEach(
																									function (
																										e
																									) {
																										var n =
																												e.formField,
																											i =
																												e.widgets,
																											a =
																												e.value
																										try {
																											var s
																											s =
																												n.pdfObjectId
																													? n.pdfObjectId.toString()
																													: (0,
																													  x.xc)()
																											var u =
																												(0,
																												F.IN)(
																													s,
																													n
																												)
																											;(0,
																											m.kG)(
																												o._readStateCallbacks
																											),
																												o._readStateCallbacks.isFormFieldInState(
																													u.name
																												) ||
																													t.push(
																														u.set(
																															'value',
																															a
																														)
																													),
																												i.forEach(
																													function (
																														t
																													) {
																														var e
																														if (
																															((e =
																																t.pdfObjectId
																																	? t.id ||
																																	  t.pdfObjectId.toString()
																																	: (0,
																																	  x.xc)()),
																															(0,
																															m.kG)(
																																o._readStateCallbacks
																															),
																															!o._readStateCallbacks.isAnnotationInState(
																																e
																															))
																														) {
																															var n =
																																(0,
																																F.vH)(
																																	e,
																																	t
																																)
																															r =
																																r.push(
																																	n
																																)
																														}
																													}
																												)
																										} catch (t) {
																											;(0,
																											m.um)(
																												'Skipped creating form field #'.concat(
																													n.pdfObjectId,
																													' from payload because an error occurred while deserializing.'
																												)
																											),
																												(0,
																												m.um)(
																													t
																												)
																										}
																									}
																								)
																							}
																						)),
																					(r =
																						r.map(
																							function (
																								t
																							) {
																								if (
																									r.find(
																										function (
																											e
																										) {
																											return (
																												e.pdfObjectId !==
																													t.pdfObjectId &&
																												e.id ===
																													t.id &&
																												t.pdfObjectId.toString() !==
																													t.id
																											)
																										}
																									)
																								) {
																									var e =
																										(0,
																										x.xc)()
																									return (
																										t instanceof
																											j.x_ &&
																											(n =
																												n.map(
																													function (
																														r
																													) {
																														return r.name ===
																															t.formFieldName
																															? r.update(
																																	'annotationIds',
																																	function (
																																		r
																																	) {
																																		return r.map(
																																			function (
																																				r
																																			) {
																																				return r ===
																																					t.id
																																					? e
																																					: r
																																			}
																																		)
																																	}
																															  )
																															: r
																													}
																												)),
																										t.set(
																											'id',
																											e
																										)
																									)
																								}
																								return t
																							}
																						)),
																					n.size >
																						0 &&
																						!this._isDestroyed() &&
																						((0,
																						m.kG)(
																							this
																								._formFieldCallbacks
																						),
																						this._formFieldCallbacks.createFormFields(
																							n,
																							D.y
																						)),
																					(t.next = 10),
																					this._loadFormFieldValues()
																				)
																			case 10:
																				r.size >
																					0 &&
																					!this._isDestroyed() &&
																					((0,
																					m.kG)(
																						this
																							._annotationCallbacks
																					),
																					this._annotationCallbacks.createAnnotations(
																						r,
																						(0,
																						v.D5)(),
																						D.y
																					)),
																					(this._formFieldsLoadedPromise =
																						Promise.resolve())
																			case 12:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return c.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'createFormFieldValue',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this.setFormFieldValue(
													t
												)
											)
										}
									},
									{
										key: 'setFormFieldValue',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.setFormFieldValue(
													(0,
													F.kr)(
														t
													)
												)
											)
										}
									},
									{
										key: 'deleteFormFieldValue',
										value: function (
											t
										) {
											return (
												this._verifyLoaded(),
												this._core.deleteFormFieldValue(
													t.replace(
														'form-field-value/',
														''
													)
												)
											)
										}
									},
									{
										key: 'loadAnnotationsForPageIndex',
										value: function (
											t
										) {
											this._verifyLoaded()
											var e =
												this._state.alreadyLoadedPages.get(
													t
												)
											if (
												e
											)
												return e
											var r =
												this._loadAnnotationsForPageIndex(
													t
												)
											return (
												(this._state =
													this._state.setIn(
														[
															'alreadyLoadedPages',
															t
														],
														r
													)),
												r
											)
										}
									},
									{
										key: '_loadAnnotationsForPageIndex',
										value:
											((u =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															var r,
																n,
																o =
																	this
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.next = 2),
																					this._core.annotationsForPageIndex(
																						e
																					)
																				)
																			case 2:
																				if (
																					((r =
																						t.sent),
																					(t.t0 =
																						this._formFieldCallbacks),
																					!t.t0)
																				) {
																					t.next = 7
																					break
																				}
																				return (
																					(t.next = 7),
																					this.loadFormFields()
																				)
																			case 7:
																				;(n =
																					(0,
																					v.aV)().withMutations(
																						function (
																							t
																						) {
																							r.filter(
																								function (
																									t
																								) {
																									return (
																										!t.id ||
																										(o._readStateCallbacks &&
																											!o._readStateCallbacks.isAnnotationInState(
																												t.id
																											))
																									)
																								}
																							).forEach(
																								function (
																									e
																								) {
																									e.pdfObjectId
																									try {
																										var r =
																												e.id ||
																												(U(
																													e
																												)
																													? (0,
																													  x.xc)()
																													: e.pdfObjectId.toString()),
																											n =
																												(0,
																												F.vH)(
																													r,
																													e
																												)
																										t.push(
																											n
																										)
																									} catch (t) {
																										;(0,
																										m.um)(
																											'Skipped creating annotation #'.concat(
																												e.pdfObjectId,
																												' from payload because an error occurred while deserializing.'
																											)
																										),
																											(0,
																											m.um)(
																												t
																											)
																									}
																								}
																							)
																						}
																					))
																					.size >
																					0 &&
																					!this._isDestroyed() &&
																					((0,
																					m.kG)(
																						this
																							._annotationCallbacks
																					),
																					this._annotationCallbacks.createAnnotations(
																						n,
																						(0,
																						v.D5)(),
																						D.y
																					)),
																					(this._state =
																						this._state.setIn(
																							[
																								'alreadyLoadedPages',
																								e
																							],
																							Promise.resolve()
																						))
																			case 10:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return u.apply(
													this,
													arguments
												)
											})
									},
									{
										key: '_loadFormFieldValues',
										value:
											((n =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._verifyLoaded(),
																					(t.next = 3),
																					this._core.getFormValues()
																				)
																			case 3:
																				;(e =
																					t.sent),
																					(r =
																						(0,
																						v.aV)().withMutations(
																							function (
																								t
																							) {
																								e.forEach(
																									function (
																										e
																									) {
																										try {
																											t.push(
																												(0,
																												F.u9)(
																													e
																												)
																											)
																										} catch (t) {
																											;(0,
																											m.um)(
																												'Skipped creating form field value #'.concat(
																													e.pdfObjectId,
																													' from payload because an error occurred while deserializing.'
																												)
																											),
																												(0,
																												m.um)(
																													t
																												)
																										}
																									}
																								)
																							}
																						))
																						.size >
																						0 &&
																						!this._isDestroyed() &&
																						((0,
																						m.kG)(
																							this
																								._formFieldValueCallbacks
																						),
																						this._formFieldValueCallbacks.setFormFieldValues(
																							r
																						))
																			case 6:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return n.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'loadBookmarks',
										value:
											((r =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					this._verifyLoaded(),
																					(t.next = 3),
																					this._core.getBookmarks()
																				)
																			case 3:
																				;(e =
																					t.sent),
																					(r =
																						(0,
																						v.aV)().withMutations(
																							function (
																								t
																							) {
																								e.forEach(
																									function (
																										e
																									) {
																										var r
																										r =
																											e.id
																												? e.id
																												: e.pdfBookmarkId
																												? e.pdfBookmarkId
																												: (0,
																												  P.A)()
																										try {
																											t.push(
																												(0,
																												E.i)(
																													r,
																													e
																												)
																											)
																										} catch (t) {
																											;(0,
																											m.um)(
																												'Skipped creating bookmark #'.concat(
																													r,
																													' from payload because an error occurred while deserializing.'
																												)
																											),
																												(0,
																												m.um)(
																													t
																												)
																										}
																									}
																								)
																							}
																						))
																						.size >
																						0 &&
																						!this._isDestroyed() &&
																						((0,
																						m.kG)(
																							this
																								._bookmarkCallbacks
																						),
																						this._bookmarkCallbacks.createBookmarks(
																							r,
																							D.y
																						))
																			case 6:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return r.apply(
													this,
													arguments
												)
											})
									},
									{
										key: '_verifyLoaded',
										value: function () {
											;(0,
											m.kG)(
												this
													._state
													.isLoaded,
												'StandaloneProvider not properly initialized.'
											)
										}
									},
									{
										key: '_isDestroyed',
										value: function () {
											return this
												._state
												.isDestroyed
										}
									},
									{
										key: 'syncChanges',
										value:
											((e =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																			case 'end':
																				return t.stop()
																		}
																},
																t
															)
														}
													)
												)),
											function () {
												return e.apply(
													this,
													arguments
												)
											})
									}
								]
							),
							t
						)
					})()
			function B(
				t
			) {
				var e =
					{}
				return (
					Object.keys(
						t
					).forEach(
						function (
							r
						) {
							Array.isArray(
								t[
									r
								]
							)
								? (e[
										r
								  ] =
										t[
											r
										].filter(
											Boolean
										))
								: 'object' ===
										(0,
										n.Z)(
											t[
												r
											]
										) &&
								  null !==
										t[
											r
										]
								? (e[
										r
								  ] =
										B(
											t[
												r
											]
										))
								: (e[
										r
								  ] =
										t[
											r
										])
						}
					),
					e
				)
			}
			function U(
				t
			) {
				return (
					'pspdfkit/link' ===
						t.type &&
					0 ===
						t.pdfObjectId
				)
			}
			var q =
					(function () {
						function t(
							e,
							r
						) {
							;(0,
							a.Z)(
								this,
								t
							),
								(this.identifier =
									e),
								(this.callback =
									r)
						}
						return (
							(0,
							s.Z)(
								t,
								[
									{
										key: 'request',
										value: function () {
											return this.callback()
										}
									}
								]
							),
							t
						)
					})(),
				Z =
					r(
						34997
					),
				J =
					(function () {
						function t(
							e
						) {
							;(0,
							a.Z)(
								this,
								t
							),
								(0,
								i.Z)(
									this,
									'size',
									1
								),
								(0,
								i.Z)(
									this,
									'_freeObjects',
									[]
								),
								(this._constructor =
									e)
						}
						return (
							(0,
							s.Z)(
								t,
								[
									{
										key: 'checkOut',
										value: function () {
											var t,
												e =
													this
											return {
												object: (t =
													this
														._freeObjects
														.length >
													0
														? this._freeObjects.shift()
														: new this._constructor()),
												checkIn:
													function () {
														e
															._freeObjects
															.length >=
														e.size
															? t.destroy()
															: (t.recycle(),
															  e._freeObjects.push(
																	t
															  ))
													}
											}
										}
									}
								]
							),
							t
						)
					})(),
				V =
					r(
						1367
					),
				G =
					r(
						97921
					),
				W =
					r(
						49029
					)
			function z(
				t
			) {
				var e =
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
						} catch (t) {
							return !1
						}
					})()
				return function () {
					var r,
						n =
							(0,
							l.Z)(
								t
							)
					if (
						e
					) {
						var o =
							(0,
							l.Z)(
								this
							).constructor
						r =
							Reflect.construct(
								n,
								arguments,
								o
							)
					} else
						r =
							n.apply(
								this,
								arguments
							)
					return (0,
					f.Z)(
						this,
						r
					)
				}
			}
			var X =
					(function (
						t
					) {
						;(0,
						c.Z)(
							r,
							t
						)
						var e =
							z(
								r
							)
						function r() {
							return (
								(0,
								a.Z)(
									this,
									r
								),
								e.apply(
									this,
									arguments
								)
							)
						}
						return (0,
						s.Z)(
							r
						)
					})(
						v.WV(
							{
								baseUrl:
									null,
								licenseKey:
									null,
								document:
									null,
								backendPermissions:
									new G.Z(),
								documentResponse:
									null,
								disableWebAssembly:
									!1,
								disableWebAssemblyStreaming:
									!1,
								enableAutomaticLinkExtraction:
									!1,
								overrideMemoryLimit:
									null,
								features:
									(0,
									v.aV)(),
								signatureFeatureAvailability:
									W
										.H
										.NONE,
								documentHandle:
									null,
								trustedCAsCallback:
									null,
								signaturesInfoPromise:
									null,
								customFonts:
									null,
								forceLegacySignaturesFeature:
									!1,
								forceAnnotationsRender:
									!1,
								electronAppName:
									null,
								lazyLoadedPages:
									null
							}
						)
					),
				K =
					r(
						96233
					),
				H =
					r(
						5164
					),
				$ =
					r(
						52701
					),
				Y =
					r(
						94290
					),
				Q =
					r(
						55
					),
				tt =
					r(
						11278
					),
				et =
					r(
						85596
					),
				rt =
					r(
						63880
					),
				nt =
					r(
						50809
					),
				ot =
					r(
						68582
					),
				it =
					r(
						42457
					),
				at = [
					'id'
				]
			function st(
				t,
				e
			) {
				var r =
					Object.keys(
						t
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var n =
						Object.getOwnPropertySymbols(
							t
						)
					e &&
						(n =
							n.filter(
								function (
									e
								) {
									return Object.getOwnPropertyDescriptor(
										t,
										e
									)
										.enumerable
								}
							)),
						r.push.apply(
							r,
							n
						)
				}
				return r
			}
			function ut(
				t
			) {
				for (
					var e = 1;
					e <
					arguments.length;
					e++
				) {
					var r =
						null !=
						arguments[
							e
						]
							? arguments[
									e
							  ]
							: {}
					e % 2
						? st(
								Object(
									r
								),
								!0
						  ).forEach(
								function (
									e
								) {
									;(0,
									i.Z)(
										t,
										e,
										r[
											e
										]
									)
								}
						  )
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								t,
								Object.getOwnPropertyDescriptors(
									r
								)
						  )
						: st(
								Object(
									r
								)
						  ).forEach(
								function (
									e
								) {
									Object.defineProperty(
										t,
										e,
										Object.getOwnPropertyDescriptor(
											r,
											e
										)
									)
								}
						  )
				}
				return t
			}
			function ct(
				t
			) {
				var e =
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
						} catch (t) {
							return !1
						}
					})()
				return function () {
					var r,
						n =
							(0,
							l.Z)(
								t
							)
					if (
						e
					) {
						var o =
							(0,
							l.Z)(
								this
							).constructor
						r =
							Reflect.construct(
								n,
								arguments,
								o
							)
					} else
						r =
							n.apply(
								this,
								arguments
							)
					return (0,
					f.Z)(
						this,
						r
					)
				}
			}
			var ft =
					new J(
						r(
							72098
						).Z
					),
				lt =
					(function (
						t
					) {
						;(0,
						c.Z)(
							gt,
							t
						)
						var e,
							r,
							u,
							f,
							l,
							p,
							h,
							_,
							E,
							I,
							P,
							D,
							R,
							T,
							L,
							C,
							N,
							B,
							U,
							J,
							G,
							W,
							z,
							Y,
							tt,
							ot,
							st,
							lt,
							vt,
							mt =
								ct(
									gt
								)
						function gt(
							t
						) {
							var e
							;(0,
							a.Z)(
								this,
								gt
							),
								(e =
									mt.call(
										this
									)),
								(0,
								i.Z)(
									(0,
									b.Z)(
										e
									),
									'type',
									'STANDALONE'
								),
								(0,
								i.Z)(
									(0,
									b.Z)(
										e
									),
									'_XFDF',
									null
								),
								dt(
									t
								)
							var r =
									t.baseUrl,
								n =
									t.instantJSON,
								o =
									t.XFDF,
								s =
									t.enableAutomaticLinkExtraction,
								u =
									t.overrideMemoryLimit,
								c =
									t.trustedCAsCallback,
								f =
									t.electronAppName
							'string' ==
								typeof o &&
								(e._XFDF =
									{
										source: o,
										keepCurrentAnnotations:
											!0 ===
											t.XFDFKeepCurrentAnnotations
									}),
								n &&
									n.annotations &&
									(n.annotations =
										n.annotations.map(
											function (
												t
											) {
												return (
													(t.id =
														t.id.toString()),
													t
												)
											}
										)),
								(e._instantJSON =
									n),
								'function' ==
									typeof c &&
									(e._trustedCAsCallback =
										c)
							var l =
									t.disableWebAssembly,
								p =
									t.disableWebAssemblyStreaming,
								d =
									t.customFonts,
								h =
									t.standaloneInstancesPoolSize
							void 0 !==
								h &&
								(ft.size =
									h)
							var v =
								!!t.electronicSignatures &&
								Boolean(
									t
										.electronicSignatures
										.forceLegacySignaturesFeature
								)
							;(e._state =
								new X(
									pt(
										{
											baseUrl:
												r,
											licenseKey:
												t.licenseKey,
											document:
												t.document,
											disableWebAssembly:
												l,
											disableWebAssemblyStreaming:
												p,
											enableAutomaticLinkExtraction:
												s,
											overrideMemoryLimit:
												u,
											documentHandle:
												'0',
											customFonts:
												d,
											forceLegacySignaturesFeature:
												v,
											electronAppName:
												f
										}
									)
								)),
								(e._requestQueue =
									new V.Z(
										S.gZ
									))
							var m =
									ft.checkOut(),
								g =
									m.object,
								y =
									m.checkIn
							;(e.client =
								g),
								(e.checkIn =
									y)
							var w =
								n
									? ut(
											{
												annotations:
													n.annotations ||
													[],
												formFields:
													n.formFields ||
													[],
												formFieldValues:
													n.formFieldValues ||
													[],
												skippedPdfObjectIds:
													n.skippedPdfObjectIds ||
													[],
												skippedPdfFormFieldIds:
													n.skippedPdfFormFieldIds ||
													[],
												attachments:
													n.attachments ||
													{},
												bookmarks:
													n.bookmarks ||
													[],
												skippedPdfBookmarkIds:
													n.skippedPdfBookmarkIds ||
													[],
												format: n.format
											},
											n.pdfId
												? {
														pdfId: n.pdfId
												  }
												: null
									  )
									: null
							return (
								(e.provider =
									new M(
										e.client,
										w
									)),
								e
							)
						}
						return (
							(0,
							s.Z)(
								gt,
								[
									{
										key: 'isUsingInstantProvider',
										value: function () {
											return !1
										}
									},
									{
										key: 'hasClientsPresence',
										value: function () {
											return !1
										}
									},
									{
										key: 'load',
										value:
											((vt =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r =
																	arguments
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(e =
																						r.length >
																							0 &&
																						void 0 !==
																							r[0]
																							? r[0]
																							: {}),
																					(this._isPDFJavaScriptEnabled =
																						e.isPDFJavaScriptEnabled),
																					t.abrupt(
																						'return',
																						{
																							features:
																								this
																									._state
																									.features,
																							signatureFeatureAvailability:
																								this
																									._state
																									.signatureFeatureAvailability,
																							hasPassword:
																								!!e.password,
																							allowedTileScales:
																								'all'
																						}
																					)
																				)
																			case 3:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return vt.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'destroy',
										value: function () {
											this
												.provider &&
												this.provider.destroy(),
												this
													._requestQueue &&
													this._requestQueue.destroy(),
												this.checkIn()
										}
									},
									{
										key: 'documentInfo',
										value:
											((lt =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this
																						._state
																						.documentResponse
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return lt.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'lazyLoadPages',
										value:
											((st =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				if (
																					this
																						._state
																						.lazyLoadedPages
																				) {
																					t.next = 5
																					break
																				}
																				return (
																					(t.next = 3),
																					this.client.getAllPageInfos(
																						this
																							._state
																							.documentResponse
																							.pageCount
																					)
																				)
																			case 3:
																				;(e =
																					t.sent),
																					(this._state =
																						this._state.set(
																							'lazyLoadedPages',
																							e
																						))
																			case 5:
																				return t.abrupt(
																					'return',
																					this
																						._state
																						.lazyLoadedPages
																				)
																			case 6:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return st.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getDocumentHandle',
										value: function () {
											return this
												._state
												.documentHandle
										}
									},
									{
										key: 'getFormJSON',
										value: function () {
											return this.client.getFormJSON()
										}
									},
									{
										key: 'permissions',
										value: function () {
											return Promise.resolve(
												this
													._state
													.backendPermissions
											)
										}
									},
									{
										key: 'textForPageIndex',
										value: function (
											t
										) {
											var e =
													this,
												r =
													''.concat(
														t,
														'-text'
													),
												n =
													!1,
												o =
													new q(
														r,
														function () {
															return n
																? Promise.reject(
																		{
																			aborted:
																				!0
																		}
																  )
																: e.client
																		.textForPageIndex(
																			t
																		)
																		.then(
																			function (
																				e
																			) {
																				return n
																					? Promise.reject(
																							{
																								aborted:
																									!0
																							}
																					  )
																					: (0,
																					  A.T)(
																							{
																								textLines:
																									e
																							},
																							t
																					  )
																			}
																		)
														}
													),
												i =
													this._requestQueue.enqueue(
														o
													),
												a =
													i.promise,
												s =
													i.cancel
											return {
												promise:
													a,
												cancel: function () {
													;(n =
														!0),
														s()
												}
											}
										}
									},
									{
										key: 'getTextFromRects',
										value: function (
											t,
											e
										) {
											return this.client.getTextFromRects(
												t,
												e.toJS()
											)
										}
									},
									{
										key: 'renderTile',
										value: function (
											t,
											e,
											r,
											n,
											o
										) {
											var i =
													this,
												a =
													''
														.concat(
															t,
															'-'
														)
														.concat(
															e.width,
															'-'
														)
														.concat(
															e.height,
															'-'
														)
														.concat(
															r.top,
															'-'
														)
														.concat(
															r.left,
															'-'
														)
														.concat(
															r.width,
															'-'
														)
														.concat(
															r.height,
															'-'
														)
														.concat(
															this.getDocumentHandle()
														),
												s =
													new q(
														a,
														function () {
															var a =
																	o
																		? o.annotations
																				.filter(
																					x.d
																				)
																				.map(
																					F.Hs
																				)
																				.toJS()
																		: null,
																s =
																	o
																		? o.formFieldValues
																				.map(
																					F.kr
																				)
																				.toJS()
																		: null
															return i.client
																.renderTile(
																	t,
																	e.toObject(),
																	r.toObject(),
																	n,
																	a ||
																		(i
																			._state
																			.forceAnnotationsRender
																			? []
																			: null),
																	s,
																	(0,
																	nt.aV)(
																		{
																			width: r.width,
																			height: r.height
																		}
																	)
																)
																.then(
																	function (
																		n
																	) {
																		return n
																			? 'string' ==
																			  typeof n
																				? (0,
																				  w.ar)(
																						n
																				  )
																				: (0,
																				  w.R9)(
																						{
																							buffer: n,
																							width: r.width,
																							height: r.height
																						}
																				  )
																			: ((0,
																			  m.ZK)(
																					'The image buffer or URL is null, the tile cannot be rendered:',
																					'page: '
																						.concat(
																							t,
																							', page size: '
																						)
																						.concat(
																							e.toObject(),
																							', tile rect: '
																						)
																						.concat(
																							r.toObject()
																						)
																			  ),
																			  Promise.resolve(
																					null
																			  ))
																	}
																)
														}
													),
												u =
													e.width ===
														r.width &&
													e.height ===
														r.height,
												c =
													this._requestQueue.enqueue(
														s,
														u
													)
											return {
												promise:
													c.promise,
												cancel: c.cancel
											}
										}
									},
									{
										key: 'renderAnnotation',
										value: function (
											t,
											e,
											r,
											n,
											o
										) {
											var i =
													this,
												a =
													t.id
											;(0,
											m.kG)(
												this
													.provider instanceof
													M,
												'Standalone can only use standalone annotation provider'
											)
											var s =
												new q(
													a,
													function () {
														return i.client
															.renderAnnotation(
																(0,
																F.Hs)(
																	t
																),
																r,
																n,
																o,
																(0,
																nt.aV)(
																	{
																		width: n,
																		height: o
																	}
																)
															)
															.then(
																function (
																	e
																) {
																	return e
																		? (0,
																		  w.R9)(
																				{
																					buffer: e,
																					width: n,
																					height: o
																				}
																		  )
																		: ((0,
																		  m.ZK)(
																				'The image buffer is null, the annotation cannot be rendered',
																				t.toJS()
																		  ),
																		  Promise.resolve(
																				null
																		  ))
																}
															)
													}
												)
											return this._requestQueue.enqueue(
												s,
												!1
											)
										}
									},
									{
										key: 'renderPageAnnotations',
										value:
											((ot =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r,
															n
														) {
															var o,
																i,
																a,
																s,
																u,
																c,
																f,
																l =
																	this
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				if (
																					((c =
																						function (
																							t,
																							e
																						) {
																							if (
																								null !=
																									t &&
																								t.formFieldName
																							) {
																								var r =
																										a.find(
																											function (
																												e
																											) {
																												return (
																													e.name ===
																													t.formFieldName
																												)
																											}
																										),
																									n =
																										e.find(
																											function (
																												e
																											) {
																												return (
																													e.name ===
																													t.formFieldName
																												)
																											}
																										)
																								if (
																									!(0,
																									H.BT)(
																										r,
																										n
																									)
																								)
																									return !1
																							}
																							return !0
																						}),
																					(o =
																						this
																							.provider),
																					(0,
																					m.kG)(
																						o instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(i =
																						[]),
																					(a =
																						[]),
																					!(s =
																						r.some(
																							function (
																								t
																							) {
																								return (
																									t instanceof
																									j.x_
																								)
																							}
																						)))
																				) {
																					t.next = 9
																					break
																				}
																				return (
																					(t.next = 9),
																					o._setReadStateCallbacksPromise
																				)
																			case 9:
																				return (
																					(u =
																						r.filter(
																							function (
																								t
																							) {
																								var e =
																										s
																											? o._readStateCallbacks.getAnnotationWithFormField(
																													t.id
																											  )
																											: null,
																									r =
																										null ==
																										e
																											? void 0
																											: e.formField,
																									n =
																										(0,
																										x._R)(
																											t,
																											r
																										)
																								return (
																									n &&
																										r &&
																										(i.find(
																											function (
																												t
																											) {
																												return (
																													t.name ===
																													r.name
																												)
																											}
																										) ||
																											(i.push(
																												(0,
																												F.kr)(
																													(0,
																													H.CH)(
																														r
																													)
																												)
																											),
																											a.push(
																												r
																											))),
																									n
																								)
																							}
																						)),
																					(f =
																						new Promise(
																							function (
																								t,
																								r
																							) {
																								l.client
																									.renderPageAnnotations(
																										e,
																										u
																											.map(
																												function (
																													t
																												) {
																													return t.pdfObjectId
																												}
																											)
																											.toArray(),
																										u
																											.map(
																												function (
																													t
																												) {
																													return (
																														t
																															.boundingBox
																															.width *
																														n
																													)
																												}
																											)
																											.toArray(),
																										u
																											.map(
																												function (
																													t
																												) {
																													return (
																														t
																															.boundingBox
																															.height *
																														n
																													)
																												}
																											)
																											.toArray(),
																										(0,
																										nt.zP)()
																									)
																									.then(
																										function (
																											e
																										) {
																											var r =
																													a
																														.map(
																															function (
																																t
																															) {
																																var e
																																return null ===
																																	(e =
																																		o._readStateCallbacks) ||
																																	void 0 ===
																																		e
																																	? void 0
																																	: e.getFormFieldByName(
																																			t.name
																																	  )
																															}
																														)
																														.filter(
																															Boolean
																														),
																												i =
																													e.map(
																														function (
																															t,
																															e
																														) {
																															var o =
																																u.get(
																																	e
																																)
																															return c(
																																o,
																																r
																															) &&
																																o
																																? t
																																	? (0,
																																	  w.R9)(
																																			{
																																				buffer: t,
																																				width:
																																					o
																																						.boundingBox
																																						.width *
																																					n,
																																				height:
																																					o
																																						.boundingBox
																																						.height *
																																					n
																																			}
																																	  )
																																	: ((0,
																																	  m.ZK)(
																																			'The image buffer is null, the annotation cannot be rendered',
																																			o.toJS()
																																	  ),
																																	  Promise.resolve(
																																			null
																																	  ))
																																: Promise.resolve(
																																		null
																																  )
																														}
																													)
																											Promise.all(
																												i
																											).then(
																												function (
																													e
																												) {
																													var r =
																														a
																															.map(
																																function (
																																	t
																																) {
																																	var e
																																	return null ===
																																		(e =
																																			o._readStateCallbacks) ||
																																		void 0 ===
																																			e
																																		? void 0
																																		: e.getFormFieldByName(
																																				t.name
																																		  )
																																}
																															)
																															.filter(
																																Boolean
																															)
																													e.forEach(
																														function (
																															t,
																															e
																														) {
																															var n =
																																u.get(
																																	e
																																)
																															if (
																																n
																															) {
																																var o =
																																		l.annotationAPStreamPromises.get(
																																			n.id
																																		),
																																	i =
																																		c(
																																			n,
																																			r
																																		)
																																o &&
																																	((l.annotationAPStreamPromises =
																																		l.annotationAPStreamPromises.delete(
																																			n.id
																																		)),
																																	o(
																																		i
																																			? t
																																			: null
																																	)),
																																	t &&
																																		i &&
																																		l.cacheAPStream(
																																			t,
																																			n
																																		)
																															}
																														}
																													),
																														t()
																												}
																											)
																										}
																									)
																									.catch(
																										r
																									)
																							}
																						)),
																					(this.pageAPStreamsPromises =
																						this.pageAPStreamsPromises.set(
																							e,
																							f
																						)),
																					t.abrupt(
																						'return',
																						f
																					)
																				)
																			case 13:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												e,
												r
											) {
												return ot.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'renderDetachedAnnotation',
										value: function (
											t,
											e,
											r,
											n
										) {
											var o =
												this
											if (
												t.id
											)
												throw new m.p2(
													'Detached annotations should not have an `id`: '.concat(
														t.id
													)
												)
											var i =
													(0,
													Z.SK)(),
												a =
													new q(
														i,
														function () {
															return o.client
																.renderDetachedAnnotation(
																	(0,
																	F.Hs)(
																		t
																	),
																	e,
																	r,
																	n,
																	(0,
																	nt.aV)(
																		{
																			width: r,
																			height: n
																		}
																	)
																)
																.then(
																	function (
																		e
																	) {
																		return e
																			? (0,
																			  w.R9)(
																					{
																						buffer: e,
																						width: r,
																						height: n
																					}
																			  )
																			: ((0,
																			  m.ZK)(
																					'The image buffer is null, the annotation cannot be rendered',
																					t.toJS()
																			  ),
																			  Promise.resolve(
																					null
																			  ))
																	}
																)
														}
													),
												s =
													this._requestQueue.enqueue(
														a,
														!1
													)
											return {
												promise:
													s.promise,
												cancel: s.cancel
											}
										}
									},
									{
										key: 'getAttachment',
										value:
											((tt =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															var r,
																n,
																o,
																i
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.next = 2),
																					this.client.getAttachment(
																						e
																					)
																				)
																			case 2:
																				return (
																					(r =
																						t.sent),
																					(n =
																						(0,
																						y.Z)(
																							r,
																							2
																						)),
																					(o =
																						n[0]),
																					(i =
																						n[1]),
																					t.abrupt(
																						'return',
																						new Blob(
																							[
																								o
																							],
																							{
																								type: i
																							}
																						)
																					)
																				)
																			case 7:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return tt.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'parseXFDF',
										value:
											((Y =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															var r,
																n,
																o,
																i
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.next = 3),
																					this.client.parseXFDF(
																						e
																					)
																				)
																			case 3:
																				return (
																					(r =
																						t.sent),
																					(n =
																						r.errors),
																					(o =
																						r.formFieldValues),
																					(i =
																						r.annotations),
																					t.abrupt(
																						'return',
																						{
																							errors:
																								null ==
																								n
																									? void 0
																									: n.map(
																											function (
																												t
																											) {
																												return {
																													errorMessage:
																														t.error_message,
																													type: t.type
																												}
																											}
																									  ),
																							formFieldValues:
																								null ==
																								o
																									? void 0
																									: o.reduce(
																											function (
																												t,
																												e
																											) {
																												return (
																													(t[
																														e.fqdn
																													] =
																														e.values),
																													t
																												)
																											},
																											{}
																									  ),
																							annotations:
																								(0,
																								v.aV)(
																									(null ==
																									i
																										? void 0
																										: i.map(
																												function (
																													t
																												) {
																													return (0,
																													F.vH)(
																														(0,
																														x.xc)(),
																														t
																													)
																												}
																										  )) ||
																										[]
																								)
																						}
																					)
																				)
																			case 8:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return Y.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'search',
										value:
											((z =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r,
															n,
															o
														) {
															var i,
																a,
																s,
																u =
																	arguments
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(i =
																						u.length >
																							4 &&
																						void 0 !==
																							u[4] &&
																						u[4]),
																					(a =
																						u.length >
																							5 &&
																						void 0 !==
																							u[5]
																							? u[5]
																							: rt
																									.S
																									.TEXT),
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.next = 5),
																					this.client.search(
																						e,
																						r,
																						n,
																						o,
																						a
																					)
																				)
																			case 5:
																				return (
																					(s =
																						t.sent),
																					t.abrupt(
																						'return',
																						(0,
																						O.E)(
																							s.filter(
																								function (
																									t
																								) {
																									return (
																										i ||
																										!t.isAnnotation
																									)
																								}
																							)
																						)
																					)
																				)
																			case 7:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												e,
												r,
												n
											) {
												return z.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'searchAndRedact',
										value:
											((W =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r,
															n
														) {
															var o,
																i
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(o =
																						n.totalPages),
																					(t.next = 4),
																					this.client.search(
																						e,
																						0,
																						o,
																						r.caseSensitive,
																						r.searchType
																					)
																				)
																			case 4:
																				return (
																					(i =
																						t.sent),
																					t.abrupt(
																						'return',
																						(0,
																						v.aV)(
																							i
																								.filter(
																									function (
																										t
																									) {
																										return (
																											r.searchInAnnotations ||
																											!t.isAnnotation
																										)
																									}
																								)
																								.map(
																									function (
																										t
																									) {
																										var e =
																												t.isAnnotation
																													? [
																															t.annotationRect
																													  ]
																													: t.rectsOnPage,
																											o =
																												(0,
																												v.aV)(
																													e
																												).map(
																													function (
																														t
																													) {
																														return (
																															(0,
																															m.kG)(
																																t
																															),
																															(0,
																															et.k)(
																																t
																															)
																														)
																													}
																												)
																										return new Q.Z(
																											ut(
																												ut(
																													ut(
																														{},
																														(0,
																														x.lx)(
																															n
																														)
																													),
																													r.annotationPreset
																												),
																												{},
																												{
																													pageIndex:
																														t.pageIndex,
																													rects: o,
																													boundingBox:
																														$.Z.union(
																															o
																														)
																												}
																											)
																										)
																									}
																								)
																						)
																					)
																				)
																			case 6:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												e,
												r
											) {
												return W.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'exportPDF',
										value: function () {
											var t =
													arguments.length >
														0 &&
													void 0 !==
														arguments[0]
														? arguments[0]
														: {},
												e =
													t.flatten,
												r =
													void 0 !==
														e &&
													e,
												n =
													t.incremental,
												o =
													void 0 !==
														n &&
													n,
												i =
													t.saveForPrinting,
												a =
													void 0 !==
														i &&
													i,
												s =
													t.format,
												u =
													void 0 ===
													s
														? 'pdf'
														: s,
												c =
													t.excludeAnnotations,
												f =
													void 0 !==
														c &&
													c
											return (
												(0,
												m.kG)(
													this
														.provider instanceof
														M,
													'Standalone can only use standalone annotation provider'
												),
												this.client
													.exportFile(
														r,
														o,
														a,
														u,
														f
													)
													.then(
														function (
															t
														) {
															var e =
																	(0,
																	y.Z)(
																		t,
																		2
																	),
																r =
																	e[0],
																n =
																	e[1]
															return (
																(r.mimeType =
																	n.mimeType),
																(r.extension =
																	n.extension),
																r
															)
														}
													)
											)
										}
									},
									{
										key: 'exportXFDF',
										value: function () {
											return (
												(0,
												m.kG)(
													this
														.provider instanceof
														M,
													'Standalone can only use standalone annotation provider'
												),
												this.client.exportXFDF()
											)
										}
									},
									{
										key: 'exportInstantJSON',
										value: function () {
											return (
												(0,
												m.kG)(
													this
														.provider instanceof
														M,
													'Standalone build requires Standalone annotation provider.'
												),
												this.client.exportInstantJSON()
											)
										}
									},
									{
										key: 'getPDFURL',
										value: function () {
											var t =
													arguments.length >
														0 &&
													void 0 !==
														arguments[0]
														? arguments[0]
														: {},
												e =
													t.includeComments,
												r =
													void 0 ===
														e ||
													e,
												n =
													t.saveForPrinting,
												o =
													t.excludeAnnotations
											return this.generatePDFObjectURL(
												{
													includeComments:
														r,
													saveForPrinting:
														n,
													excludeAnnotations:
														o
												}
											)
										}
									},
									{
										key: 'generatePDFObjectURL',
										value: function () {
											var t,
												e =
													this,
												r =
													arguments.length >
														0 &&
													void 0 !==
														arguments[0]
														? arguments[0]
														: {},
												n =
													r.includeComments,
												o =
													void 0 ===
														n ||
													n,
												i =
													r.saveForPrinting,
												a =
													r.excludeAnnotations,
												s =
													void 0 !==
														a &&
													a,
												u =
													!1,
												c =
													new Promise(
														function (
															r
														) {
															e.exportPDF(
																{
																	flatten:
																		!0,
																	includeComments:
																		o,
																	saveForPrinting:
																		i,
																	excludeAnnotations:
																		s
																}
															).then(
																function (
																	e
																) {
																	if (
																		!u
																	) {
																		var n =
																			new Blob(
																				[
																					e
																				],
																				{
																					type: e.mimeType
																				}
																			)
																		;(t =
																			window.URL.createObjectURL(
																				n
																			)),
																			r(
																				t
																			)
																	}
																}
															)
														}
													)
											return {
												promise:
													c,
												revoke: function () {
													t &&
														window.URL.revokeObjectURL(
															t
														),
														(u =
															!0)
												}
											}
										}
									},
									{
										key: 'getDocumentOutline',
										value:
											((G =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.next = 2),
																					this.client.getDocumentOutline()
																				)
																			case 2:
																				return (
																					(e =
																						t.sent),
																					t.abrupt(
																						'return',
																						(0,
																						v.aV)(
																							e.map(
																								k.i
																							)
																						)
																					)
																				)
																			case 4:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return G.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'onKeystrokeEvent',
										value:
											((J =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.next = 2),
																					this.client.onKeystrokeEvent(
																						e
																					)
																				)
																			case 2:
																				return t.abrupt(
																					'return',
																					t.sent
																				)
																			case 3:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return J.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'evalFormValuesActions',
										value:
											((U =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					t.abrupt(
																						'return',
																						this.client.evalFormValuesActions(
																							e
																								.map(
																									F.kr
																								)
																								.toJS()
																						)
																					)
																				)
																			case 2:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return U.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'evalScript',
										value:
											((B =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					t.abrupt(
																						'return',
																						this.client.evalScript(
																							e,
																							r
																						)
																					)
																				)
																			case 2:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												e
											) {
												return B.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'setFormJSONUpdateBatchMode',
										value:
											((N =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.setFormJSONUpdateBatchMode(
																						e
																					)
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return N.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'applyOperationsAndReload',
										value:
											((C =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															var r,
																n,
																o
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.prev = 1),
																					(t.next = 4),
																					ht(
																						e
																					)
																				)
																			case 4:
																				return (
																					(o =
																						t.sent),
																					(r =
																						o.processedOperations),
																					(n =
																						o.operationsDocuments),
																					(t.next = 9),
																					this.client.applyOperations(
																						r,
																						n
																					)
																				)
																			case 9:
																				t.next = 14
																				break
																			case 11:
																				throw (
																					((t.prev = 11),
																					(t.t0 =
																						t.catch(
																							1
																						)),
																					new m.p2(
																						'Applying operations failed: '.concat(
																							t.t0
																						)
																					))
																				)
																			case 14:
																				return (
																					(this.provider._state =
																						this.provider._state.set(
																							'alreadyLoadedPages',
																							(0,
																							v.D5)()
																						)),
																					t.abrupt(
																						'return',
																						this.reloadDocument()
																					)
																				)
																			case 16:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		1,
																		11
																	]
																]
															)
														}
													)
												)),
											function (
												t
											) {
												return C.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'applyRedactionsAndReload',
										value:
											((L =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.prev = 1),
																					(t.next = 4),
																					this.client.applyRedactions()
																				)
																			case 4:
																				t.next = 9
																				break
																			case 6:
																				throw (
																					((t.prev = 6),
																					(t.t0 =
																						t.catch(
																							1
																						)),
																					new m.p2(
																						'Applying redactions failed: '.concat(
																							t.t0
																						)
																					))
																				)
																			case 9:
																				return t.abrupt(
																					'return',
																					this.reloadDocument()
																				)
																			case 10:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		1,
																		6
																	]
																]
															)
														}
													)
												)),
											function () {
												return L.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'reloadDocument',
										value:
											((T =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.prev = 0),
																					null ===
																						(e =
																							this
																								.provider) ||
																						void 0 ===
																							e ||
																						e.destroy(),
																					(this.provider =
																						new M(
																							this.client,
																							null
																						)),
																					(this._state =
																						this._state.set(
																							'lazyLoadedPages',
																							null
																						)),
																					(t.next = 6),
																					this.client.reloadDocument()
																				)
																			case 6:
																				return (
																					(r =
																						t.sent),
																					(this._state =
																						this._state
																							.set(
																								'documentResponse',
																								r
																							)
																							.set(
																								'documentHandle',
																								(
																									parseInt(
																										this
																											._state
																											.documentHandle
																									) +
																									1
																								).toString()
																							)
																							.set(
																								'signaturesInfoPromise',
																								null
																							)),
																					t.abrupt(
																						'return',
																						{
																							features:
																								this
																									._state
																									.features,
																							signatureFeatureAvailability:
																								this
																									._state
																									.signatureFeatureAvailability,
																							hasPassword:
																								!1,
																							allowedTileScales:
																								'all'
																						}
																					)
																				)
																			case 11:
																				throw (
																					((t.prev = 11),
																					(t.t0 =
																						t.catch(
																							0
																						)),
																					new m.p2(
																						'Reloading failed: '.concat(
																							t.t0
																						)
																					))
																				)
																			case 14:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		0,
																		11
																	]
																]
															)
														}
													)
												)),
											function () {
												return T.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getEmbeddedFiles',
										value:
											((R =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.next = 2),
																					this.client.getEmbeddedFilesList()
																				)
																			case 2:
																				return (
																					(e =
																						t.sent),
																					t.abrupt(
																						'return',
																						(0,
																						v.aV)(
																							e.map(
																								function (
																									t
																								) {
																									var e =
																											t.id,
																										r =
																											(0,
																											g.Z)(
																												t,
																												at
																											)
																									return (0,
																									it.i)(
																										e,
																										r,
																										!0
																									)
																								}
																							)
																						)
																					)
																				)
																			case 4:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return R.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'exportPDFWithOperations',
										value:
											((D =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															var r,
																n,
																o
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(t.prev = 0),
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.next = 4),
																					ht(
																						e
																					)
																				)
																			case 4:
																				return (
																					(o =
																						t.sent),
																					(r =
																						o.processedOperations),
																					(n =
																						o.operationsDocuments),
																					t.abrupt(
																						'return',
																						this.client.exportPDFWithOperations(
																							r,
																							n
																						)
																					)
																				)
																			case 10:
																				throw (
																					((t.prev = 10),
																					(t.t0 =
																						t.catch(
																							0
																						)),
																					new m.p2(
																						'Exporting PDF with operations failed: '.concat(
																							t.t0
																						)
																					))
																				)
																			case 13:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		0,
																		10
																	]
																]
															)
														}
													)
												)),
											function (
												t
											) {
												return D.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getSignaturesInfo',
										value: function () {
											try {
												if (
													((0,
													m.kG)(
														this
															.provider instanceof
															M,
														'Standalone can only use standalone annotation provider'
													),
													this
														._state
														.signaturesInfoPromise)
												)
													return this
														._state
														.signaturesInfoPromise
												var t =
													this.client
														.getSignaturesInfo()
														.then(
															function (
																t
															) {
																return (0,
																F.rS)(
																	t
																)
															}
														)
												return (
													(this._state =
														this._state.set(
															'signaturesInfoPromise',
															t
														)),
													t
												)
											} catch (t) {
												throw new m.p2(
													'Getting document signatures info: '.concat(
														t
													)
												)
											}
										}
									},
									{
										key: 'refreshSignaturesInfo',
										value:
											((P =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				this._state =
																					this._state.set(
																						'signaturesInfoPromise',
																						null
																					)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return P.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'loadCertificates',
										value:
											((I =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.loadCertificates(
																						e
																					)
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return I.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'signDocumentAndReload',
										value:
											((E =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r
														) {
															var o,
																i,
																a,
																s,
																u,
																c,
																f,
																l
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(0,
																					m.kG)(
																						'function' ==
																							typeof r,
																						'Signing document failed: twoStepSignatureCallback must be a function'
																					),
																					(o =
																						e &&
																						e.placeholderSize
																							? {
																									estimatedSize:
																										e.placeholderSize
																							  }
																							: null),
																					(0,
																					m.kG)(
																						this
																							.provider instanceof
																							M,
																						'Standalone can only use standalone annotation provider'
																					),
																					(t.prev = 3),
																					(t.next = 6),
																					this.client.prepareSignInvisible(
																						o,
																						!!e &&
																							Boolean(
																								e.flatten
																							)
																					)
																				)
																			case 6:
																				return (
																					(i =
																						t.sent),
																					(a =
																						i.hash),
																					(s =
																						i.signatureFormFieldName),
																					(u =
																						i.file),
																					(c =
																						i.fileContents),
																					(0,
																					m.kG)(
																						'function' ==
																							typeof r,
																						'twoStepSignatureCallback must be a function'
																					),
																					(t.next = 14),
																					r(
																						{
																							hash: a,
																							fileContents:
																								c
																						}
																					)
																				)
																			case 14:
																				if (
																					((f =
																						t.sent),
																					(l =
																						void 0),
																					f instanceof
																						ArrayBuffer)
																				) {
																					t.next = 20
																					break
																				}
																				throw new m.p2(
																					'Resolved value from twoStepSignatureCallback is of type ' +
																						''.concat(
																							(0,
																							n.Z)(
																								f
																							),
																							' and it must be an ArrayBuffer instead.'
																						)
																				)
																			case 20:
																				l =
																					f
																			case 21:
																				return (
																					(t.next = 23),
																					this.client.sign(
																						u,
																						s,
																						(0,
																						K.sM)(
																							l
																						)
																					)
																				)
																			case 23:
																				return (
																					(t.next = 25),
																					this.reloadDocument()
																				)
																			case 25:
																				t.next = 32
																				break
																			case 27:
																				return (
																					(t.prev = 27),
																					(t.t0 =
																						t.catch(
																							3
																						)),
																					(t.next = 31),
																					this.client.restoreToOriginalState()
																				)
																			case 31:
																				throw t.t0
																			case 32:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		3,
																		27
																	]
																]
															)
														}
													)
												)),
											function (
												t,
												e
											) {
												return E.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'cancelRequests',
										value: function () {
											this._requestQueue.cancelAll()
										}
									},
									{
										key: 'syncChanges',
										value:
											((_ =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																			case 'end':
																				return t.stop()
																		}
																},
																t
															)
														}
													)
												)),
											function () {
												return _.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'getDefaultGroup',
										value: function () {}
									},
									{
										key: 'isCollaborationPermissionsEnabled',
										value: function () {
											return !1
										}
									},
									{
										key: 'clearAPStreamCache',
										value:
											((h =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.clearAPStreamCache()
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return h.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'setComparisonDocument',
										value:
											((p =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.setComparisonDocument(
																						e,
																						r
																					)
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												e
											) {
												return p.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'openComparisonDocument',
										value:
											((l =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(this._state =
																						this._state.set(
																							'forceAnnotationsRender',
																							!1
																						)),
																					(t.next = 3),
																					this.client.closeDocument()
																				)
																			case 3:
																				return (
																					(this._state =
																						this._state.set(
																							'forceAnnotationsRender',
																							!0
																						)),
																					(t.next = 6),
																					this.client.openComparisonDocument(
																						e
																					)
																				)
																			case 6:
																				if (
																					((t.t0 =
																						t.sent),
																					t.t0)
																				) {
																					t.next = 9
																					break
																				}
																				t.t0 =
																					this._state.documentResponse
																			case 9:
																				return t.abrupt(
																					'return',
																					t.t0
																				)
																			case 10:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return l.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'documentCompareAndOpen',
										value:
											((f =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.documentCompareAndOpen(
																						e
																					)
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return f.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'persistOpenDocument',
										value:
											((u =
												(0,
												o.Z)(
													d().mark(
														function t(
															e
														) {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.persistOpenDocument(
																						e
																					)
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t
											) {
												return u.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'cleanupDocumentComparison',
										value:
											((r =
												(0,
												o.Z)(
													d().mark(
														function t() {
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return t.abrupt(
																					'return',
																					this.client.cleanupDocumentComparison()
																				)
																			case 1:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function () {
												return r.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'runPDFFormattingScripts',
										value:
											((e =
												(0,
												o.Z)(
													d().mark(
														function t(
															e,
															r
														) {
															var n,
																o,
																i,
																a,
																s,
																u,
																c,
																f,
																l,
																p
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				if (
																					((n =
																						[]),
																					!this
																						._isPDFJavaScriptEnabled)
																				) {
																					t.next = 28
																					break
																				}
																				return (
																					(t.next = 4),
																					this.client.enablePDFJavaScriptSupport()
																				)
																			case 4:
																				if (
																					((o =
																						t.sent),
																					(i =
																						e.reduce(
																							function (
																								t,
																								e
																							) {
																								return (
																									null !=
																										r &&
																									r(
																										e
																									)
																										? t.withAPStream.push(
																												e.formFieldName
																										  )
																										: t.withoutAPStream.push(
																												e.formFieldName
																										  ),
																									t
																								)
																							},
																							{
																								withAPStream:
																									[],
																								withoutAPStream:
																									[]
																							}
																						)),
																					(a =
																						i.withAPStream),
																					(s =
																						i.withoutAPStream),
																					(u =
																						[]),
																					!a.length ||
																						s.length)
																				) {
																					t.next = 13
																					break
																				}
																				return (
																					(t.next = 10),
																					this.client.runPDFFormattingScripts(
																						a,
																						!0
																					)
																				)
																			case 10:
																				;(u =
																					t.sent),
																					(t.next = 27)
																				break
																			case 13:
																				if (
																					a.length ||
																					!s.length
																				) {
																					t.next = 19
																					break
																				}
																				return (
																					(t.next = 16),
																					this.client.runPDFFormattingScripts(
																						s,
																						!1
																					)
																				)
																			case 16:
																				;(u =
																					t.sent),
																					(t.next = 27)
																				break
																			case 19:
																				if (
																					!a.length ||
																					!s.length
																				) {
																					t.next = 27
																					break
																				}
																				return (
																					(t.next = 22),
																					Promise.all(
																						[
																							this.client.runPDFFormattingScripts(
																								a,
																								!0
																							),
																							this.client.runPDFFormattingScripts(
																								s,
																								!1
																							)
																						]
																					)
																				)
																			case 22:
																				;(c =
																					t.sent),
																					(f =
																						(0,
																						y.Z)(
																							c,
																							2
																						)),
																					(l =
																						f[0]),
																					(p =
																						f[1]),
																					(u =
																						l.concat(
																							p
																						))
																			case 27:
																				n =
																					(0,
																					H.gE)(
																						o,
																						u
																					)
																			case 28:
																				return t.abrupt(
																					'return',
																					n
																				)
																			case 29:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this
															)
														}
													)
												)),
											function (
												t,
												r
											) {
												return e.apply(
													this,
													arguments
												)
											})
									}
								]
							),
							gt
						)
					})(
						_.W
					)
			function pt(
				t
			) {
				return {
					baseUrl:
						t.baseUrl,
					licenseKey:
						t.licenseKey,
					document:
						t.document,
					disableWebAssembly:
						!!t.disableWebAssembly,
					disableWebAssemblyStreaming:
						!!t.disableWebAssemblyStreaming,
					enableAutomaticLinkExtraction:
						!!t.enableAutomaticLinkExtraction,
					overrideMemoryLimit:
						'number' ==
						typeof t.overrideMemoryLimit
							? t.overrideMemoryLimit
							: null,
					documentHandle:
						'number' ==
						typeof t.documentHandle
							? t.documentHandle
							: '0',
					trustedCAsCallback:
						'function' ==
						typeof t.trustedCAsCallback
							? t.trustedCAsCallback
							: null,
					customFonts:
						Array.isArray(
							t.customFonts
						)
							? t.customFonts.filter(
									function (
										t
									) {
										return (
											t instanceof
											ot.Z
										)
									}
							  )
							: null,
					forceLegacySignaturesFeature:
						Boolean(
							t.forceLegacySignaturesFeature
						),
					electronAppName:
						'string' ==
						typeof t.electronAppName
							? t.electronAppName
							: null
				}
			}
			function dt(
				t
			) {
				var e =
						t.licenseKey,
					r =
						t.instantJSON,
					o =
						t.XFDF,
					i =
						t.disableWebAssembly,
					a =
						t.disableWebAssemblyStreaming,
					s =
						t.disableIndexedDBCaching,
					u =
						t.enableAutomaticLinkExtraction,
					c =
						t.overrideMemoryLimit,
					f =
						t.standaloneInstancesPoolSize,
					l =
						t.trustedCAsCallback,
					p =
						t.baseUrl,
					d =
						t.customFonts
				if (
					((0,
					m.kG)(
						'string' ==
							typeof p,
						'`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/'
					),
					(0,
					tt.Pn)(
						p
					),
					(0,
					m.kG)(
						null ==
							e ||
							'string' ==
								typeof e,
						'licenseKey must be a string value if provided. Please obtain yours from https://customers.pspdfkit.com.'
					),
					'string' ==
						typeof e &&
						(0,
						m.kG)(
							!e.startsWith(
								'TRIAL-'
							),
							"You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial."
						),
					(0,
					m.kG)(
						void 0 ===
							o ||
							'string' ==
								typeof o,
						'XFDF must be a string'
					),
					r)
				) {
					;(0,
					m.kG)(
						'object' ===
							(0,
							n.Z)(
								r
							) &&
							null !==
								r,
						'instantJSON must be an Object'
					),
						(0,
						m.kG)(
							void 0 ===
								o,
							'Cannot import from both instantJSON and XFDF'
						),
						(0,
						m.kG)(
							'https://pspdfkit.com/instant-json/v1' ===
								r.format,
							"instantJSON has an invalid format, please use 'https://pspdfkit.com/instant-json/v1"
						)
					var h =
						r.pdfId
					h &&
						(0,
						m.kG)(
							'object' ===
								(0,
								n.Z)(
									h
								) &&
								null !==
									h &&
								(('string' ==
									typeof h.permanent &&
									'string' ==
										typeof h.changing) ||
									('string' !=
										typeof h.permanent &&
										'string' !=
											typeof h.changing)),
							'instantJSON has an invalid pdfId'
						),
						(0,
						m.kG)(
							void 0 ===
								r.skippedPdfObjectIds ||
								Array.isArray(
									r.skippedPdfObjectIds
								),
							'instantJSON has invalid skippedPdfObjectIds'
						),
						(0,
						m.kG)(
							void 0 ===
								r.annotations ||
								(Array.isArray(
									r.annotations
								) &&
									r.annotations.every(
										function (
											t
										) {
											return (
												'object' ===
													(0,
													n.Z)(
														t
													) &&
												null !==
													t
											)
										}
									)),
							'instantJSON has invalid annotations'
						),
						(0,
						m.kG)(
							void 0 ===
								r.formFieldValues ||
								(Array.isArray(
									r.formFieldValues
								) &&
									r.formFieldValues.every(
										function (
											t
										) {
											return (
												'object' ===
													(0,
													n.Z)(
														t
													) &&
												null !==
													t
											)
										}
									)),
							'instantJSON has invalid form field values'
						),
						(0,
						m.kG)(
							void 0 ===
								r.skippedPdfBookmarkIds ||
								Array.isArray(
									r.skippedPdfBookmarkIds
								),
							'instantJSON has invalid skippedPdfBookmarkIds'
						),
						(0,
						m.kG)(
							void 0 ===
								r.bookmarks ||
								(Array.isArray(
									r.bookmarks
								) &&
									r.bookmarks.every(
										function (
											t
										) {
											return (
												'object' ===
													(0,
													n.Z)(
														t
													) &&
												null !==
													t
											)
										}
									)),
							'instantJSON has invalid bookmarks'
						)
				}
				;(0,
				m.kG)(
					void 0 ===
						i ||
						'boolean' ==
							typeof i,
					'disableWebAssembly must be a boolean'
				),
					(0,
					m.kG)(
						void 0 ===
							a ||
							'boolean' ==
								typeof a,
						'disableWebAssemblyStreaming must be a boolean'
					),
					(0,
					m.kG)(
						void 0 ===
							u ||
							'boolean' ==
								typeof u,
						'enableAutomaticLinkExtraction must be a boolean'
					),
					(0,
					m.kG)(
						void 0 ===
							c ||
							'number' ==
								typeof c,
						'overrideMemoryLimit must be a number'
					),
					(0,
					m.kG)(
						void 0 ===
							f ||
							('number' ==
								typeof f &&
								f >=
									0),
						'standaloneInstancesPoolSize must be a non-negative number'
					),
					(0,
					m.kG)(
						void 0 ===
							l ||
							'function' ==
								typeof l,
						'trustedCAsCallback must be a function'
					),
					(0,
					m.kG)(
						void 0 ===
							d ||
							(Array.isArray(
								d
							) &&
								d.every(
									function (
										t
									) {
										return (
											t instanceof
											ot.Z
										)
									}
								)),
						'customFonts must be an array of PSPDFKit.Font instances'
					),
					(0,
					m.kG)(
						void 0 ===
							d ||
							d.every(
								function (
									t
								) {
									return t.callback
								}
							),
						'All PSPDFKit.Font instances specified on customFonts must have its callback property defined'
					),
					void 0 !==
						s &&
						(0,
						m.a1)(
							'disableIndexedDbCaching has been deprecated and it no longer has effect. It will be removed in a later version.\nBrowsers dropped IndexedDB serialization of Wasm modules in favor of regular HTTP caching.'
						)
			}
			function ht(
				t
			) {
				return vt.apply(
					this,
					arguments
				)
			}
			function vt() {
				return (
					(vt =
						(0,
						o.Z)(
							d().mark(
								function t(
									e
								) {
									var r,
										i,
										a
									return d().wrap(
										function (
											t
										) {
											for (;;)
												switch (
													(t.prev =
														t.next)
												) {
													case 0:
														return (
															(r =
																new WeakMap()),
															(i =
																{}),
															(t.next = 4),
															Promise.all(
																e.map(
																	(function () {
																		var t =
																			(0,
																			o.Z)(
																				d().mark(
																					function t(
																						e,
																						o
																					) {
																						var a,
																							s,
																							u,
																							c,
																							f,
																							l
																						return d().wrap(
																							function (
																								t
																							) {
																								for (;;)
																									switch (
																										(t.prev =
																											t.next)
																									) {
																										case 0:
																											if (
																												'importDocument' !==
																												e.type
																											) {
																												t.next = 6
																												break
																											}
																											return (
																												(a =
																													e.document),
																												(0,
																												m.kG)(
																													a instanceof
																														File ||
																														a instanceof
																															Blob,
																													'Wrong `importDocument` operation `document` value: it must be a File or a Blob'
																												),
																												t.abrupt(
																													'return',
																													(0,
																													Y.M)(
																														r,
																														i,
																														a,
																														e,
																														o,
																														'document'
																													)
																												)
																											)
																										case 6:
																											if (
																												'applyInstantJson' !==
																												e.type
																											) {
																												t.next = 14
																												break
																											}
																											return (
																												(s =
																													e.instantJson),
																												(0,
																												m.kG)(
																													'object' ===
																														(0,
																														n.Z)(
																															s
																														) &&
																														null !==
																															s,
																													'Wrong `applyInstantJson` operation `instantJson` value: it must be an object'
																												),
																												(u =
																													JSON.stringify(
																														s
																													)),
																												(c =
																													new Blob(
																														[
																															u
																														],
																														{
																															type: 'application/json'
																														}
																													)),
																												t.abrupt(
																													'return',
																													(0,
																													Y.M)(
																														r,
																														i,
																														c,
																														e,
																														o,
																														'dataFilePath'
																													)
																												)
																											)
																										case 14:
																											if (
																												'applyXfdf' !==
																												e.type
																											) {
																												t.next = 19
																												break
																											}
																											return (
																												(f =
																													e.xfdf),
																												(0,
																												m.kG)(
																													'string' ==
																														typeof f,
																													'Wrong `applyXfdf` operation `xfdf` value: it must be a string'
																												),
																												(l =
																													new Blob(
																														[
																															f
																														],
																														{
																															type: 'application/vnd.adobe.xfdf'
																														}
																													)),
																												t.abrupt(
																													'return',
																													(0,
																													Y.M)(
																														r,
																														i,
																														l,
																														e,
																														o,
																														'dataFilePath'
																													)
																												)
																											)
																										case 19:
																											return t.abrupt(
																												'return',
																												e
																											)
																										case 20:
																										case 'end':
																											return t.stop()
																									}
																							},
																							t
																						)
																					}
																				)
																			)
																		return function (
																			e,
																			r
																		) {
																			return t.apply(
																				this,
																				arguments
																			)
																		}
																	})()
																)
															)
														)
													case 4:
														return (
															(a =
																t.sent),
															t.abrupt(
																'return',
																{
																	processedOperations:
																		a,
																	operationsDocuments:
																		i
																}
															)
														)
													case 6:
													case 'end':
														return t.stop()
												}
										},
										t
									)
								}
							)
						)),
					vt.apply(
						this,
						arguments
					)
				)
			}
			var mt,
				gt =
					r(
						95453
					),
				yt =
					r(
						14651
					)
			function bt(
				t,
				e
			) {
				var r =
					Object.keys(
						t
					)
				if (
					Object.getOwnPropertySymbols
				) {
					var n =
						Object.getOwnPropertySymbols(
							t
						)
					e &&
						(n =
							n.filter(
								function (
									e
								) {
									return Object.getOwnPropertyDescriptor(
										t,
										e
									)
										.enumerable
								}
							)),
						r.push.apply(
							r,
							n
						)
				}
				return r
			}
			function wt(
				t
			) {
				for (
					var e = 1;
					e <
					arguments.length;
					e++
				) {
					var r =
						null !=
						arguments[
							e
						]
							? arguments[
									e
							  ]
							: {}
					e % 2
						? bt(
								Object(
									r
								),
								!0
						  ).forEach(
								function (
									e
								) {
									;(0,
									i.Z)(
										t,
										e,
										r[
											e
										]
									)
								}
						  )
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(
								t,
								Object.getOwnPropertyDescriptors(
									r
								)
						  )
						: bt(
								Object(
									r
								)
						  ).forEach(
								function (
									e
								) {
									Object.defineProperty(
										t,
										e,
										Object.getOwnPropertyDescriptor(
											r,
											e
										)
									)
								}
						  )
				}
				return t
			}
			function kt(
				t
			) {
				var e =
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
						} catch (t) {
							return !1
						}
					})()
				return function () {
					var r,
						n =
							(0,
							l.Z)(
								t
							)
					if (
						e
					) {
						var o =
							(0,
							l.Z)(
								this
							).constructor
						r =
							Reflect.construct(
								n,
								arguments,
								o
							)
					} else
						r =
							n.apply(
								this,
								arguments
							)
					return (0,
					f.Z)(
						this,
						r
					)
				}
			}
			var xt = 0.3,
				_t =
					(function (
						t
					) {
						;(0,
						c.Z)(
							n,
							t
						)
						var e,
							r =
								kt(
									n
								)
						function n(
							t
						) {
							var e
							;(0,
							a.Z)(
								this,
								n
							)
							var o =
									t.baseUrl ||
									(0,
									h.SV)(
										window.document
									),
								i =
									wt(
										wt(
											{},
											t
										),
										{},
										{
											baseUrl:
												o
										}
									)
							if (
								'string' !=
								typeof i.baseUrl
							)
								throw new m.p2(
									'`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`'
								)
							if (
								'string' !=
									typeof i.document &&
								!(
									i.document instanceof
									ArrayBuffer
								)
							)
								throw new m.p2(
									'document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`'
								)
							if (
								mt &&
								mt !==
									i.licenseKey
							)
								throw new m.p2(
									'Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.'
								)
							if (
								'string' ==
									typeof i.licenseKey &&
								i.licenseKey.startsWith(
									'TRIAL-'
								)
							)
								throw new m.p2(
									"You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial."
								)
							return (
								((e =
									r.call(
										this,
										i
									)).destroyed =
									!1),
								e
							)
						}
						return (
							(0,
							s.Z)(
								n,
								[
									{
										key: 'load',
										value:
											((e =
												(0,
												o.Z)(
													d().mark(
														function t() {
															var e,
																r,
																n,
																o,
																i,
																a,
																s,
																u,
																c,
																f,
																l,
																p,
																h =
																	arguments
															return d().wrap(
																function (
																	t
																) {
																	for (;;)
																		switch (
																			(t.prev =
																				t.next)
																		) {
																			case 0:
																				return (
																					(e =
																						h.length >
																							0 &&
																						void 0 !==
																							h[0]
																							? h[0]
																							: {}),
																					(n = 0.2),
																					e.progressCallback &&
																						e.progressCallback(
																							'loading',
																							n
																						),
																					(this._isPDFJavaScriptEnabled =
																						e.isPDFJavaScriptEnabled),
																					(r =
																						'string' ==
																						typeof this
																							._state
																							.document
																							? fetch(
																									this
																										._state
																										.document,
																									{
																										credentials:
																											'same-origin'
																									}
																							  )
																									.then(
																										function (
																											t
																										) {
																											return t.arrayBuffer()
																										}
																									)
																									.finally(
																										function () {
																											;(n +=
																												xt),
																												e.progressCallback &&
																													e.progressCallback(
																														'loading',
																														n
																													)
																										}
																									)
																							: this
																									._state
																									.document),
																					(t.next = 7),
																					St(
																						this
																							.client,
																						this
																							._state
																					).finally(
																						function () {
																							;(n +=
																								xt),
																								e.progressCallback &&
																									e.progressCallback(
																										'loading',
																										n
																									)
																						}
																					)
																				)
																			case 7:
																				return (
																					(o =
																						t.sent),
																					(0,
																					m.kG)(
																						o
																					),
																					(i =
																						o.features),
																					(a =
																						o.signatureFeatureAvailability),
																					(s =
																						a ===
																							W
																								.H
																								.ELECTRONIC_SIGNATURES &&
																						i.includes(
																							yt
																								.q
																								.WEB_ANNOTATION_EDITING
																						) &&
																						this
																							._state
																							.forceLegacySignaturesFeature
																							? W
																									.H
																									.LEGACY_SIGNATURES
																							: a),
																					(this._state =
																						this._state
																							.set(
																								'features',
																								(0,
																								v.aV)(
																									i
																								)
																							)
																							.set(
																								'signatureFeatureAvailability',
																								s
																							)),
																					(mt =
																						this
																							._state
																							.licenseKey),
																					(t.next = 15),
																					r
																				)
																			case 15:
																				if (
																					((u =
																						t.sent),
																					(t.prev = 16),
																					!this
																						.destroyed)
																				) {
																					t.next = 23
																					break
																				}
																				return (
																					(t.next = 20),
																					new Promise(
																						function () {}
																					)
																				)
																			case 20:
																				;(c =
																					t.sent),
																					(t.next = 26)
																				break
																			case 23:
																				return (
																					(t.next = 25),
																					this.client.openDocument(
																						u,
																						e.password,
																						'number' ==
																							typeof e.initialPageIndex
																							? e.initialPageIndex
																							: 0
																					)
																				)
																			case 25:
																				c =
																					t.sent
																			case 26:
																				t.next = 33
																				break
																			case 28:
																				throw (
																					((t.prev = 28),
																					(t.t0 =
																						t.catch(
																							16
																						)),
																					'INVALID_PASSWORD' ===
																						t
																							.t0
																							.message &&
																						this
																							._state
																							.document instanceof
																							ArrayBuffer &&
																						(this._state =
																							this._state.set(
																								'document',
																								t
																									.t0
																									.callArgs[0]
																							)),
																					'IMAGE_DOCUMENTS_NOT_LICENSED' ===
																						t
																							.t0
																							.message &&
																						(t.t0.message =
																							'The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web.'),
																					t.t0)
																				)
																			case 33:
																				if (
																					!this
																						._XFDF
																				) {
																					t.next = 36
																					break
																				}
																				return (
																					(t.next = 36),
																					this.client.importXFDF(
																						this
																							._XFDF
																							.source,
																						this
																							._XFDF
																							.keepCurrentAnnotations
																					)
																				)
																			case 36:
																				if (
																					!(
																						this
																							._instantJSON &&
																						this
																							._instantJSON
																							.pdfId &&
																						c
																							.ID
																							.permanent
																					)
																				) {
																					t.next = 43
																					break
																				}
																				if (
																					((f =
																						this
																							._instantJSON
																							.pdfId),
																					(l =
																						c.ID),
																					f.permanent ===
																						l.permanent)
																				) {
																					t.next = 41
																					break
																				}
																				throw new m.p2(
																					'Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/'
																				)
																			case 41:
																				if (
																					f.changing ===
																					l.changing
																				) {
																					t.next = 43
																					break
																				}
																				throw new m.p2(
																					'Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/'
																				)
																			case 43:
																				if (
																					!this
																						._trustedCAsCallback
																				) {
																					t.next = 59
																					break
																				}
																				return (
																					(t.prev = 44),
																					(t.next = 47),
																					this._trustedCAsCallback()
																				)
																			case 47:
																				if (
																					((p =
																						t.sent),
																					Array.isArray(
																						p
																					))
																				) {
																					t.next = 50
																					break
																				}
																				throw new m.p2(
																					'Certificates response must be an array'
																				)
																			case 50:
																				if (
																					!p.some(
																						function (
																							t
																						) {
																							return (
																								!(
																									t instanceof
																									ArrayBuffer
																								) &&
																								'string' !=
																									typeof t
																							)
																						}
																					)
																				) {
																					t.next = 52
																					break
																				}
																				throw new m.p2(
																					'All certificates must be passed as ArrayBuffer (DER) or string (PEM)'
																				)
																			case 52:
																				return (
																					(t.next = 54),
																					this.client.loadCertificates(
																						p.map(
																							K.uF
																						)
																					)
																				)
																			case 54:
																				t.next = 59
																				break
																			case 56:
																				throw (
																					((t.prev = 56),
																					(t.t1 =
																						t.catch(
																							44
																						)),
																					new m.p2(
																						'Could not retrieve certificates for digital signatures validation: '.concat(
																							t
																								.t1
																								.message,
																							'.'
																						)
																					))
																				)
																			case 59:
																				return (
																					(this._state =
																						this._state.set(
																							'documentResponse',
																							c
																						)),
																					t.abrupt(
																						'return',
																						{
																							features:
																								this
																									._state
																									.features,
																							signatureFeatureAvailability:
																								this
																									._state
																									.signatureFeatureAvailability,
																							hasPassword:
																								!!e.password,
																							allowedTileScales:
																								'all'
																						}
																					)
																				)
																			case 61:
																			case 'end':
																				return t.stop()
																		}
																},
																t,
																this,
																[
																	[
																		16,
																		28
																	],
																	[
																		44,
																		56
																	]
																]
															)
														}
													)
												)),
											function () {
												return e.apply(
													this,
													arguments
												)
											})
									},
									{
										key: 'destroy',
										value: function () {
											;(this.destroyed =
												!0),
												(0,
												u.Z)(
													(0,
													l.Z)(
														n.prototype
													),
													'destroy',
													this
												).call(
													this
												)
										}
									}
								]
							),
							n
						)
					})(
						lt
					)
			var At = {
				current:
					void 0
			}
			function St(
				t,
				e
			) {
				var r
				At.current =
					At.current ||
					(e.customFonts
						? ((r =
								e.customFonts),
						  Promise.all(
								r.map(
									function (
										t
									) {
										return new Promise(
											function (
												e
											) {
												var r
												;(0,
												m.kG)(
													t.name
												),
													null ==
														t ||
														null ===
															(r =
																t.callback) ||
														void 0 ===
															r ||
														r
															.call(
																t,
																t.name
															)
															.then(
																function (
																	r
																) {
																	;(0,
																	m.kG)(
																		t.name
																	),
																		r instanceof
																		Blob
																			? e(
																					{
																						name: t.name,
																						data: r
																					}
																			  )
																			: ((0,
																			  m.vU)(
																					'Callback for retrieving font '
																						.concat(
																							t.name,
																							" didn't returned a Blob. It returned "
																						)
																						.concat(
																							(0,
																							n.Z)(
																								r
																							)
																						)
																			  ),
																			  e())
																}
															)
															.catch(
																function (
																	r
																) {
																	;(0,
																	m.vU)(
																		'Error returned by callback for retrieving font '
																			.concat(
																				t.name,
																				'. '
																			)
																			.concat(
																				r
																			)
																	),
																		e()
																}
															)
											}
										)
									}
								)
						  ).then(
								function (
									t
								) {
									return t.filter(
										Boolean
									)
								}
						  ))
						: void 0)
				var i =
					e.electronAppName ||
					(0,
					gt.$u)() ||
					window
						.location
						.origin
				return t
					.loadNativeModule(
						e.baseUrl,
						{
							mainThreadOrigin:
								i,
							disableWebAssembly:
								e.disableWebAssembly,
							disableWebAssemblyStreaming:
								e.disableWebAssemblyStreaming,
							enableAutomaticLinkExtraction:
								e.enableAutomaticLinkExtraction,
							overrideMemoryLimit:
								e.overrideMemoryLimit
						}
					)
					.then(
						(0,
						o.Z)(
							d().mark(
								function r() {
									return d().wrap(
										function (
											r
										) {
											for (;;)
												switch (
													(r.prev =
														r.next)
												) {
													case 0:
														if (
															!At.current
														) {
															r.next = 12
															break
														}
														return (
															(r.t1 =
																t),
															(r.t2 =
																e.baseUrl),
															(r.t3 =
																e.licenseKey),
															(r.t4 =
																i),
															(r.next = 7),
															At.current
														)
													case 7:
														;(r.t5 =
															r.sent),
															(r.t6 =
																{
																	mainThreadOrigin:
																		r.t4,
																	customFonts:
																		r.t5
																}),
															(r.t0 =
																r.t1.load.call(
																	r.t1,
																	r.t2,
																	r.t3,
																	r.t6
																)),
															(r.next = 13)
														break
													case 12:
														r.t0 =
															t.load(
																e.baseUrl,
																e.licenseKey,
																{
																	mainThreadOrigin:
																		i
																}
															)
													case 13:
														return r.abrupt(
															'return',
															r.t0
														)
													case 14:
													case 'end':
														return r.stop()
												}
										},
										r
									)
								}
							)
						)
					)
			}
		},
		42876: function (
			t,
			e,
			r
		) {
			t.exports =
				function () {
					return r(
						69855
					)(
						'/*!\n * PSPDFKit for Web 2022.4.3 (https://pspdfkit.com/web)\n *\n * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.\n *\n * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW\n * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.\n * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.\n * This notice may not be removed from this file.\n *\n * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/\n */!function(){var t={7757:function(t,e,r){t.exports=r(5666)},7932:function(){Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function t(){var e=isNaN(arguments[0])?1:Number(arguments[0]);return e?Array.prototype.reduce.call(this,(function(r,n){return Array.isArray(n)?r.push.apply(r,t.call(n,e-1)):r.push(n),r}),[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(t){return Array.prototype.map.apply(this,arguments).flat()},writable:!0})},3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can\'t set "+String(t)+" as a prototype");return t}},1223:function(t,e,r){var n=r(5112),o=r(30),i=r(8880),a=n("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,o(null)),t.exports=function(t){u[a][t]=!0}},1530:function(t,e,r){"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},5787:function(t){t.exports=function(t,e,r){if(!(t instanceof e))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},9670:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},260:function(t,e,r){"use strict";var n,o=r(9781),i=r(7854),a=r(111),u=r(6656),c=r(648),s=r(8880),f=r(1320),l=r(3070).f,p=r(9518),h=r(7674),d=r(5112),v=r(9711),y=i.DataView,g=y&&y.prototype,m=i.Int8Array,b=m&&m.prototype,w=i.Uint8ClampedArray,x=w&&w.prototype,S=m&&p(m),A=b&&p(b),k=Object.prototype,O=k.isPrototypeOf,E=d("toStringTag"),_=v("TYPED_ARRAY_TAG"),I=!(!i.ArrayBuffer||!y),j=I&&!!h&&"Opera"!==c(i.opera),F=!1,T={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},P=function(t){return a(t)&&u(T,c(t))};for(n in T)i[n]||(j=!1);if((!j||"function"!=typeof S||S===Function.prototype)&&(S=function(){throw TypeError("Incorrect invocation")},j))for(n in T)i[n]&&h(i[n],S);if((!j||!A||A===k)&&(A=S.prototype,j))for(n in T)i[n]&&h(i[n].prototype,A);if(j&&p(x)!==A&&h(x,A),o&&!u(A,E))for(n in F=!0,l(A,E,{get:function(){return a(this)?this[_]:void 0}}),T)i[n]&&s(i[n],_,n);I&&h&&p(g)!==k&&h(g,k),t.exports={NATIVE_ARRAY_BUFFER:I,NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:F&&_,aTypedArray:function(t){if(P(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(h){if(O.call(S,t))return t}else for(var e in T)if(u(T,n)){var r=i[e];if(r&&(t===r||O.call(r,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r){if(o){if(r)for(var n in T){var a=i[n];a&&u(a.prototype,t)&&delete a.prototype[t]}A[t]&&!r||f(A,t,r?e:j&&b[t]||e)}},exportTypedArrayStaticMethod:function(t,e,r){var n,a;if(o){if(h){if(r)for(n in T)(a=i[n])&&u(a,t)&&delete a[t];if(S[t]&&!r)return;try{return f(S,t,r?e:j&&m[t]||e)}catch(t){}}for(n in T)!(a=i[n])||a[t]&&!r||f(a,t,e)}},isView:function(t){var e=c(t);return"DataView"===e||u(T,e)},isTypedArray:P,TypedArray:S,TypedArrayPrototype:A}},3331:function(t,e,r){"use strict";var n=r(7854),o=r(9781),i=r(260).NATIVE_ARRAY_BUFFER,a=r(8880),u=r(2248),c=r(7293),s=r(5787),f=r(9958),l=r(7466),p=r(7067),h=r(1179),d=r(8006).f,v=r(3070).f,y=r(1285),g=r(8003),m=r(9909),b=m.get,w=m.set,x="ArrayBuffer",S="DataView",A="Wrong index",k=n.ArrayBuffer,O=k,E=n.DataView,_=n.RangeError,I=h.pack,j=h.unpack,F=function(t){return[255&t]},T=function(t){return[255&t,t>>8&255]},P=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},R=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},M=function(t){return I(t,23,4)},D=function(t){return I(t,52,8)},L=function(t,e){v(t.prototype,e,{get:function(){return b(this)[e]}})},N=function(t,e,r,n){var o=p(r),i=b(t);if(o+e>i.byteLength)throw _(A);var a=b(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+e);return n?c:c.reverse()},B=function(t,e,r,n,o,i){var a=p(r),u=b(t);if(a+e>u.byteLength)throw _(A);for(var c=b(u.buffer).bytes,s=a+u.byteOffset,f=n(+o),l=0;l<e;l++)c[s+l]=f[i?l:e-l-1]};if(i){if(!c((function(){k(1)}))||!c((function(){new k(-1)}))||c((function(){return new k,new k(1.5),new k(NaN),k.name!=x}))){for(var U,C=(O=function(t){return s(this,O),new k(p(t))}).prototype=k.prototype,J=d(k),W=0;J.length>W;)(U=J[W++])in O||a(O,U,k[U]);C.constructor=O}var V=new E(new O(2)),q=E.prototype.setInt8;V.setInt8(0,2147483648),V.setInt8(1,2147483649),!V.getInt8(0)&&V.getInt8(1)||u(E.prototype,{setInt8:function(t,e){q.call(this,t,e<<24>>24)},setUint8:function(t,e){q.call(this,t,e<<24>>24)}},{unsafe:!0})}else O=function(t){s(this,O,x);var e=p(t);w(this,{bytes:y.call(new Array(e),0),byteLength:e}),o||(this.byteLength=e)},E=function(t,e,r){s(this,E,S),s(t,O,S);var n=b(t).byteLength,i=f(e);if(i<0||i>n)throw _("Wrong offset");if(i+(r=void 0===r?n-i:l(r))>n)throw _("Wrong length");w(this,{buffer:t,byteLength:r,byteOffset:i}),o||(this.buffer=t,this.byteLength=r,this.byteOffset=i)},o&&(L(O,"byteLength"),L(E,"buffer"),L(E,"byteLength"),L(E,"byteOffset")),u(E.prototype,{getInt8:function(t){return N(this,1,t)[0]<<24>>24},getUint8:function(t){return N(this,1,t)[0]},getInt16:function(t){var e=N(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=N(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return R(N(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return R(N(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return j(N(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return j(N(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){B(this,1,t,F,e)},setUint8:function(t,e){B(this,1,t,F,e)},setInt16:function(t,e){B(this,2,t,T,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){B(this,2,t,T,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){B(this,4,t,P,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){B(this,4,t,P,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){B(this,4,t,M,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){B(this,8,t,D,e,arguments.length>2?arguments[2]:void 0)}});g(O,x),g(E,S),t.exports={ArrayBuffer:O,DataView:E}},1048:function(t,e,r){"use strict";var n=r(7908),o=r(1400),i=r(7466),a=Math.min;t.exports=[].copyWithin||function(t,e){var r=n(this),u=i(r.length),c=o(t,u),s=o(e,u),f=arguments.length>2?arguments[2]:void 0,l=a((void 0===f?u:o(f,u))-s,u-c),p=1;for(s<c&&c<s+l&&(p=-1,s+=l-1,c+=l-1);l-- >0;)s in r?r[c]=r[s]:delete r[c],c+=p,s+=p;return r}},1285:function(t,e,r){"use strict";var n=r(7908),o=r(1400),i=r(7466);t.exports=function(t){for(var e=n(this),r=i(e.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,r),c=a>2?arguments[2]:void 0,s=void 0===c?r:o(c,r);s>u;)e[u++]=t;return e}},8533:function(t,e,r){"use strict";var n=r(2092).forEach,o=r(6637);t.exports=o("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},8457:function(t,e,r){"use strict";var n=r(244),o=r(7908),i=r(3411),a=r(7659),u=r(7466),c=r(6135),s=r(1246);t.exports=function(t){var e,r,f,l,p,h=o(t),d="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,g=void 0!==y,m=0,b=s(h);if(g&&(y=n(y,v>2?arguments[2]:void 0,2)),null==b||d==Array&&a(b))for(r=new d(e=u(h.length));e>m;m++)c(r,m,g?y(h[m],m):h[m]);else for(p=(l=b.call(h)).next,r=new d;!(f=p.call(l)).done;m++)c(r,m,g?i(l,y,[f.value,m],!0):f.value);return r.length=m,r}},1318:function(t,e,r){var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var u,c=n(e),s=o(c.length),f=i(a,s);if(t&&r!=r){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,r){var n=r(244),o=r(8361),i=r(7908),a=r(7466),u=r(5417),c=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(h,d,v,y){for(var g,m,b=i(h),w=o(b),x=n(d,v,3),S=a(w.length),A=0,k=y||u,O=e?k(h,S):r?k(h,0):void 0;S>A;A++)if((p||A in w)&&(m=x(g=w[A],A,b),t))if(e)O[A]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:c.call(O,g)}else if(f)return!1;return l?-1:s||f?f:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},6583:function(t,e,r){"use strict";var n=r(5656),o=r(9958),i=r(7466),a=r(6637),u=Math.min,c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0,f=a("lastIndexOf");t.exports=s||f?function(t){if(s)return c.apply(this,arguments)||0;var e=n(this),r=i(e.length),a=r-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:c},1194:function(t,e,r){var n=r(7293),o=r(5112),i=r(2101),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3671:function(t,e,r){var n=r(3099),o=r(7908),i=r(8361),a=r(7466),u=function(t){return function(e,r,u,c){n(r);var s=o(e),f=i(s),l=a(s.length),p=t?l-1:0,h=t?-1:1;if(u<2)for(;;){if(p in f){c=f[p],p+=h;break}if(p+=h,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=h)p in f&&(c=r(c,f[p],p,s));return c}};t.exports={left:u(!1),right:u(!0)}},5417:function(t,e,r){var n=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},244:function(t,e,r){var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},3411:function(t,e,r){var n=r(9670);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},7072:function(t,e,r){var n=r(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,r){var n=r(1694),o=r(4326),i=r(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},5631:function(t,e,r){"use strict";var n=r(3070).f,o=r(30),i=r(2248),a=r(244),u=r(5787),c=r(408),s=r(654),f=r(6340),l=r(9781),p=r(2423).fastKey,h=r(9909),d=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,r,s){var f=t((function(t,n){u(t,f,e),d(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=n&&c(n,t[s],t,r)})),h=v(e),y=function(t,e,r){var n,o,i=h(t),a=g(t,e);return a?a.value=r:(i.last=a={index:o=p(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},g=function(t,e){var r,n=h(t),o=p(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(f.prototype,{clear:function(){for(var t=h(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=this,r=h(e),n=g(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first==n&&(r.first=o),r.last==n&&(r.last=i),l?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=h(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!g(this,t)}}),i(f.prototype,r?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return y(this,0===t?0:t,e)}}:{add:function(t){return y(this,t=0===t?0:t,t)}}),l&&n(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,r){var n=e+" Iterator",o=v(e),i=v(n);s(t,e,(function(t,e){d(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),f(e)}}},9320:function(t,e,r){"use strict";var n=r(2248),o=r(2423).getWeakData,i=r(9670),a=r(111),u=r(5787),c=r(408),s=r(2092),f=r(6656),l=r(9909),p=l.set,h=l.getterFor,d=s.find,v=s.findIndex,y=0,g=function(t){return t.frozen||(t.frozen=new m)},m=function(){this.entries=[]},b=function(t,e){return d(t.entries,(function(t){return t[0]===e}))};m.prototype={get:function(t){var e=b(this,t);if(e)return e[1]},has:function(t){return!!b(this,t)},set:function(t,e){var r=b(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=v(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,s){var l=t((function(t,n){u(t,l,e),p(t,{type:e,id:y++,frozen:void 0}),null!=n&&c(n,t[s],t,r)})),d=h(e),v=function(t,e,r){var n=d(t),a=o(i(e),!0);return!0===a?g(n).set(e,r):a[n.id]=r,t};return n(l.prototype,{delete:function(t){var e=d(this);if(!a(t))return!1;var r=o(t);return!0===r?g(e).delete(t):r&&f(r,e.id)&&delete r[e.id]},has:function(t){var e=d(this);if(!a(t))return!1;var r=o(t);return!0===r?g(e).has(t):r&&f(r,e.id)}}),n(l.prototype,r?{get:function(t){var e=d(this);if(a(t)){var r=o(t);return!0===r?g(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return v(this,t,e)}}:{add:function(t){return v(this,t,!0)}}),l}}},7710:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(4705),a=r(1320),u=r(2423),c=r(408),s=r(5787),f=r(111),l=r(7293),p=r(7072),h=r(8003),d=r(9587);t.exports=function(t,e,r){var v=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),g=v?"set":"add",m=o[t],b=m&&m.prototype,w=m,x={},S=function(t){var e=b[t];a(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof m||!(y||b.forEach&&!l((function(){(new m).entries().next()})))))w=r.getConstructor(e,t,v,g),u.REQUIRED=!0;else if(i(t,!0)){var A=new w,k=A[g](y?{}:-0,1)!=A,O=l((function(){A.has(1)})),E=p((function(t){new m(t)})),_=!y&&l((function(){for(var t=new m,e=5;e--;)t[g](e,e);return!t.has(-0)}));E||((w=e((function(e,r){s(e,w,t);var n=d(new m,e,w);return null!=r&&c(r,n[g],n,v),n}))).prototype=b,b.constructor=w),(O||_)&&(S("delete"),S("has"),v&&S("get")),(_||k)&&S(g),y&&b.clear&&delete b.clear}return x[t]=w,n({global:!0,forced:w!=m},x),h(w,t),y||r.setStrong(w,t,v),w}},9920:function(t,e,r){var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),u=a.f,c=i.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||u(t,f,c(e,f))}}},4964:function(t,e,r){var n=r(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},8544:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4230:function(t,e,r){var n=r(4488),o=/"/g;t.exports=function(t,e,r,i){var a=String(n(t)),u="<"+e;return""!==r&&(u+=" "+r+\'="\'+String(i).replace(o,"&quot;")+\'"\'),u+">"+a+"</"+e+">"}},4994:function(t,e,r){"use strict";var n=r(3383).IteratorPrototype,o=r(30),i=r(9114),a=r(8003),u=r(7497),c=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),a(t,s,!1,!0),u[s]=c,t}},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,r){"use strict";var n=r(7593),o=r(3070),i=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},8709:function(t,e,r){"use strict";var n=r(9670),o=r(7593);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},654:function(t,e,r){"use strict";var n=r(2109),o=r(4994),i=r(9518),a=r(7674),u=r(8003),c=r(8880),s=r(1320),f=r(5112),l=r(1913),p=r(7497),h=r(3383),d=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,y=f("iterator"),g="keys",m="values",b="entries",w=function(){return this};t.exports=function(t,e,r,f,h,x,S){o(r,e,f);var A,k,O,E=function(t){if(t===h&&T)return T;if(!v&&t in j)return j[t];switch(t){case g:case m:case b:return function(){return new r(this,t)}}return function(){return new r(this)}},_=e+" Iterator",I=!1,j=t.prototype,F=j[y]||j["@@iterator"]||h&&j[h],T=!v&&F||E(h),P="Array"==e&&j.entries||F;if(P&&(A=i(P.call(new t)),d!==Object.prototype&&A.next&&(l||i(A)===d||(a?a(A,d):"function"!=typeof A[y]&&c(A,y,w)),u(A,_,!0,!0),l&&(p[_]=w))),h==m&&F&&F.name!==m&&(I=!0,T=function(){return F.call(this)}),l&&!S||j[y]===T||c(j,y,T),p[e]=T,h)if(k={values:E(m),keys:x?T:E(g),entries:E(b)},S)for(O in k)(v||I||!(O in j))&&s(j,O,k[O]);else n({target:e,proto:!0,forced:v||I},k);return k}},7235:function(t,e,r){var n=r(857),o=r(6656),i=r(6805),a=r(3070).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),u=r(3505),c=r(9920),s=r(4705);t.exports=function(t,e){var r,f,l,p,h,d=t.target,v=t.global,y=t.stat;if(r=v?n:y?n[d]||u(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(r,f))&&h.value:r[f],!s(v?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(r,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:function(t,e,r){"use strict";var n=r(8880),o=r(1320),i=r(7293),a=r(5112),u=r(2261),c=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,l){var p=a(t),h=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!h||!d||"replace"===t&&!s||"split"===t&&!f){var v=/./[p],y=r(p,""[t],(function(t,e,r,n,o){return e.exec===u?h&&!o?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),g=y[0],m=y[1];o(String.prototype,t,g),o(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)}),l&&n(RegExp.prototype[p],"sham",!0)}}},6790:function(t,e,r){"use strict";var n=r(3157),o=r(7466),i=r(244),a=function(t,e,r,u,c,s,f,l){for(var p,h=c,d=0,v=!!f&&i(f,l,3);d<u;){if(d in r){if(p=v?v(r[d],d,e):r[d],s>0&&n(p))h=a(t,e,p,o(p.length),h,s-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=p}h++}d++}return h};t.exports=a},1301:function(t,e,r){"use strict";var n=r(1913),o=r(7854),i=r(7293);t.exports=n||!i((function(){var t=Math.random();__defineSetter__.call(null,t,(function(){})),delete o[t]}))},2098:function(t,e,r){var n=r(7293);t.exports=function(t){return n((function(){var e=""[t](\'"\');return e!==e.toLowerCase()||e.split(\'"\').length>3}))}},8711:function(t,e,r){var n=r(7293),o=r(1361);t.exports=function(t){return n((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},6677:function(t,e,r){var n=r(7293);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},7065:function(t,e,r){"use strict";var n=r(3099),o=r(111),i=[].slice,a={},u=function(t,e,r){if(!(e in a)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";a[e]=Function("C,a","return new C("+n.join(",")+")")}return a[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=i.call(arguments,1),a=function(){var n=r.concat(i.call(arguments));return this instanceof a?u(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(a.prototype=e.prototype),a}},5005:function(t,e,r){var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},1246:function(t,e,r){var n=r(648),o=r(7497),i=r(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},8554:function(t,e,r){var n=r(9670),o=r(1246);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||Function("return this")()},6656:function(t){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:function(t){t.exports={}},842:function(t,e,r){var n=r(7854);t.exports=function(t,e){var r=n.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,e))}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},1179:function(t){var e=1/0,r=Math.abs,n=Math.pow,o=Math.floor,i=Math.log,a=Math.LN2;t.exports={pack:function(t,u,c){var s,f,l,p=new Array(c),h=8*c-u-1,d=(1<<h)-1,v=d>>1,y=23===u?n(2,-24)-n(2,-77):0,g=t<0||0===t&&1/t<0?1:0,m=0;for((t=r(t))!=t||t===e?(f=t!=t?1:0,s=d):(s=o(i(t)/a),t*(l=n(2,-s))<1&&(s--,l*=2),(t+=s+v>=1?y/l:y*n(2,1-v))*l>=2&&(s++,l/=2),s+v>=d?(f=0,s=d):s+v>=1?(f=(t*l-1)*n(2,u),s+=v):(f=t*n(2,v-1)*n(2,u),s=0));u>=8;p[m++]=255&f,f/=256,u-=8);for(s=s<<u|f,h+=u;h>0;p[m++]=255&s,s/=256,h-=8);return p[--m]|=128*g,p},unpack:function(t,r){var o,i=t.length,a=8*i-r-1,u=(1<<a)-1,c=u>>1,s=a-7,f=i-1,l=t[f--],p=127&l;for(l>>=7;s>0;p=256*p+t[f],f--,s-=8);for(o=p&(1<<-s)-1,p>>=-s,s+=r;s>0;o=256*o+t[f],f--,s-=8);if(0===p)p=1-c;else{if(p===u)return o?NaN:l?-1/0:e;o+=n(2,r),p-=c}return(l?-1:1)*o*n(2,p-r)}}},8361:function(t,e,r){var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9587:function(t,e,r){var n=r(111),o=r(7674);t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},2788:function(t,e,r){var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},2423:function(t,e,r){var n=r(3501),o=r(111),i=r(6656),a=r(3070).f,u=r(9711),c=r(6677),s=u("meta"),f=0,l=Object.isExtensible||function(){return!0},p=function(t){a(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},h=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!e)return"E";p(t)}return t[s].objectID},getWeakData:function(t,e){if(!i(t,s)){if(!l(t))return!0;if(!e)return!1;p(t)}return t[s].weakData},onFreeze:function(t){return c&&h.REQUIRED&&l(t)&&!i(t,s)&&p(t),t}};n[s]=!0},9909:function(t,e,r){var n,o,i,a=r(8536),u=r(7854),c=r(111),s=r(8880),f=r(6656),l=r(6200),p=r(3501),h=u.WeakMap;if(a){var d=new h,v=d.get,y=d.has,g=d.set;n=function(t,e){return g.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var m=l("state");p[m]=!0,n=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},7659:function(t,e,r){var n=r(5112),o=r(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),o=/#|\\.prototype\\./,i=function(t,e){var r=u[a(t)];return r==s||r!=c&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},8730:function(t,e,r){var n=r(111),o=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&o(t)===t}},9747:function(t,e,r){var n=r(227);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},7850:function(t,e,r){var n=r(111),o=r(4326),i=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},408:function(t,e,r){var n=r(9670),o=r(7659),i=r(7466),a=r(244),u=r(1246),c=r(3411),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,r,f,l){var p,h,d,v,y,g,m,b=a(e,r,f?2:1);if(l)p=t;else{if("function"!=typeof(h=u(t)))throw TypeError("Target is not iterable");if(o(h)){for(d=0,v=i(t.length);v>d;d++)if((y=f?b(n(m=t[d])[0],m[1]):b(t[d]))&&y instanceof s)return y;return new s(!1)}p=h.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=c(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},3383:function(t,e,r){"use strict";var n,o,i,a=r(9518),u=r(8880),c=r(6656),s=r(5112),f=r(1913),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),f||c(n,l)||u(n,l,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},7497:function(t){t.exports={}},6736:function(t){var e=Math.expm1,r=Math.exp;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:r(t)-1}:e},6130:function(t,e,r){var n=r(4310),o=Math.abs,i=Math.pow,a=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),s=i(2,-126);t.exports=Math.fround||function(t){var e,r,i=o(t),f=n(t);return i<s?f*(i/s/u+1/a-1/a)*s*u:(r=(e=(1+u/a)*i)-(e-i))>c||r!=r?f*(1/0):f*r}},6513:function(t){var e=Math.log;t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:e(1+t)}},4310:function(t){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},5948:function(t,e,r){var n,o,i,a,u,c,s,f,l=r(7854),p=r(1236).f,h=r(4326),d=r(261).set,v=r(9747),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==h(g),w=p(l,"queueMicrotask"),x=w&&w.value;x||(n=function(){var t,e;for(b&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},b?a=function(){g.nextTick(n)}:y&&!v?(u=!0,c=document.createTextNode(""),new y(n).observe(c,{characterData:!0}),a=function(){c.data=u=!u}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,a=function(){f.call(s,n)}):a=function(){d.call(l,n)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},3366:function(t,e,r){var n=r(7854);t.exports=n.Promise},133:function(t,e,r){var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},590:function(t,e,r){var n=r(7293),o=r(5112),i=r(1913),a=o("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),i&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},8536:function(t,e,r){var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:function(t,e,r){"use strict";var n=r(3099),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},3929:function(t,e,r){var n=r(7850);t.exports=function(t){if(n(t))throw TypeError("The method doesn\'t accept regular expressions");return t}},7023:function(t,e,r){var n=r(7854).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&n(t)}},1574:function(t,e,r){"use strict";var n=r(9781),o=r(7293),i=r(1956),a=r(5181),u=r(5296),c=r(7908),s=r(8361),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(n&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return t[r]=7,o.split("").forEach((function(t){e[t]=t})),7!=f({},t)[r]||i(f({},e)).join("")!=o}))?function(t,e){for(var r=c(t),o=arguments.length,f=1,l=a.f,p=u.f;o>f;)for(var h,d=s(arguments[f++]),v=l?i(d).concat(l(d)):i(d),y=v.length,g=0;y>g;)h=v[g++],n&&!p.call(d,h)||(r[h]=d[h]);return r}:f},30:function(t,e,r){var n=r(9670),o=r(6048),i=r(748),a=r(3501),u=r(490),c=r(317),s=r(6200)("IE_PROTO"),f=function(){},l=function(){var t,e=c("iframe"),r=i.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,e){var r;return null!==t?(f.prototype=n(t),r=new f,f.prototype=null,r[s]=t):r=l(),void 0===e?r:o(r,e)},a[s]=!0},6048:function(t,e,r){var n=r(9781),o=r(3070),i=r(9670),a=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),u=n.length,c=0;u>c;)o.f(t,r=n[c++],e[r]);return t}},3070:function(t,e,r){var n=r(9781),o=r(4664),i=r(9670),a=r(7593),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(5296),i=r(9114),a=r(5656),u=r(7593),c=r(6656),s=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},1156:function(t,e,r){var n=r(5656),o=r(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,r){var n=r(6656),o=r(7908),i=r(6200),a=r(8544),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:function(t,e,r){var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,u=o(t),c=0,s=[];for(r in u)!n(a,r)&&n(u,r)&&s.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(s,r)||s.push(r));return s}},1956:function(t,e,r){var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:function(t,e,r){var n=r(9670),o=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},4699:function(t,e,r){var n=r(9781),o=r(1956),i=r(5656),a=r(5296).f,u=function(t){return function(e){for(var r,u=i(e),c=o(u),s=c.length,f=0,l=[];s>f;)r=c[f++],n&&!a.call(u,r)||l.push(t?[r,u[r]]:u[r]);return l}};t.exports={entries:u(!0),values:u(!1)}},288:function(t,e,r){"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},3887:function(t,e,r){var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},3677:function(t,e,r){var n=r(7854),o=r(3111).trim,i=r(1361),a=n.parseFloat,u=1/a(i+"-0")!=-1/0;t.exports=u?function(t){var e=o(String(t)),r=a(e);return 0===r&&"-"==e.charAt(0)?-0:r}:a},8620:function(t,e,r){var n=r(7854),o=r(3111).trim,i=r(1361),a=n.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function(t,e){var r=o(String(t));return a(r,e>>>0||(u.test(r)?16:10))}:a},857:function(t,e,r){var n=r(7854);t.exports=n},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,e,r){var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},3611:function(t){"use strict";var e=2147483647,r=/[^\\0-\\u007E]/,n=/[.\\u3002\\uFF0E\\uFF61]/g,o="Overflow: input needs wider integers to process",i=Math.floor,a=String.fromCharCode,u=function(t){return t+22+75*(t<26)},c=function(t,e,r){var n=0;for(t=r?i(t/700):t>>1,t+=i(t/e);t>455;n+=36)t=i(t/35);return i(n+36*t/(t+38))},s=function(t){var r=[];t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=t.charCodeAt(r++);56320==(64512&i)?e.push(((1023&o)<<10)+(1023&i)+65536):(e.push(o),r--)}else e.push(o)}return e}(t);var n,s,f=t.length,l=128,p=0,h=72;for(n=0;n<t.length;n++)(s=t[n])<128&&r.push(a(s));var d=r.length,v=d;for(d&&r.push("-");v<f;){var y=e;for(n=0;n<t.length;n++)(s=t[n])>=l&&s<y&&(y=s);var g=v+1;if(y-l>i((e-p)/g))throw RangeError(o);for(p+=(y-l)*g,l=y,n=0;n<t.length;n++){if((s=t[n])<l&&++p>e)throw RangeError(o);if(s==l){for(var m=p,b=36;;b+=36){var w=b<=h?1:b>=h+26?26:b-h;if(m<w)break;var x=m-w,S=36-w;r.push(a(u(w+x%S))),m=i(x/S)}r.push(a(u(m))),h=c(p,g,v==d),p=0,++v}}++p,++l}return r.join("")};t.exports=function(t){var e,o,i=[],a=t.toLowerCase().replace(n,".").split(".");for(e=0;e<a.length;e++)o=a[e],i.push(r.test(o)?"xn--"+s(o):o);return i.join(".")}},2248:function(t,e,r){var n=r(1320);t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},1320:function(t,e,r){var n=r(7854),o=r(8880),i=r(6656),a=r(3505),u=r(2788),c=r(9909),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,r,u){var c=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),f(r).source=l.join("string"==typeof e?e:"")),t!==n?(c?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=r:o(t,e,r)):s?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},7651:function(t,e,r){var n=r(4326),o=r(2261);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var i=r.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:function(t,e,r){"use strict";var n,o,i=r(7066),a=RegExp.prototype.exec,u=String.prototype.replace,c=a,s=(n=/a/,o=/b*/g,a.call(n,"a"),a.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(c=function(t){var e,r,n,o,c=this;return f&&(r=new RegExp("^"+c.source+"$(?!\\\\s)",i.call(c))),s&&(e=c.lastIndex),n=a.call(c,t),s&&n&&(c.lastIndex=c.global?n.index+n[0].length:e),f&&n&&n.length>1&&u.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=c},7066:function(t,e,r){"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can\'t call method on "+t);return t}},1150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},3505:function(t,e,r){var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6340:function(t,e,r){"use strict";var n=r(5005),o=r(3070),i=r(5112),a=r(9781),u=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[u]&&r(e,u,{configurable:!0,get:function(){return this}})}},8003:function(t,e,r){var n=r(3070).f,o=r(6656),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.5.0",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},6637:function(t,e,r){"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!r||!n((function(){r.call(null,e||function(){throw 1},1)}))}},6707:function(t,e,r){var n=r(9670),o=r(3099),i=r(5112)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},8710:function(t,e,r){var n=r(9958),o=r(4488),i=function(t){return function(e,r){var i,a,u=String(o(e)),c=n(r),s=u.length;return c<0||c>=s?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===s||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},6650:function(t,e,r){var n=r(7466),o=r(8415),i=r(4488),a=Math.ceil,u=function(t){return function(e,r,u){var c,s,f=String(i(e)),l=f.length,p=void 0===u?" ":String(u),h=n(r);return h<=l||""==p?f:(c=h-l,(s=o.call(p,a(c/p.length))).length>c&&(s=s.slice(0,c)),t?f+s:s+f)}};t.exports={start:u(!1),end:u(!0)}},8415:function(t,e,r){"use strict";var n=r(9958),o=r(4488);t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},3111:function(t,e,r){var n=r(4488),o="["+r(1361)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},261:function(t,e,r){var n,o,i,a=r(7854),u=r(7293),c=r(4326),s=r(244),f=r(490),l=r(317),p=r(9747),h=a.location,d=a.setImmediate,v=a.clearImmediate,y=a.process,g=a.MessageChannel,m=a.Dispatch,b=0,w={},x="onreadystatechange",S=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},A=function(t){return function(){S(t)}},k=function(t){S(t.data)},O=function(t){a.postMessage(t+"",h.protocol+"//"+h.host)};d&&v||(d=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return w[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},n(b),b},v=function(t){delete w[t]},"process"==c(y)?n=function(t){y.nextTick(A(t))}:m&&m.now?n=function(t){m.now(A(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=k,n=s(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(O)?n=x in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),S(t)}}:function(t){setTimeout(A(t),0)}:(n=O,a.addEventListener("message",k,!1))),t.exports={set:d,clear:v}},863:function(t,e,r){var n=r(4326);t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},1400:function(t,e,r){var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},7067:function(t,e,r){var n=r(9958),o=r(7466);t.exports=function(t){if(void 0===t)return 0;var e=n(t),r=o(e);if(e!==r)throw RangeError("Wrong length or index");return r}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:function(t,e,r){var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488);t.exports=function(t){return Object(n(t))}},4590:function(t,e,r){var n=r(3002);t.exports=function(t,e){var r=n(t);if(r%e)throw RangeError("Wrong offset");return r}},3002:function(t,e,r){var n=r(9958);t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can\'t be less than 0");return e}},7593:function(t,e,r){var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can\'t convert object to primitive value")}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9843:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(9781),a=r(6500),u=r(260),c=r(3331),s=r(5787),f=r(9114),l=r(8880),p=r(7466),h=r(7067),d=r(4590),v=r(7593),y=r(6656),g=r(648),m=r(111),b=r(30),w=r(7674),x=r(8006).f,S=r(7321),A=r(2092).forEach,k=r(6340),O=r(3070),E=r(1236),_=r(9909),I=r(9587),j=_.get,F=_.set,T=O.f,P=E.f,R=Math.round,M=o.RangeError,D=c.ArrayBuffer,L=c.DataView,N=u.NATIVE_ARRAY_BUFFER_VIEWS,B=u.TYPED_ARRAY_TAG,U=u.TypedArray,C=u.TypedArrayPrototype,J=u.aTypedArrayConstructor,W=u.isTypedArray,V="BYTES_PER_ELEMENT",q="Wrong length",z=function(t,e){for(var r=0,n=e.length,o=new(J(t))(n);n>r;)o[r]=e[r++];return o},G=function(t,e){T(t,e,{get:function(){return j(this)[e]}})},H=function(t){var e;return t instanceof D||"ArrayBuffer"==(e=g(t))||"SharedArrayBuffer"==e},Y=function(t,e){return W(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},X=function(t,e){return Y(t,e=v(e,!0))?f(2,t[e]):P(t,e)},$=function(t,e,r){return!(Y(t,e=v(e,!0))&&m(r)&&y(r,"value"))||y(r,"get")||y(r,"set")||r.configurable||y(r,"writable")&&!r.writable||y(r,"enumerable")&&!r.enumerable?T(t,e,r):(t[e]=r.value,t)};i?(N||(E.f=X,O.f=$,G(C,"buffer"),G(C,"byteOffset"),G(C,"byteLength"),G(C,"length")),n({target:"Object",stat:!0,forced:!N},{getOwnPropertyDescriptor:X,defineProperty:$}),t.exports=function(t,e,r){var i=t.match(/\\d+$/)[0]/8,u=t+(r?"Clamped":"")+"Array",c="get"+t,f="set"+t,v=o[u],y=v,g=y&&y.prototype,O={},E=function(t,e){T(t,e,{get:function(){return function(t,e){var r=j(t);return r.view[c](e*i+r.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,n){var o=j(t);r&&(n=(n=R(n))<0?0:n>255?255:255&n),o.view[f](e*i+o.byteOffset,n,!0)}(this,e,t)},enumerable:!0})};N?a&&(y=e((function(t,e,r,n){return s(t,y,u),I(m(e)?H(e)?void 0!==n?new v(e,d(r,i),n):void 0!==r?new v(e,d(r,i)):new v(e):W(e)?z(y,e):S.call(y,e):new v(h(e)),t,y)})),w&&w(y,U),A(x(v),(function(t){t in y||l(y,t,v[t])})),y.prototype=g):(y=e((function(t,e,r,n){s(t,y,u);var o,a,c,f=0,l=0;if(m(e)){if(!H(e))return W(e)?z(y,e):S.call(y,e);o=e,l=d(r,i);var v=e.byteLength;if(void 0===n){if(v%i)throw M(q);if((a=v-l)<0)throw M(q)}else if((a=p(n)*i)+l>v)throw M(q);c=a/i}else c=h(e),o=new D(a=c*i);for(F(t,{buffer:o,byteOffset:l,byteLength:a,length:c,view:new L(o)});f<c;)E(t,f++)})),w&&w(y,U),g=y.prototype=b(C)),g.constructor!==y&&l(g,"constructor",y),B&&l(g,B,u),O[u]=y,n({global:!0,forced:y!=v,sham:!N},O),V in y||l(y,V,i),V in g||l(g,V,i),k(u)}):t.exports=function(){}},7321:function(t,e,r){var n=r(7908),o=r(7466),i=r(1246),a=r(7659),u=r(244),c=r(260).aTypedArrayConstructor;t.exports=function(t){var e,r,s,f,l,p,h=n(t),d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,g=i(h);if(null!=g&&!a(g))for(p=(l=g.call(h)).next,h=[];!(f=p.call(l)).done;)h.push(f.value);for(y&&d>2&&(v=u(v,arguments[2],2)),r=o(h.length),s=new(c(this))(r),e=0;r>e;e++)s[e]=y?v(h[e],e):h[e];return s}},6500:function(t,e,r){var n=r(7854),o=r(7293),i=r(7072),a=r(260).NATIVE_ARRAY_BUFFER_VIEWS,u=n.ArrayBuffer,c=n.Int8Array;t.exports=!a||!o((function(){c(1)}))||!o((function(){new c(-1)}))||!i((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||o((function(){return 1!==new c(new u(2),1,void 0).length}))},9711:function(t){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol()},227:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},2101:function(t,e,r){var n,o,i=r(7854),a=r(227),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\\/(\\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\\/(\\d+)/))&&(o=n[1]),t.exports=o&&+o},7428:function(t,e,r){var n=r(227);t.exports=/Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(n)},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(6656),a=r(9711),u=r(133),c=r(3307),s=o("wks"),f=n.Symbol,l=c?f:a;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},1361:function(t){t.exports="\\t\\n\\v\\f\\r                　\\u2028\\u2029\\ufeff"},6805:function(t,e,r){var n=r(5112);e.f=n},8264:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(3331),a=r(6340),u="ArrayBuffer",c=i.ArrayBuffer;n({global:!0,forced:o.ArrayBuffer!==c},{ArrayBuffer:c}),a(u)},2222:function(t,e,r){"use strict";var n=r(2109),o=r(7293),i=r(3157),a=r(111),u=r(7908),c=r(7466),s=r(6135),f=r(5417),l=r(1194),p=r(5112),h=r(2101),d=p("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",g=h>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),m=l("concat"),b=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!g||!m},{concat:function(t){var e,r,n,o,i,a=u(this),l=f(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(b(i=-1===e?a:arguments[e])){if(p+(o=c(i.length))>v)throw TypeError(y);for(r=0;r<o;r++,p++)r in i&&s(l,p,i[r])}else{if(p>=v)throw TypeError(y);s(l,p++,i)}return l.length=p,l}})},545:function(t,e,r){var n=r(2109),o=r(1048),i=r(1223);n({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},3290:function(t,e,r){var n=r(2109),o=r(1285),i=r(1223);n({target:"Array",proto:!0},{fill:o}),i("fill")},7327:function(t,e,r){"use strict";var n=r(2109),o=r(2092).filter,i=r(7293),a=r(1194)("filter"),u=a&&!i((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},4553:function(t,e,r){"use strict";var n=r(2109),o=r(2092).findIndex,i=r(1223),a="findIndex",u=!0;a in[]&&Array(1).findIndex((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9826:function(t,e,r){"use strict";var n=r(2109),o=r(2092).find,i=r(1223),a="find",u=!0;a in[]&&Array(1).find((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},6535:function(t,e,r){"use strict";var n=r(2109),o=r(6790),i=r(7908),a=r(7466),u=r(3099),c=r(5417);n({target:"Array",proto:!0},{flatMap:function(t){var e,r=i(this),n=a(r.length);return u(t),(e=c(r,0)).length=o(e,r,r,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},4944:function(t,e,r){"use strict";var n=r(2109),o=r(6790),i=r(7908),a=r(7466),u=r(9958),c=r(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=i(this),r=a(e.length),n=c(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:u(t)),n}})},1038:function(t,e,r){var n=r(2109),o=r(8457);n({target:"Array",stat:!0,forced:!r(7072)((function(t){Array.from(t)}))},{from:o})},6699:function(t,e,r){"use strict";var n=r(2109),o=r(1318).includes,i=r(1223);n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},6992:function(t,e,r){"use strict";var n=r(5656),o=r(1223),i=r(7497),a=r(9909),u=r(654),c="Array Iterator",s=a.set,f=a.getterFor(c);t.exports=u(Array,"Array",(function(t,e){s(this,{type:c,target:n(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},9600:function(t,e,r){"use strict";var n=r(2109),o=r(8361),i=r(5656),a=r(6637),u=[].join,c=o!=Object,s=a("join",",");n({target:"Array",proto:!0,forced:c||s},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},1249:function(t,e,r){"use strict";var n=r(2109),o=r(2092).map,i=r(7293),a=r(1194)("map"),u=a&&!i((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6572:function(t,e,r){"use strict";var n=r(2109),o=r(7293),i=r(6135);n({target:"Array",stat:!0,forced:o((function(){function t(){}return!(Array.of.call(t)instanceof t)}))},{of:function(){for(var t=0,e=arguments.length,r=new("function"==typeof this?this:Array)(e);e>t;)i(r,t,arguments[t++]);return r.length=e,r}})},7042:function(t,e,r){"use strict";var n=r(2109),o=r(111),i=r(3157),a=r(1400),u=r(7466),c=r(5656),s=r(6135),f=r(1194),l=r(5112)("species"),p=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,e){var r,n,f,d=c(this),v=u(d.length),y=a(t,v),g=a(void 0===e?v:e,v);if(i(d)&&("function"!=typeof(r=d.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[l])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(d,y,g);for(n=new(void 0===r?Array:r)(h(g-y,0)),f=0;y<g;y++,f++)y in d&&s(n,f,d[y]);return n.length=f,n}})},2707:function(t,e,r){"use strict";var n=r(2109),o=r(3099),i=r(7908),a=r(7293),u=r(6637),c=[],s=c.sort,f=a((function(){c.sort(void 0)})),l=a((function(){c.sort(null)})),p=u("sort");n({target:"Array",proto:!0,forced:f||!l||p},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},8706:function(t,e,r){r(6340)("Array")},561:function(t,e,r){"use strict";var n=r(2109),o=r(1400),i=r(9958),a=r(7466),u=r(7908),c=r(5417),s=r(6135),f=r(1194),l=Math.max,p=Math.min,h=9007199254740991,d="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f("splice")},{splice:function(t,e){var r,n,f,v,y,g,m=u(this),b=a(m.length),w=o(t,b),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=b-w):(r=x-2,n=p(l(i(e),0),b-w)),b+r-n>h)throw TypeError(d);for(f=c(m,n),v=0;v<n;v++)(y=w+v)in m&&s(f,v,m[y]);if(f.length=n,r<n){for(v=w;v<b-n;v++)g=v+r,(y=v+n)in m?m[g]=m[y]:delete m[g];for(v=b;v>b-n+r;v--)delete m[v-1]}else if(r>n)for(v=b-n;v>w;v--)g=v+r-1,(y=v+n-1)in m?m[g]=m[y]:delete m[g];for(v=0;v<r;v++)m[v+w]=arguments[v+2];return m.length=b-n+r,f}})},9244:function(t,e,r){r(1223)("flatMap")},3792:function(t,e,r){r(1223)("flat")},6078:function(t,e,r){var n=r(8880),o=r(8709),i=r(5112)("toPrimitive"),a=Date.prototype;i in a||n(a,i,o)},4855:function(t,e,r){"use strict";var n=r(111),o=r(3070),i=r(9518),a=r(5112)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(t){if("function"!=typeof this||!n(t))return!1;if(!n(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},8309:function(t,e,r){var n=r(9781),o=r(3070).f,i=Function.prototype,a=i.toString,u=/^\\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},3706:function(t,e,r){var n=r(7854);r(8003)(n.JSON,"JSON",!0)},1532:function(t,e,r){"use strict";var n=r(7710),o=r(5631);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},9752:function(t,e,r){var n=r(2109),o=r(6513),i=Math.acosh,a=Math.log,u=Math.sqrt,c=Math.LN2;n({target:"Math",stat:!0,forced:!i||710!=Math.floor(i(Number.MAX_VALUE))||i(1/0)!=1/0},{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?a(t)+c:o(t-1+u(t-1)*u(t+1))}})},2376:function(t,e,r){var n=r(2109),o=Math.asinh,i=Math.log,a=Math.sqrt;n({target:"Math",stat:!0,forced:!(o&&1/o(0)>0)},{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):i(e+a(e*e+1)):e}})},3181:function(t,e,r){var n=r(2109),o=Math.atanh,i=Math.log;n({target:"Math",stat:!0,forced:!(o&&1/o(-0)<0)},{atanh:function(t){return 0==(t=+t)?t:i((1+t)/(1-t))/2}})},3484:function(t,e,r){var n=r(2109),o=r(4310),i=Math.abs,a=Math.pow;n({target:"Math",stat:!0},{cbrt:function(t){return o(t=+t)*a(i(t),1/3)}})},2388:function(t,e,r){var n=r(2109),o=Math.floor,i=Math.log,a=Math.LOG2E;n({target:"Math",stat:!0},{clz32:function(t){return(t>>>=0)?31-o(i(t+.5)*a):32}})},8621:function(t,e,r){var n=r(2109),o=r(6736),i=Math.cosh,a=Math.abs,u=Math.E;n({target:"Math",stat:!0,forced:!i||i(710)===1/0},{cosh:function(t){var e=o(a(t)-1)+1;return(e+1/(e*u*u))*(u/2)}})},403:function(t,e,r){var n=r(2109),o=r(6736);n({target:"Math",stat:!0,forced:o!=Math.expm1},{expm1:o})},4755:function(t,e,r){r(2109)({target:"Math",stat:!0},{fround:r(6130)})},5438:function(t,e,r){var n=r(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,e){for(var r,n,o=0,u=0,c=arguments.length,s=0;u<c;)s<(r=i(arguments[u++]))?(o=o*(n=s/r)*n+1,s=r):o+=r>0?(n=r/s)*n:r;return s===1/0?1/0:s*a(o)}})},332:function(t,e,r){var n=r(2109),o=r(7293),i=Math.imul;n({target:"Math",stat:!0,forced:o((function(){return-5!=i(4294967295,5)||2!=i.length}))},{imul:function(t,e){var r=65535,n=+t,o=+e,i=r&n,a=r&o;return 0|i*a+((r&n>>>16)*a+i*(r&o>>>16)<<16>>>0)}})},658:function(t,e,r){var n=r(2109),o=Math.log,i=Math.LOG10E;n({target:"Math",stat:!0},{log10:function(t){return o(t)*i}})},197:function(t,e,r){r(2109)({target:"Math",stat:!0},{log1p:r(6513)})},4914:function(t,e,r){var n=r(2109),o=Math.log,i=Math.LN2;n({target:"Math",stat:!0},{log2:function(t){return o(t)/i}})},2420:function(t,e,r){r(2109)({target:"Math",stat:!0},{sign:r(4310)})},160:function(t,e,r){var n=r(2109),o=r(7293),i=r(6736),a=Math.abs,u=Math.exp,c=Math.E;n({target:"Math",stat:!0,forced:o((function(){return-2e-17!=Math.sinh(-2e-17)}))},{sinh:function(t){return a(t=+t)<1?(i(t)-i(-t))/2:(u(t-1)-u(-t-1))*(c/2)}})},970:function(t,e,r){var n=r(2109),o=r(6736),i=Math.exp;n({target:"Math",stat:!0},{tanh:function(t){var e=o(t=+t),r=o(-t);return e==1/0?1:r==1/0?-1:(e-r)/(i(t)+i(-t))}})},2703:function(t,e,r){r(8003)(Math,"Math",!0)},3689:function(t,e,r){var n=r(2109),o=Math.ceil,i=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:o)(t)}})},9653:function(t,e,r){"use strict";var n=r(9781),o=r(7854),i=r(4705),a=r(1320),u=r(6656),c=r(4326),s=r(9587),f=r(7593),l=r(7293),p=r(30),h=r(8006).f,d=r(1236).f,v=r(3070).f,y=r(3111).trim,g="Number",m=o.Number,b=m.prototype,w=c(p(b))==g,x=function(t){var e,r,n,o,i,a,u,c,s=f(t,!1);if("string"==typeof s&&s.length>2)if(43===(e=(s=y(s)).charCodeAt(0))||45===e){if(88===(r=s.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(a=(i=s.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||c>o)return NaN;return parseInt(i,n)}return+s};if(i(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var S,A=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof A&&(w?l((function(){b.valueOf.call(r)})):c(r)!=g)?s(new m(x(e)),r,A):x(e)},k=n?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;k.length>O;O++)u(m,S=k[O])&&!u(A,S)&&v(A,S,d(m,S));A.prototype=b,b.constructor=A,a(o,g,A)}},3299:function(t,e,r){r(2109)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},5192:function(t,e,r){r(2109)({target:"Number",stat:!0},{isFinite:r(7023)})},3161:function(t,e,r){r(2109)({target:"Number",stat:!0},{isInteger:r(8730)})},4048:function(t,e,r){r(2109)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},8285:function(t,e,r){var n=r(2109),o=r(8730),i=Math.abs;n({target:"Number",stat:!0},{isSafeInteger:function(t){return o(t)&&i(t)<=9007199254740991}})},4363:function(t,e,r){r(2109)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},5994:function(t,e,r){r(2109)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},1874:function(t,e,r){var n=r(2109),o=r(3677);n({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},9494:function(t,e,r){var n=r(2109),o=r(8620);n({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},6977:function(t,e,r){"use strict";var n=r(2109),o=r(9958),i=r(863),a=r(8415),u=r(7293),c=1..toFixed,s=Math.floor,f=function(t,e,r){return 0===e?r:e%2==1?f(t,e-1,r*t):f(t*t,e/2,r)};n({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}))},{toFixed:function(t){var e,r,n,u,c=i(this),l=o(t),p=[0,0,0,0,0,0],h="",d="0",v=function(t,e){for(var r=-1,n=e;++r<6;)n+=t*p[r],p[r]=n%1e7,n=s(n/1e7)},y=function(t){for(var e=6,r=0;--e>=0;)r+=p[e],p[e]=s(r/t),r=r%t*1e7},g=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var r=String(p[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*f(2,69,1))-69)<0?c*f(2,-e,1):c/f(2,e,1),r*=4503599627370496,(e=52-e)>0){for(v(0,r),n=l;n>=7;)v(1e7,0),n-=7;for(v(f(10,n,1),0),n=e-1;n>=23;)y(1<<23),n-=23;y(1<<n),v(1,1),y(2),d=g()}else v(0,r),v(1<<-e,0),d=g()+a.call("0",l);return d=l>0?h+((u=d.length)<=l?"0."+a.call("0",l-u)+d:d.slice(0,u-l)+"."+d.slice(u-l)):h+d}})},9601:function(t,e,r){var n=r(2109),o=r(1574);n({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},9595:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(1301),a=r(7908),u=r(3099),c=r(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineGetter__:function(t,e){c.f(a(this),t,{get:u(e),enumerable:!0,configurable:!0})}})},5500:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(1301),a=r(7908),u=r(3099),c=r(3070);o&&n({target:"Object",proto:!0,forced:i},{__defineSetter__:function(t,e){c.f(a(this),t,{set:u(e),enumerable:!0,configurable:!0})}})},9720:function(t,e,r){var n=r(2109),o=r(4699).entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},3371:function(t,e,r){var n=r(2109),o=r(6677),i=r(7293),a=r(111),u=r(2423).onFreeze,c=Object.freeze;n({target:"Object",stat:!0,forced:i((function(){c(1)})),sham:!o},{freeze:function(t){return c&&a(t)?c(u(t)):t}})},8559:function(t,e,r){var n=r(2109),o=r(408),i=r(6135);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return o(t,(function(t,r){i(e,t,r)}),void 0,!0),e}})},5003:function(t,e,r){var n=r(2109),o=r(7293),i=r(5656),a=r(1236).f,u=r(9781),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:!u||c,sham:!u},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},9337:function(t,e,r){var n=r(2109),o=r(9781),i=r(3887),a=r(5656),u=r(1236),c=r(6135);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=a(t),o=u.f,s=i(n),f={},l=0;s.length>l;)void 0!==(r=o(n,e=s[l++]))&&c(f,e,r);return f}})},6210:function(t,e,r){var n=r(2109),o=r(7293),i=r(1156).f;n({target:"Object",stat:!0,forced:o((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:i})},489:function(t,e,r){var n=r(2109),o=r(7293),i=r(7908),a=r(9518),u=r(8544);n({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!u},{getPrototypeOf:function(t){return a(i(t))}})},1825:function(t,e,r){var n=r(2109),o=r(7293),i=r(111),a=Object.isExtensible;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isExtensible:function(t){return!!i(t)&&(!a||a(t))}})},8410:function(t,e,r){var n=r(2109),o=r(7293),i=r(111),a=Object.isFrozen;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:function(t){return!i(t)||!!a&&a(t)}})},2200:function(t,e,r){var n=r(2109),o=r(7293),i=r(111),a=Object.isSealed;n({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isSealed:function(t){return!i(t)||!!a&&a(t)}})},3304:function(t,e,r){r(2109)({target:"Object",stat:!0},{is:r(1150)})},7941:function(t,e,r){var n=r(2109),o=r(7908),i=r(1956);n({target:"Object",stat:!0,forced:r(7293)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},4869:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(1301),a=r(7908),u=r(7593),c=r(9518),s=r(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(t){var e,r=a(this),n=u(t,!0);do{if(e=s(r,n))return e.get}while(r=c(r))}})},3952:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(1301),a=r(7908),u=r(7593),c=r(9518),s=r(1236).f;o&&n({target:"Object",proto:!0,forced:i},{__lookupSetter__:function(t){var e,r=a(this),n=u(t,!0);do{if(e=s(r,n))return e.set}while(r=c(r))}})},7227:function(t,e,r){var n=r(2109),o=r(111),i=r(2423).onFreeze,a=r(6677),u=r(7293),c=Object.preventExtensions;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{preventExtensions:function(t){return c&&o(t)?c(i(t)):t}})},514:function(t,e,r){var n=r(2109),o=r(111),i=r(2423).onFreeze,a=r(6677),u=r(7293),c=Object.seal;n({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{seal:function(t){return c&&o(t)?c(i(t)):t}})},1539:function(t,e,r){var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},6833:function(t,e,r){var n=r(2109),o=r(4699).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},4678:function(t,e,r){var n=r(2109),o=r(3677);n({global:!0,forced:parseFloat!=o},{parseFloat:o})},1058:function(t,e,r){var n=r(2109),o=r(8620);n({global:!0,forced:parseInt!=o},{parseInt:o})},7727:function(t,e,r){"use strict";var n=r(2109),o=r(1913),i=r(3366),a=r(7293),u=r(5005),c=r(6707),s=r(9478),f=r(1320);n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,u("Promise")),r="function"==typeof t;return this.then(r?function(r){return s(e,t()).then((function(){return r}))}:t,r?function(r){return s(e,t()).then((function(){throw r}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||f(i.prototype,"finally",u("Promise").prototype.finally)},8674:function(t,e,r){"use strict";var n,o,i,a,u=r(2109),c=r(1913),s=r(7854),f=r(5005),l=r(3366),p=r(1320),h=r(2248),d=r(8003),v=r(6340),y=r(111),g=r(3099),m=r(5787),b=r(4326),w=r(2788),x=r(408),S=r(7072),A=r(6707),k=r(261).set,O=r(5948),E=r(9478),_=r(842),I=r(8523),j=r(2534),F=r(9909),T=r(4705),P=r(5112),R=r(2101),M=P("species"),D="Promise",L=F.get,N=F.set,B=F.getterFor(D),U=l,C=s.TypeError,J=s.document,W=s.process,V=f("fetch"),q=I.f,z=q,G="process"==b(W),H=!!(J&&J.createEvent&&s.dispatchEvent),Y="unhandledrejection",X=T(D,(function(){if(!(w(U)!==String(U))){if(66===R)return!0;if(!G&&"function"!=typeof PromiseRejectionEvent)return!0}if(c&&!U.prototype.finally)return!0;if(R>=51&&/native code/.test(U))return!1;var t=U.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[M]=e,!(t.then((function(){}))instanceof e)})),$=X||!S((function(t){U.all(t).catch((function(){}))})),K=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Q=function(t,e,r){if(!e.notified){e.notified=!0;var n=e.reactions;O((function(){for(var o=e.value,i=1==e.state,a=0;n.length>a;){var u,c,s,f=n[a++],l=i?f.ok:f.fail,p=f.resolve,h=f.reject,d=f.domain;try{l?(i||(2===e.rejection&&rt(t,e),e.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),s=!0)),u===f.promise?h(C("Promise-chain cycle")):(c=K(u))?c.call(u,p,h):p(u)):h(o)}catch(t){d&&!s&&d.exit(),h(t)}}e.reactions=[],e.notified=!1,r&&!e.rejection&&tt(t,e)}))}},Z=function(t,e,r){var n,o;H?((n=J.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:e,reason:r},(o=s["on"+t])?o(n):t===Y&&_("Unhandled promise rejection",r)},tt=function(t,e){k.call(s,(function(){var r,n=e.value;if(et(e)&&(r=j((function(){G?W.emit("unhandledRejection",n,t):Z(Y,t,n)})),e.rejection=G||et(e)?2:1,r.error))throw r.value}))},et=function(t){return 1!==t.rejection&&!t.parent},rt=function(t,e){k.call(s,(function(){G?W.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},nt=function(t,e,r,n){return function(o){t(e,r,o,n)}},ot=function(t,e,r,n){e.done||(e.done=!0,n&&(e=n),e.value=r,e.state=2,Q(t,e,!0))},it=function(t,e,r,n){if(!e.done){e.done=!0,n&&(e=n);try{if(t===r)throw C("Promise can\'t be resolved itself");var o=K(r);o?O((function(){var n={done:!1};try{o.call(r,nt(it,t,n,e),nt(ot,t,n,e))}catch(r){ot(t,n,r,e)}})):(e.value=r,e.state=1,Q(t,e,!1))}catch(r){ot(t,{done:!1},r,e)}}};X&&(U=function(t){m(this,U,D),g(t),n.call(this);var e=L(this);try{t(nt(it,this,e),nt(ot,this,e))}catch(t){ot(this,e,t)}},(n=function(t){N(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(U.prototype,{then:function(t,e){var r=B(this),n=q(A(this,U));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=G?W.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&Q(this,r,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=L(t);this.promise=t,this.resolve=nt(it,t,e),this.reject=nt(ot,t,e)},I.f=q=function(t){return t===U||t===i?new o(t):z(t)},c||"function"!=typeof l||(a=l.prototype.then,p(l.prototype,"then",(function(t,e){var r=this;return new U((function(t,e){a.call(r,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(U,V.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:X},{Promise:U}),d(U,D,!1,!0),v(D),i=f(D),u({target:D,stat:!0,forced:X},{reject:function(t){var e=q(this);return e.reject.call(void 0,t),e.promise}}),u({target:D,stat:!0,forced:c||X},{resolve:function(t){return E(c&&this===i?U:this,t)}}),u({target:D,stat:!0,forced:$},{all:function(t){var e=this,r=q(e),n=r.resolve,o=r.reject,i=j((function(){var r=g(e.resolve),i=[],a=0,u=1;x(t,(function(t){var c=a++,s=!1;i.push(void 0),u++,r.call(e,t).then((function(t){s||(s=!0,i[c]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=q(e),n=r.reject,o=j((function(){var o=g(e.resolve);x(t,(function(t){o.call(e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},224:function(t,e,r){var n=r(2109),o=r(5005),i=r(3099),a=r(9670),u=r(7293),c=o("Reflect","apply"),s=Function.apply;n({target:"Reflect",stat:!0,forced:!u((function(){c((function(){}))}))},{apply:function(t,e,r){return i(t),a(r),c?c(t,e,r):s.call(t,e,r)}})},2419:function(t,e,r){var n=r(2109),o=r(5005),i=r(3099),a=r(9670),u=r(111),c=r(30),s=r(7065),f=r(7293),l=o("Reflect","construct"),p=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),h=!f((function(){l((function(){}))})),d=p||h;n({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){i(t),a(e);var r=arguments.length<3?t:i(arguments[2]);if(h&&!p)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(s.apply(t,n))}var o=r.prototype,f=c(u(o)?o:Object.prototype),d=Function.apply.call(t,f,e);return u(d)?d:f}})},9596:function(t,e,r){var n=r(2109),o=r(9781),i=r(9670),a=r(7593),u=r(3070);n({target:"Reflect",stat:!0,forced:r(7293)((function(){Reflect.defineProperty(u.f({},1,{value:1}),1,{value:2})})),sham:!o},{defineProperty:function(t,e,r){i(t);var n=a(e,!0);i(r);try{return u.f(t,n,r),!0}catch(t){return!1}}})},2586:function(t,e,r){var n=r(2109),o=r(9670),i=r(1236).f;n({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=i(o(t),e);return!(r&&!r.configurable)&&delete t[e]}})},5683:function(t,e,r){var n=r(2109),o=r(9781),i=r(9670),a=r(1236);n({target:"Reflect",stat:!0,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a.f(i(t),e)}})},9361:function(t,e,r){var n=r(2109),o=r(9670),i=r(9518);n({target:"Reflect",stat:!0,sham:!r(8544)},{getPrototypeOf:function(t){return i(o(t))}})},4819:function(t,e,r){var n=r(2109),o=r(111),i=r(9670),a=r(6656),u=r(1236),c=r(9518);n({target:"Reflect",stat:!0},{get:function t(e,r){var n,s,f=arguments.length<3?e:arguments[2];return i(e)===f?e[r]:(n=u.f(e,r))?a(n,"value")?n.value:void 0===n.get?void 0:n.get.call(f):o(s=c(e))?t(s,r,f):void 0}})},1037:function(t,e,r){r(2109)({target:"Reflect",stat:!0},{has:function(t,e){return e in t}})},5898:function(t,e,r){var n=r(2109),o=r(9670),i=Object.isExtensible;n({target:"Reflect",stat:!0},{isExtensible:function(t){return o(t),!i||i(t)}})},7556:function(t,e,r){r(2109)({target:"Reflect",stat:!0},{ownKeys:r(3887)})},4361:function(t,e,r){var n=r(2109),o=r(5005),i=r(9670);n({target:"Reflect",stat:!0,sham:!r(6677)},{preventExtensions:function(t){i(t);try{var e=o("Object","preventExtensions");return e&&e(t),!0}catch(t){return!1}}})},9532:function(t,e,r){var n=r(2109),o=r(9670),i=r(6077),a=r(7674);a&&n({target:"Reflect",stat:!0},{setPrototypeOf:function(t,e){o(t),i(e);try{return a(t,e),!0}catch(t){return!1}}})},3593:function(t,e,r){var n=r(2109),o=r(9670),i=r(111),a=r(6656),u=r(7293),c=r(3070),s=r(1236),f=r(9518),l=r(9114);n({target:"Reflect",stat:!0,forced:u((function(){var t=c.f({},"a",{configurable:!0});return!1!==Reflect.set(f(t),"a",1,t)}))},{set:function t(e,r,n){var u,p,h=arguments.length<4?e:arguments[3],d=s.f(o(e),r);if(!d){if(i(p=f(e)))return t(p,r,n,h);d=l(0)}if(a(d,"value")){if(!1===d.writable||!i(h))return!1;if(u=s.f(h,r)){if(u.get||u.set||!1===u.writable)return!1;u.value=n,c.f(h,r,u)}else c.f(h,r,l(0,n));return!0}return void 0!==d.set&&(d.set.call(h,n),!0)}})},4603:function(t,e,r){var n=r(9781),o=r(7854),i=r(4705),a=r(9587),u=r(3070).f,c=r(8006).f,s=r(7850),f=r(7066),l=r(1320),p=r(7293),h=r(6340),d=r(5112)("match"),v=o.RegExp,y=v.prototype,g=/a/g,m=/a/g,b=new v(g)!==g;if(n&&i("RegExp",!b||p((function(){return m[d]=!1,v(g)!=g||v(m)==m||"/a/i"!=v(g,"i")})))){for(var w=function(t,e){var r=this instanceof w,n=s(t),o=void 0===e;return!r&&n&&t.constructor===w&&o?t:a(b?new v(n&&!o?t.source:t,e):v((n=t instanceof w)?t.source:t,n&&o?f.call(t):e),r?this:y,w)},x=function(t){t in w||u(w,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},S=c(v),A=0;S.length>A;)x(S[A++]);y.constructor=w,w.prototype=y,l(o,"RegExp",w)}h("RegExp")},4916:function(t,e,r){"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},2087:function(t,e,r){var n=r(9781),o=r(3070),i=r(7066);n&&"g"!=/./g.flags&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},9714:function(t,e,r){"use strict";var n=r(1320),o=r(9670),i=r(7293),a=r(7066),u="toString",c=RegExp.prototype,s=c.toString,f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=u;(f||l)&&n(RegExp.prototype,u,(function(){var t=o(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r)}),{unsafe:!0})},189:function(t,e,r){"use strict";var n=r(7710),o=r(5631);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},5218:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},4475:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("big")},{big:function(){return o(this,"big","","")}})},7929:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("blink")},{blink:function(){return o(this,"blink","","")}})},915:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("bold")},{bold:function(){return o(this,"b","","")}})},9841:function(t,e,r){"use strict";var n=r(2109),o=r(8710).codeAt;n({target:"String",proto:!0},{codePointAt:function(t){return o(this,t)}})},7852:function(t,e,r){"use strict";var n,o=r(2109),i=r(1236).f,a=r(7466),u=r(3929),c=r(4488),s=r(4964),f=r(1913),l="".endsWith,p=Math.min,h=s("endsWith");o({target:"String",proto:!0,forced:!!(f||h||(n=i(String.prototype,"endsWith"),!n||n.writable))&&!h},{endsWith:function(t){var e=String(c(this));u(t);var r=arguments.length>1?arguments[1]:void 0,n=a(e.length),o=void 0===r?n:p(a(r),n),i=String(t);return l?l.call(e,i,o):e.slice(o-i.length,o)===i}})},9253:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("fixed")},{fixed:function(){return o(this,"tt","","")}})},2125:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("fontcolor")},{fontcolor:function(t){return o(this,"font","color",t)}})},8830:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},4953:function(t,e,r){var n=r(2109),o=r(1400),i=String.fromCharCode,a=String.fromCodePoint;n({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function(t){for(var e,r=[],n=arguments.length,a=0;n>a;){if(e=+arguments[a++],o(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}})},2023:function(t,e,r){"use strict";var n=r(2109),o=r(3929),i=r(4488);n({target:"String",proto:!0,forced:!r(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},8734:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("italics")},{italics:function(){return o(this,"i","","")}})},8783:function(t,e,r){"use strict";var n=r(8710).charAt,o=r(9909),i=r(654),a="String Iterator",u=o.set,c=o.getterFor(a);i(String,"String",(function(t){u(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},9254:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("link")},{link:function(t){return o(this,"a","href",t)}})},4723:function(t,e,r){"use strict";var n=r(7007),o=r(9670),i=r(7466),a=r(4488),u=r(1530),c=r(7651);n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=o(t),s=String(this);if(!a.global)return c(a,s);var f=a.unicode;a.lastIndex=0;for(var l,p=[],h=0;null!==(l=c(a,s));){var d=String(l[0]);p[h]=d,""===d&&(a.lastIndex=u(s,i(a.lastIndex),f)),h++}return 0===h?null:p}]}))},6528:function(t,e,r){"use strict";var n=r(2109),o=r(6650).end;n({target:"String",proto:!0,forced:r(7428)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},3112:function(t,e,r){"use strict";var n=r(2109),o=r(6650).start;n({target:"String",proto:!0,forced:r(7428)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8992:function(t,e,r){var n=r(2109),o=r(5656),i=r(7466);n({target:"String",stat:!0},{raw:function(t){for(var e=o(t.raw),r=i(e.length),n=arguments.length,a=[],u=0;r>u;)a.push(String(e[u++])),u<n&&a.push(String(arguments[u]));return a.join("")}})},2481:function(t,e,r){r(2109)({target:"String",proto:!0},{repeat:r(8415)})},5306:function(t,e,r){"use strict";var n=r(7007),o=r(9670),i=r(7908),a=r(7466),u=r(9958),c=r(4488),s=r(1530),f=r(7651),l=Math.max,p=Math.min,h=Math.floor,d=/\\$([$&\'`]|\\d\\d?|<[^>]*>)/g,v=/\\$([$&\'`]|\\d\\d?)/g;n("replace",2,(function(t,e,r){return[function(r,n){var o=c(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,i){var c=r(e,t,this,i);if(c.done)return c.value;var h=o(t),d=String(this),v="function"==typeof i;v||(i=String(i));var y=h.global;if(y){var g=h.unicode;h.lastIndex=0}for(var m=[];;){var b=f(h,d);if(null===b)break;if(m.push(b),!y)break;""===String(b[0])&&(h.lastIndex=s(d,a(h.lastIndex),g))}for(var w,x="",S=0,A=0;A<m.length;A++){b=m[A];for(var k=String(b[0]),O=l(p(u(b.index),d.length),0),E=[],_=1;_<b.length;_++)E.push(void 0===(w=b[_])?w:String(w));var I=b.groups;if(v){var j=[k].concat(E,O,d);void 0!==I&&j.push(I);var F=String(i.apply(void 0,j))}else F=n(k,d,O,E,I,i);O>=S&&(x+=d.slice(S,O)+F,S=O+k.length)}return x+d.slice(S)}];function n(t,r,n,o,a,u){var c=n+t.length,s=o.length,f=v;return void 0!==a&&(a=i(a),f=d),e.call(u,f,(function(e,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"\'":return r.slice(c);case"<":u=a[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var l=h(f/10);return 0===l?e:l<=s?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):e}u=o[f-1]}return void 0===u?"":u}))}}))},4765:function(t,e,r){"use strict";var n=r(7007),o=r(9670),i=r(4488),a=r(1150),u=r(7651);n("search",1,(function(t,e,r){return[function(e){var r=i(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=o(t),c=String(this),s=i.lastIndex;a(s,0)||(i.lastIndex=0);var f=u(i,c);return a(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},7268:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("small")},{small:function(){return o(this,"small","","")}})},3123:function(t,e,r){"use strict";var n=r(7007),o=r(7850),i=r(9670),a=r(4488),u=r(6707),c=r(1530),s=r(7466),f=r(7651),l=r(2261),p=r(7293),h=[].push,d=Math.min,v=4294967295,y=!p((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(a(this)),i=void 0===r?v:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,i);for(var u,c,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,y=new RegExp(t.source,p+"g");(u=l.call(y,n))&&!((c=y.lastIndex)>d&&(f.push(n.slice(d,u.index)),u.length>1&&u.index<n.length&&h.apply(f,u.slice(1)),s=u[0].length,d=c,f.length>=i));)y.lastIndex===u.index&&y.lastIndex++;return d===n.length?!s&&y.test("")||f.push(""):f.push(n.slice(d)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var a=r(n,t,this,o,n!==e);if(a.done)return a.value;var l=i(t),p=String(this),h=u(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(y?"y":"g"),b=new h(y?l:"^(?:"+l.source+")",m),w=void 0===o?v:o>>>0;if(0===w)return[];if(0===p.length)return null===f(b,p)?[p]:[];for(var x=0,S=0,A=[];S<p.length;){b.lastIndex=y?S:0;var k,O=f(b,y?p:p.slice(S));if(null===O||(k=d(s(b.lastIndex+(y?0:S)),p.length))===x)S=c(p,S,g);else{if(A.push(p.slice(x,S)),A.length===w)return A;for(var E=1;E<=O.length-1;E++)if(A.push(O[E]),A.length===w)return A;S=x=k}}return A.push(p.slice(x)),A}]}),!y)},6755:function(t,e,r){"use strict";var n,o=r(2109),i=r(1236).f,a=r(7466),u=r(3929),c=r(4488),s=r(4964),f=r(1913),l="".startsWith,p=Math.min,h=s("startsWith");o({target:"String",proto:!0,forced:!!(f||h||(n=i(String.prototype,"startsWith"),!n||n.writable))&&!h},{startsWith:function(t){var e=String(c(this));u(t);var r=a(p(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return l?l.call(e,n,r):e.slice(r,r+n.length)===n}})},7397:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("strike")},{strike:function(){return o(this,"strike","","")}})},86:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("sub")},{sub:function(){return o(this,"sub","","")}})},623:function(t,e,r){"use strict";var n=r(2109),o=r(4230);n({target:"String",proto:!0,forced:r(2098)("sup")},{sup:function(){return o(this,"sup","","")}})},8702:function(t,e,r){"use strict";var n=r(2109),o=r(3111).end,i=r(8711)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;n({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},5674:function(t,e,r){"use strict";var n=r(2109),o=r(3111).start,i=r(8711)("trimStart"),a=i?function(){return o(this)}:"".trimStart;n({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},3210:function(t,e,r){"use strict";var n=r(2109),o=r(3111).trim;n({target:"String",proto:!0,forced:r(8711)("trim")},{trim:function(){return o(this)}})},2443:function(t,e,r){r(7235)("asyncIterator")},1817:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(7854),a=r(6656),u=r(111),c=r(3070).f,s=r(9920),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var h=p.prototype=f.prototype;h.constructor=p;var d=h.toString,v="Symbol(test)"==String(f("test")),y=/^Symbol\\((.*)\\)[^)]+$/;c(h,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=d.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},2401:function(t,e,r){r(7235)("hasInstance")},8722:function(t,e,r){r(7235)("isConcatSpreadable")},2165:function(t,e,r){r(7235)("iterator")},2526:function(t,e,r){"use strict";var n=r(2109),o=r(7854),i=r(5005),a=r(1913),u=r(9781),c=r(133),s=r(3307),f=r(7293),l=r(6656),p=r(3157),h=r(111),d=r(9670),v=r(7908),y=r(5656),g=r(7593),m=r(9114),b=r(30),w=r(1956),x=r(8006),S=r(1156),A=r(5181),k=r(1236),O=r(3070),E=r(5296),_=r(8880),I=r(1320),j=r(2309),F=r(6200),T=r(3501),P=r(9711),R=r(5112),M=r(6805),D=r(7235),L=r(8003),N=r(9909),B=r(2092).forEach,U=F("hidden"),C="Symbol",J=R("toPrimitive"),W=N.set,V=N.getterFor(C),q=Object.prototype,z=o.Symbol,G=i("JSON","stringify"),H=k.f,Y=O.f,X=S.f,$=E.f,K=j("symbols"),Q=j("op-symbols"),Z=j("string-to-symbol-registry"),tt=j("symbol-to-string-registry"),et=j("wks"),rt=o.QObject,nt=!rt||!rt.prototype||!rt.prototype.findChild,ot=u&&f((function(){return 7!=b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(q,e);n&&delete q[e],Y(t,e,r),n&&t!==q&&Y(q,e,n)}:Y,it=function(t,e){var r=K[t]=b(z.prototype);return W(r,{type:C,tag:t,description:e}),u||(r.description=e),r},at=c&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ut=function(t,e,r){t===q&&ut(Q,e,r),d(t);var n=g(e,!0);return d(r),l(K,n)?(r.enumerable?(l(t,U)&&t[U][n]&&(t[U][n]=!1),r=b(r,{enumerable:m(0,!1)})):(l(t,U)||Y(t,U,m(1,{})),t[U][n]=!0),ot(t,n,r)):Y(t,n,r)},ct=function(t,e){d(t);var r=y(e),n=w(r).concat(pt(r));return B(n,(function(e){u&&!st.call(r,e)||ut(t,e,r[e])})),t},st=function(t){var e=g(t,!0),r=$.call(this,e);return!(this===q&&l(K,e)&&!l(Q,e))&&(!(r||!l(this,e)||!l(K,e)||l(this,U)&&this[U][e])||r)},ft=function(t,e){var r=y(t),n=g(e,!0);if(r!==q||!l(K,n)||l(Q,n)){var o=H(r,n);return!o||!l(K,n)||l(r,U)&&r[U][n]||(o.enumerable=!0),o}},lt=function(t){var e=X(y(t)),r=[];return B(e,(function(t){l(K,t)||l(T,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=X(e?Q:y(t)),n=[];return B(r,(function(t){!l(K,t)||e&&!l(q,t)||n.push(K[t])})),n};(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),r=function(t){this===q&&r.call(Q,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),ot(this,e,m(1,t))};return u&&nt&&ot(q,e,{configurable:!0,set:r}),it(e,t)},I(z.prototype,"toString",(function(){return V(this).tag})),E.f=st,O.f=ut,k.f=ft,x.f=S.f=lt,A.f=pt,u&&(Y(z.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),a||I(q,"propertyIsEnumerable",st,{unsafe:!0}))),s||(M.f=function(t){return it(R(t),t)}),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),B(w(et),(function(t){D(t)})),n({target:C,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(Z,e))return Z[e];var r=z(e);return Z[e]=r,tt[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!u},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){A.f(1)}))},{getOwnPropertySymbols:function(t){return A.f(v(t))}}),G)&&n({target:"JSON",stat:!0,forced:!c||f((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(h(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,G.apply(null,o)}});z.prototype[J]||_(z.prototype,J,z.prototype.valueOf),L(z,C),T[U]=!0},9007:function(t,e,r){r(7235)("match")},3510:function(t,e,r){r(7235)("replace")},1840:function(t,e,r){r(7235)("search")},6982:function(t,e,r){r(7235)("species")},2159:function(t,e,r){r(7235)("split")},6649:function(t,e,r){r(7235)("toPrimitive")},9341:function(t,e,r){r(7235)("toStringTag")},543:function(t,e,r){r(7235)("unscopables")},2990:function(t,e,r){"use strict";var n=r(260),o=r(1048),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("copyWithin",(function(t,e){return o.call(i(this),t,e,arguments.length>2?arguments[2]:void 0)}))},8927:function(t,e,r){"use strict";var n=r(260),o=r(2092).every,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3105:function(t,e,r){"use strict";var n=r(260),o=r(1285),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("fill",(function(t){return o.apply(i(this),arguments)}))},5035:function(t,e,r){"use strict";var n=r(260),o=r(2092).filter,i=r(6707),a=n.aTypedArray,u=n.aTypedArrayConstructor;(0,n.exportTypedArrayMethod)("filter",(function(t){for(var e=o(a(this),t,arguments.length>1?arguments[1]:void 0),r=i(this,this.constructor),n=0,c=e.length,s=new(u(r))(c);c>n;)s[n]=e[n++];return s}))},7174:function(t,e,r){"use strict";var n=r(260),o=r(2092).findIndex,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4345:function(t,e,r){"use strict";var n=r(260),o=r(2092).find,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},4197:function(t,e,r){r(9843)("Float32",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},6495:function(t,e,r){r(9843)("Float64",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},2846:function(t,e,r){"use strict";var n=r(260),o=r(2092).forEach,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},8145:function(t,e,r){"use strict";var n=r(6500);(0,r(260).exportTypedArrayStaticMethod)("from",r(7321),n)},4731:function(t,e,r){"use strict";var n=r(260),o=r(1318).includes,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},7209:function(t,e,r){"use strict";var n=r(260),o=r(1318).indexOf,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},5109:function(t,e,r){r(9843)("Int16",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},5125:function(t,e,r){r(9843)("Int32",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},7145:function(t,e,r){r(9843)("Int8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},6319:function(t,e,r){"use strict";var n=r(7854),o=r(260),i=r(6992),a=r(5112)("iterator"),u=n.Uint8Array,c=i.values,s=i.keys,f=i.entries,l=o.aTypedArray,p=o.exportTypedArrayMethod,h=u&&u.prototype[a],d=!!h&&("values"==h.name||null==h.name),v=function(){return c.call(l(this))};p("entries",(function(){return f.call(l(this))})),p("keys",(function(){return s.call(l(this))})),p("values",v,!d),p(a,v,!d)},8867:function(t,e,r){"use strict";var n=r(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},7789:function(t,e,r){"use strict";var n=r(260),o=r(6583),i=n.aTypedArray;(0,n.exportTypedArrayMethod)("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},3739:function(t,e,r){"use strict";var n=r(260),o=r(2092).map,i=r(6707),a=n.aTypedArray,u=n.aTypedArrayConstructor;(0,n.exportTypedArrayMethod)("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(u(i(t,t.constructor)))(e)}))}))},5206:function(t,e,r){"use strict";var n=r(260),o=r(6500),i=n.aTypedArrayConstructor;(0,n.exportTypedArrayStaticMethod)("of",(function(){for(var t=0,e=arguments.length,r=new(i(this))(e);e>t;)r[t]=arguments[t++];return r}),o)},4483:function(t,e,r){"use strict";var n=r(260),o=r(3671).right,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},9368:function(t,e,r){"use strict";var n=r(260),o=r(3671).left,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2056:function(t,e,r){"use strict";var n=r(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){for(var t,e=this,r=o(e).length,n=a(r/2),i=0;i<n;)t=e[i],e[i++]=e[--r],e[r]=t;return e}))},3462:function(t,e,r){"use strict";var n=r(260),o=r(7466),i=r(4590),a=r(7908),u=r(7293),c=n.aTypedArray;(0,n.exportTypedArrayMethod)("set",(function(t){c(this);var e=i(arguments.length>1?arguments[1]:void 0,1),r=this.length,n=a(t),u=o(n.length),s=0;if(u+e>r)throw RangeError("Wrong length");for(;s<u;)this[e+s]=n[s++]}),u((function(){new Int8Array(1).set({})})))},678:function(t,e,r){"use strict";var n=r(260),o=r(6707),i=r(7293),a=n.aTypedArray,u=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod,s=[].slice;c("slice",(function(t,e){for(var r=s.call(a(this),t,e),n=o(this,this.constructor),i=0,c=r.length,f=new(u(n))(c);c>i;)f[i]=r[i++];return f}),i((function(){new Int8Array(1).slice()})))},7462:function(t,e,r){"use strict";var n=r(260),o=r(2092).some,i=n.aTypedArray;(0,n.exportTypedArrayMethod)("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3824:function(t,e,r){"use strict";var n=r(260),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].sort;i("sort",(function(t){return a.call(o(this),t)}))},5021:function(t,e,r){"use strict";var n=r(260),o=r(7466),i=r(1400),a=r(6707),u=n.aTypedArray;(0,n.exportTypedArrayMethod)("subarray",(function(t,e){var r=u(this),n=r.length,c=i(t,n);return new(a(r,r.constructor))(r.buffer,r.byteOffset+c*r.BYTES_PER_ELEMENT,o((void 0===e?n:i(e,n))-c))}))},2974:function(t,e,r){"use strict";var n=r(7854),o=r(260),i=r(7293),a=n.Int8Array,u=o.aTypedArray,c=o.exportTypedArrayMethod,s=[].toLocaleString,f=[].slice,l=!!a&&i((function(){s.call(new a(1))}));c("toLocaleString",(function(){return s.apply(l?f.call(u(this)):u(this),arguments)}),i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])})))},5016:function(t,e,r){"use strict";var n=r(260).exportTypedArrayMethod,o=r(7293),i=r(7854).Uint8Array,a=i&&i.prototype||{},u=[].toString,c=[].join;o((function(){u.call({})}))&&(u=function(){return c.call(this)});var s=a.toString!=u;n("toString",u,s)},8255:function(t,e,r){r(9843)("Uint16",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},9135:function(t,e,r){r(9843)("Uint32",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},2472:function(t,e,r){r(9843)("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},9743:function(t,e,r){r(9843)("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}),!0)},4129:function(t,e,r){"use strict";var n,o=r(7854),i=r(2248),a=r(2423),u=r(7710),c=r(9320),s=r(111),f=r(9909).enforce,l=r(8536),p=!o.ActiveXObject&&"ActiveXObject"in o,h=Object.isExtensible,d=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},v=t.exports=u("WeakMap",d,c);if(l&&p){n=c.getConstructor(d,"WeakMap",!0),a.REQUIRED=!0;var y=v.prototype,g=y.delete,m=y.has,b=y.get,w=y.set;i(y,{delete:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new n),g.call(this,t)||e.frozen.delete(t)}return g.call(this,t)},has:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new n),m.call(this,t)||e.frozen.has(t)}return m.call(this,t)},get:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new n),m.call(this,t)?b.call(this,t):e.frozen.get(t)}return b.call(this,t)},set:function(t,e){if(s(t)&&!h(t)){var r=f(this);r.frozen||(r.frozen=new n),m.call(this,t)?w.call(this,t,e):r.frozen.set(t,e)}else w.call(this,t,e);return this}})}},8478:function(t,e,r){"use strict";r(7710)("WeakSet",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(9320))},4747:function(t,e,r){var n=r(7854),o=r(8324),i=r(8533),a=r(8880);for(var u in o){var c=n[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},3948:function(t,e,r){var n=r(7854),o=r(8324),i=r(6992),a=r(8880),u=r(5112),c=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var p=n[l],h=p&&p.prototype;if(h){if(h[c]!==f)try{a(h,c,f)}catch(t){h[c]=f}if(h[s]||a(h,s,l),o[l])for(var d in i)if(h[d]!==i[d])try{a(h,d,i[d])}catch(t){h[d]=i[d]}}}},4633:function(t,e,r){var n=r(2109),o=r(7854),i=r(261);n({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:i.set,clearImmediate:i.clear})},5844:function(t,e,r){var n=r(2109),o=r(7854),i=r(5948),a=r(4326),u=o.process,c="process"==a(u);n({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function(t){var e=c&&u.domain;i(e?e.bind(t):t)}})},1637:function(t,e,r){"use strict";r(6992);var n=r(2109),o=r(5005),i=r(590),a=r(1320),u=r(2248),c=r(8003),s=r(4994),f=r(9909),l=r(5787),p=r(6656),h=r(244),d=r(648),v=r(9670),y=r(111),g=r(30),m=r(9114),b=r(8554),w=r(1246),x=r(5112),S=o("fetch"),A=o("Headers"),k=x("iterator"),O="URLSearchParams",E="URLSearchParamsIterator",_=f.set,I=f.getterFor(O),j=f.getterFor(E),F=/\\+/g,T=Array(4),P=function(t){return T[t-1]||(T[t-1]=RegExp("((?:%[\\\\da-f]{2}){"+t+"})","gi"))},R=function(t){try{return decodeURIComponent(t)}catch(e){return t}},M=function(t){var e=t.replace(F," "),r=4;try{return decodeURIComponent(e)}catch(t){for(;r;)e=e.replace(P(r--),R);return e}},D=/[!\'()~]|%20/g,L={"!":"%21","\'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},N=function(t){return L[t]},B=function(t){return encodeURIComponent(t).replace(D,N)},U=function(t,e){if(e)for(var r,n,o=e.split("&"),i=0;i<o.length;)(r=o[i++]).length&&(n=r.split("="),t.push({key:M(n.shift()),value:M(n.join("="))}))},C=function(t){this.entries.length=0,U(this.entries,t)},J=function(t,e){if(t<e)throw TypeError("Not enough arguments")},W=s((function(t,e){_(this,{type:E,iterator:b(I(t).entries),kind:e})}),"Iterator",(function(){var t=j(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r})),V=function(){l(this,V,O);var t,e,r,n,o,i,a,u,c,s=arguments.length>0?arguments[0]:void 0,f=this,h=[];if(_(f,{type:O,entries:h,updateURL:function(){},updateSearchParams:C}),void 0!==s)if(y(s))if("function"==typeof(t=w(s)))for(r=(e=t.call(s)).next;!(n=r.call(e)).done;){if((a=(i=(o=b(v(n.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");h.push({key:a.value+"",value:u.value+""})}else for(c in s)p(s,c)&&h.push({key:c,value:s[c]+""});else U(h,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},q=V.prototype;u(q,{append:function(t,e){J(arguments.length,2);var r=I(this);r.entries.push({key:t+"",value:e+""}),r.updateURL()},delete:function(t){J(arguments.length,1);for(var e=I(this),r=e.entries,n=t+"",o=0;o<r.length;)r[o].key===n?r.splice(o,1):o++;e.updateURL()},get:function(t){J(arguments.length,1);for(var e=I(this).entries,r=t+"",n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){J(arguments.length,1);for(var e=I(this).entries,r=t+"",n=[],o=0;o<e.length;o++)e[o].key===r&&n.push(e[o].value);return n},has:function(t){J(arguments.length,1);for(var e=I(this).entries,r=t+"",n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){J(arguments.length,1);for(var r,n=I(this),o=n.entries,i=!1,a=t+"",u=e+"",c=0;c<o.length;c++)(r=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,r.value=u));i||o.push({key:a,value:u}),n.updateURL()},sort:function(){var t,e,r,n=I(this),o=n.entries,i=o.slice();for(o.length=0,r=0;r<i.length;r++){for(t=i[r],e=0;e<r;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===r&&o.push(t)}n.updateURL()},forEach:function(t){for(var e,r=I(this).entries,n=h(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new W(this,"keys")},values:function(){return new W(this,"values")},entries:function(){return new W(this,"entries")}},{enumerable:!0}),a(q,k,q.entries),a(q,"toString",(function(){for(var t,e=I(this).entries,r=[],n=0;n<e.length;)t=e[n++],r.push(B(t.key)+"="+B(t.value));return r.join("&")}),{enumerable:!0}),c(V,O),n({global:!0,forced:!i},{URLSearchParams:V}),i||"function"!=typeof S||"function"!=typeof A||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,r,n,o=[t];return arguments.length>1&&(y(e=arguments[1])&&(r=e.body,d(r)===O&&((n=e.headers?new A(e.headers):new A).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=g(e,{body:m(0,String(r)),headers:m(0,n)}))),o.push(e)),S.apply(this,o)}}),t.exports={URLSearchParams:V,getState:I}},285:function(t,e,r){"use strict";r(8783);var n,o=r(2109),i=r(9781),a=r(590),u=r(7854),c=r(6048),s=r(1320),f=r(5787),l=r(6656),p=r(1574),h=r(8457),d=r(8710).codeAt,v=r(3611),y=r(8003),g=r(1637),m=r(9909),b=u.URL,w=g.URLSearchParams,x=g.getState,S=m.set,A=m.getterFor("URL"),k=Math.floor,O=Math.pow,E="Invalid scheme",_="Invalid host",I="Invalid port",j=/[A-Za-z]/,F=/[\\d+\\-.A-Za-z]/,T=/\\d/,P=/^(0x|0X)/,R=/^[0-7]+$/,M=/^\\d+$/,D=/^[\\dA-Fa-f]+$/,L=/[\\u0000\\u0009\\u000A\\u000D #%/:?@[\\\\]]/,N=/[\\u0000\\u0009\\u000A\\u000D #/:?@[\\\\]]/,B=/^[\\u0000-\\u001F ]+|[\\u0000-\\u001F ]+$/g,U=/[\\u0009\\u000A\\u000D]/g,C=function(t,e){var r,n,o;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return _;if(!(r=W(e.slice(1,-1))))return _;t.host=r}else if($(t)){if(e=v(e),L.test(e))return _;if(null===(r=J(e)))return _;t.host=r}else{if(N.test(e))return _;for(r="",n=h(e),o=0;o<n.length;o++)r+=Y(n[o],q);t.host=r}},J=function(t){var e,r,n,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),(e=c.length)>4)return t;for(r=[],n=0;n<e;n++){if(""==(o=c[n]))return t;if(i=10,o.length>1&&"0"==o.charAt(0)&&(i=P.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?M:8==i?R:D).test(o))return t;a=parseInt(o,i)}r.push(a)}for(n=0;n<e;n++)if(a=r[n],n==e-1){if(a>=O(256,5-e))return null}else if(a>255)return null;for(u=r.pop(),n=0;n<r.length;n++)u+=r[n]*O(256,3-n);return u},W=function(t){var e,r,n,o,i,a,u,c=[0,0,0,0,0,0,0,0],s=0,f=null,l=0,p=function(){return t.charAt(l)};if(":"==p()){if(":"!=t.charAt(1))return;l+=2,f=++s}for(;p();){if(8==s)return;if(":"!=p()){for(e=r=0;r<4&&D.test(p());)e=16*e+parseInt(p(),16),l++,r++;if("."==p()){if(0==r)return;if(l-=r,s>6)return;for(n=0;p();){if(o=null,n>0){if(!("."==p()&&n<4))return;l++}if(!T.test(p()))return;for(;T.test(p());){if(i=parseInt(p(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(o>255)return;l++}c[s]=256*c[s]+o,2!=++n&&4!=n||s++}if(4!=n)return;break}if(":"==p()){if(l++,!p())return}else if(p())return;c[s++]=e}else{if(null!==f)return;l++,f=++s}}if(null!==f)for(a=s-f,s=7;0!=s&&a>0;)u=c[s],c[s--]=c[f+a-1],c[f+--a]=u;else if(8!=s)return;return c},V=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)e.unshift(t%256),t=k(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=i),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=t[r].toString(16),r<7&&(e+=":")));return"["+e+"]"}return t},q={},z=p({},q,{" ":1,\'"\':1,"<":1,">":1,"`":1}),G=p({},z,{"#":1,"?":1,"{":1,"}":1}),H=p({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\\\":1,"]":1,"^":1,"|":1}),Y=function(t,e){var r=d(t,0);return r>32&&r<127&&!l(e,t)?t:encodeURIComponent(t)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},$=function(t){return l(X,t.scheme)},K=function(t){return""!=t.username||""!=t.password},Q=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},Z=function(t,e){var r;return 2==t.length&&j.test(t.charAt(0))&&(":"==(r=t.charAt(1))||!e&&"|"==r)},tt=function(t){var e;return t.length>1&&Z(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\\\"===e||"?"===e||"#"===e)},et=function(t){var e=t.path,r=e.length;!r||"file"==t.scheme&&1==r&&Z(e[0],!0)||e.pop()},rt=function(t){return"."===t||"%2e"===t.toLowerCase()},nt={},ot={},it={},at={},ut={},ct={},st={},ft={},lt={},pt={},ht={},dt={},vt={},yt={},gt={},mt={},bt={},wt={},xt={},St={},At={},kt=function(t,e,r,o){var i,a,u,c,s,f=r||nt,p=0,d="",v=!1,y=!1,g=!1;for(r||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(B,"")),e=e.replace(U,""),i=h(e);p<=i.length;){switch(a=i[p],f){case nt:if(!a||!j.test(a)){if(r)return E;f=it;continue}d+=a.toLowerCase(),f=ot;break;case ot:if(a&&(F.test(a)||"+"==a||"-"==a||"."==a))d+=a.toLowerCase();else{if(":"!=a){if(r)return E;d="",f=it,p=0;continue}if(r&&($(t)!=l(X,d)||"file"==d&&(K(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=d,r)return void($(t)&&X[t.scheme]==t.port&&(t.port=null));d="","file"==t.scheme?f=yt:$(t)&&o&&o.scheme==t.scheme?f=at:$(t)?f=ft:"/"==i[p+1]?(f=ut,p++):(t.cannotBeABaseURL=!0,t.path.push(""),f=xt)}break;case it:if(!o||o.cannotBeABaseURL&&"#"!=a)return E;if(o.cannotBeABaseURL&&"#"==a){t.scheme=o.scheme,t.path=o.path.slice(),t.query=o.query,t.fragment="",t.cannotBeABaseURL=!0,f=At;break}f="file"==o.scheme?yt:ct;continue;case at:if("/"!=a||"/"!=i[p+1]){f=ct;continue}f=lt,p++;break;case ut:if("/"==a){f=pt;break}f=wt;continue;case ct:if(t.scheme=o.scheme,a==n)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query;else if("/"==a||"\\\\"==a&&$(t))f=st;else if("?"==a)t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.path.pop(),f=wt;continue}t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}break;case st:if(!$(t)||"/"!=a&&"\\\\"!=a){if("/"!=a){t.username=o.username,t.password=o.password,t.host=o.host,t.port=o.port,f=wt;continue}f=pt}else f=lt;break;case ft:if(f=lt,"/"!=a||"/"!=d.charAt(p+1))continue;p++;break;case lt:if("/"!=a&&"\\\\"!=a){f=pt;continue}break;case pt:if("@"==a){v&&(d="%40"+d),v=!0,u=h(d);for(var m=0;m<u.length;m++){var b=u[m];if(":"!=b||g){var w=Y(b,H);g?t.password+=w:t.username+=w}else g=!0}d=""}else if(a==n||"/"==a||"?"==a||"#"==a||"\\\\"==a&&$(t)){if(v&&""==d)return"Invalid authority";p-=h(d).length+1,d="",f=ht}else d+=a;break;case ht:case dt:if(r&&"file"==t.scheme){f=mt;continue}if(":"!=a||y){if(a==n||"/"==a||"?"==a||"#"==a||"\\\\"==a&&$(t)){if($(t)&&""==d)return _;if(r&&""==d&&(K(t)||null!==t.port))return;if(c=C(t,d))return c;if(d="",f=bt,r)return;continue}"["==a?y=!0:"]"==a&&(y=!1),d+=a}else{if(""==d)return _;if(c=C(t,d))return c;if(d="",f=vt,r==dt)return}break;case vt:if(!T.test(a)){if(a==n||"/"==a||"?"==a||"#"==a||"\\\\"==a&&$(t)||r){if(""!=d){var x=parseInt(d,10);if(x>65535)return I;t.port=$(t)&&x===X[t.scheme]?null:x,d=""}if(r)return;f=bt;continue}return I}d+=a;break;case yt:if(t.scheme="file","/"==a||"\\\\"==a)f=gt;else{if(!o||"file"!=o.scheme){f=wt;continue}if(a==n)t.host=o.host,t.path=o.path.slice(),t.query=o.query;else if("?"==a)t.host=o.host,t.path=o.path.slice(),t.query="",f=St;else{if("#"!=a){tt(i.slice(p).join(""))||(t.host=o.host,t.path=o.path.slice(),et(t)),f=wt;continue}t.host=o.host,t.path=o.path.slice(),t.query=o.query,t.fragment="",f=At}}break;case gt:if("/"==a||"\\\\"==a){f=mt;break}o&&"file"==o.scheme&&!tt(i.slice(p).join(""))&&(Z(o.path[0],!0)?t.path.push(o.path[0]):t.host=o.host),f=wt;continue;case mt:if(a==n||"/"==a||"\\\\"==a||"?"==a||"#"==a){if(!r&&Z(d))f=wt;else if(""==d){if(t.host="",r)return;f=bt}else{if(c=C(t,d))return c;if("localhost"==t.host&&(t.host=""),r)return;d="",f=bt}continue}d+=a;break;case bt:if($(t)){if(f=wt,"/"!=a&&"\\\\"!=a)continue}else if(r||"?"!=a)if(r||"#"!=a){if(a!=n&&(f=wt,"/"!=a))continue}else t.fragment="",f=At;else t.query="",f=St;break;case wt:if(a==n||"/"==a||"\\\\"==a&&$(t)||!r&&("?"==a||"#"==a)){if(".."===(s=(s=d).toLowerCase())||"%2e."===s||".%2e"===s||"%2e%2e"===s?(et(t),"/"==a||"\\\\"==a&&$(t)||t.path.push("")):rt(d)?"/"==a||"\\\\"==a&&$(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&Z(d)&&(t.host&&(t.host=""),d=d.charAt(0)+":"),t.path.push(d)),d="","file"==t.scheme&&(a==n||"?"==a||"#"==a))for(;t.path.length>1&&""===t.path[0];)t.path.shift();"?"==a?(t.query="",f=St):"#"==a&&(t.fragment="",f=At)}else d+=Y(a,G);break;case xt:"?"==a?(t.query="",f=St):"#"==a?(t.fragment="",f=At):a!=n&&(t.path[0]+=Y(a,q));break;case St:r||"#"!=a?a!=n&&("\'"==a&&$(t)?t.query+="%27":t.query+="#"==a?"%23":Y(a,q)):(t.fragment="",f=At);break;case At:a!=n&&(t.fragment+=Y(a,z))}p++}},Ot=function(t){var e,r,n=f(this,Ot,"URL"),o=arguments.length>1?arguments[1]:void 0,a=String(t),u=S(n,{type:"URL"});if(void 0!==o)if(o instanceof Ot)e=A(o);else if(r=kt(e={},String(o)))throw TypeError(r);if(r=kt(u,a,null,e))throw TypeError(r);var c=u.searchParams=new w,s=x(c);s.updateSearchParams(u.query),s.updateURL=function(){u.query=String(c)||null},i||(n.href=_t.call(n),n.origin=It.call(n),n.protocol=jt.call(n),n.username=Ft.call(n),n.password=Tt.call(n),n.host=Pt.call(n),n.hostname=Rt.call(n),n.port=Mt.call(n),n.pathname=Dt.call(n),n.search=Lt.call(n),n.searchParams=Nt.call(n),n.hash=Bt.call(n))},Et=Ot.prototype,_t=function(){var t=A(this),e=t.scheme,r=t.username,n=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,s=e+":";return null!==o?(s+="//",K(t)&&(s+=r+(n?":"+n:"")+"@"),s+=V(o),null!==i&&(s+=":"+i)):"file"==e&&(s+="//"),s+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(s+="?"+u),null!==c&&(s+="#"+c),s},It=function(){var t=A(this),e=t.scheme,r=t.port;if("blob"==e)try{return new URL(e.path[0]).origin}catch(t){return"null"}return"file"!=e&&$(t)?e+"://"+V(t.host)+(null!==r?":"+r:""):"null"},jt=function(){return A(this).scheme+":"},Ft=function(){return A(this).username},Tt=function(){return A(this).password},Pt=function(){var t=A(this),e=t.host,r=t.port;return null===e?"":null===r?V(e):V(e)+":"+r},Rt=function(){var t=A(this).host;return null===t?"":V(t)},Mt=function(){var t=A(this).port;return null===t?"":String(t)},Dt=function(){var t=A(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},Lt=function(){var t=A(this).query;return t?"?"+t:""},Nt=function(){return A(this).searchParams},Bt=function(){var t=A(this).fragment;return t?"#"+t:""},Ut=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(i&&c(Et,{href:Ut(_t,(function(t){var e=A(this),r=String(t),n=kt(e,r);if(n)throw TypeError(n);x(e.searchParams).updateSearchParams(e.query)})),origin:Ut(It),protocol:Ut(jt,(function(t){var e=A(this);kt(e,String(t)+":",nt)})),username:Ut(Ft,(function(t){var e=A(this),r=h(String(t));if(!Q(e)){e.username="";for(var n=0;n<r.length;n++)e.username+=Y(r[n],H)}})),password:Ut(Tt,(function(t){var e=A(this),r=h(String(t));if(!Q(e)){e.password="";for(var n=0;n<r.length;n++)e.password+=Y(r[n],H)}})),host:Ut(Pt,(function(t){var e=A(this);e.cannotBeABaseURL||kt(e,String(t),ht)})),hostname:Ut(Rt,(function(t){var e=A(this);e.cannotBeABaseURL||kt(e,String(t),dt)})),port:Ut(Mt,(function(t){var e=A(this);Q(e)||(""==(t=String(t))?e.port=null:kt(e,t,vt))})),pathname:Ut(Dt,(function(t){var e=A(this);e.cannotBeABaseURL||(e.path=[],kt(e,t+"",bt))})),search:Ut(Lt,(function(t){var e=A(this);""==(t=String(t))?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",kt(e,t,St)),x(e.searchParams).updateSearchParams(e.query)})),searchParams:Ut(Nt),hash:Ut(Bt,(function(t){var e=A(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",kt(e,t,At)):e.fragment=null}))}),s(Et,"toJSON",(function(){return _t.call(this)}),{enumerable:!0}),s(Et,"toString",(function(){return _t.call(this)}),{enumerable:!0}),b){var Ct=b.createObjectURL,Jt=b.revokeObjectURL;Ct&&s(Ot,"createObjectURL",(function(t){return Ct.apply(b,arguments)})),Jt&&s(Ot,"revokeObjectURL",(function(t){return Jt.apply(b,arguments)}))}y(Ot,"URL"),o({global:!0,forced:!a,sham:!i},{URL:Ot})},3753:function(t,e,r){"use strict";r(2109)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},4301:function(t,e,r){r(7147),t.exports=self.fetch.bind(self)},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function g(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,i)&&(b=x);var S=m.prototype=y.prototype=Object.create(b);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a \'throw\' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=S.constructor=m,m.constructor=g,g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(S),c(S,u,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},7147:function(t,e,r){"use strict";r.r(e),r.d(e,{Headers:function(){return d},Request:function(){return x},Response:function(){return A},DOMException:function(){return O},fetch:function(){return E}});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,a="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),u="FormData"in n,c="ArrayBuffer"in n;if(c)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError(\'Invalid character in header field name: "\'+t+\'"\');return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function v(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function g(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:a&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:u&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&a&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},a&&(this.blob=function(){var t=v(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=v(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(g)}),this.text=function(){var t,e,r,n=v(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=y(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u&&(this.formData=function(){return this.text().then(S)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=l(t),e=p(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[l(t)]},d.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},d.prototype.set=function(t,e){this.map[l(t)]=p(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),h(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),h(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),h(t)},i&&(d.prototype[Symbol.iterator]=d.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(t,e){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r,n,o=(e=e||{}).body;if(t instanceof x){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function S(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\\+/g," "),o=r.join("=").replace(/\\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},b.call(x.prototype),b.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var k=[301,302,303,307,308];A.redirect=function(t,e){if(-1===k.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var O=n.DOMException;try{new O}catch(t){(O=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),O.prototype.constructor=O}function E(t,e){return new Promise((function(r,o){var i=new x(t,e);if(i.signal&&i.signal.aborted)return o(new O("Aborted","AbortError"));var u=new XMLHttpRequest;function s(){u.abort()}u.onload=function(){var t,e,n={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new d,t.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(t){return 0===t.indexOf("\\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in u?u.responseURL:n.headers.get("X-Request-URL");var o="response"in u?u.response:u.responseText;setTimeout((function(){r(new A(o,n))}),0)},u.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},u.onabort=function(){setTimeout((function(){o(new O("Aborted","AbortError"))}),0)},u.open(i.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?u.withCredentials=!0:"omit"===i.credentials&&(u.withCredentials=!1),"responseType"in u&&(a?u.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(u.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof d?i.headers.forEach((function(t,e){u.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){u.setRequestHeader(t,p(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",s),u.onreadystatechange=function(){4===u.readyState&&i.signal.removeEventListener("abort",s)}),u.send(void 0===i._bodyInit?null:i._bodyInit)}))}E.polyfill=!0,n.fetch||(n.fetch=E,n.Headers=d,n.Request=x,n.Response=A)},4643:function(t){t.exports="bc328c2fa7141274"},7673:function(t){t.exports="824dce86b3210ff0"},1117:function(t){t.exports="5c34320c337b6b52"},5349:function(t){t.exports="114c75444fbeac4e"},2380:function(t){function e(t){var e=new Error("Cannot find module \'"+t+"\'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=2380,t.exports=e}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function n(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}var a=r(7757),u=r.n(a);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}r(2526),r(1817),r(2443),r(2401),r(8722),r(2165),r(9007),r(3510),r(1840),r(6982),r(2159),r(6649),r(9341),r(543),r(2222),r(545),r(3290),r(7327),r(9826),r(4553),r(4944),r(6535),r(1038),r(6699),r(6992),r(9600),r(1249),r(6572),r(7042),r(2707),r(8706),r(561),r(3792),r(9244),r(8264),r(6078),r(4855),r(8309),r(3706),r(1532),r(9752),r(2376),r(3181),r(3484),r(2388),r(8621),r(403),r(4755),r(5438),r(332),r(658),r(197),r(4914),r(2420),r(160),r(970),r(2703),r(3689),r(9653),r(3299),r(5192),r(3161),r(4048),r(8285),r(4363),r(5994),r(1874),r(9494),r(6977),r(9601),r(9595),r(5500),r(9720),r(3371),r(8559),r(5003),r(9337),r(6210),r(489),r(3304),r(1825),r(8410),r(2200),r(7941),r(4869),r(3952),r(7227),r(514),r(1539),r(6833),r(4678),r(1058),r(8674),r(7727),r(224),r(2419),r(9596),r(2586),r(4819),r(5683),r(9361),r(1037),r(5898),r(7556),r(4361),r(3593),r(9532),r(4603),r(4916),r(2087),r(9714),r(189),r(9841),r(7852),r(4953),r(2023),r(8783),r(4723),r(6528),r(3112),r(8992),r(2481),r(5306),r(4765),r(3123),r(6755),r(3210),r(8702),r(5674),r(5218),r(4475),r(7929),r(915),r(9253),r(2125),r(8830),r(8734),r(9254),r(7268),r(7397),r(86),r(623),r(4197),r(6495),r(7145),r(5109),r(5125),r(2472),r(9743),r(8255),r(9135),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(8145),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(5206),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),r(4129),r(8478),r(4747),r(3948),r(4633),r(5844),r(285),r(3753),r(1637),r(4301),r(7932),r(5666);"object"==("undefined"==typeof window?"undefined":c(window))&&(window._babelPolyfill=!1);var s=function t(e){var r;return r=e instanceof Error?e:new Error(e),Object.setPrototypeOf(r,t.prototype),r};s.prototype=Object.create(Error.prototype,{name:{value:"PSPDFKitError",enumerable:!1}});var f=s;function l(t,e){if(!t)throw new f("Assertion failed: ".concat(e||"Condition not met","\\n\\nFor further assistance, please go to: https://pspdfkit.com/support/request"))}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){console.log(t)}function v(t){console.warn(t)}function y(t){console.error(t)}["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",\'[tabindex]:not([tabindex^="-"])\'].join(",");function g(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||e(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return t.indexOf("Trident/")>-1?"trident":t.indexOf("Edge/")>-1?"edge":t.indexOf("Chrome/")>-1?"blink":t.indexOf("AppleWebKit/")>-1?"webkit":t.indexOf("Gecko/")>-1?"gecko":"unknown"}function b(t,e){var r,n=new RegExp(" ".concat(e,"/(\\\\d+)\\\\.*"));return(r=t.match(n))?Number(r[1]):0}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.platform,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:navigator.maxTouchPoints;return e.indexOf("MacIntel")>-1&&r>1?"ios":t.indexOf("Win")>-1?"windows":t.indexOf("iPhone")>-1||t.indexOf("iPad")>-1?"ios":t.indexOf("Mac")>-1?"macos":t.indexOf("Android")>-1?"android":t.indexOf("Linux")>-1?"linux":"unknown"}var x=m(),S=w(),A=(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;switch(m(t)){case"trident":return b(t,"Trident");case"edge":return b(t,"Edge");case"blink":return b(t,"Chrome");case"webkit":return b(t,"Version");case"gecko":return b(t,"Firefox");default:;}}(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m();"ios"===t||"android"===t||k(e)}(),"trident"===x);"ios"===S||k();function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m();return("undefined"==typeof window||!window.PSPDFKIT_PLAYWRIGHT_TEST)&&("webkit"===t&&"undefined"!=typeof TouchEvent)}"undefined"!=typeof window&&(window.addEventListener("mousemove",(function t(){!1,window.removeEventListener("mousemove",t)})),window.addEventListener("pointermove",(function t(e){"mouse"!==e.pointerType&&"pen"!==e.pointerType||!1,window.removeEventListener("pointermove",t)})));var O=r(1117),E=r.n(O),_=r(5349),I=r.n(_),j=r(4643),F=r.n(j),T=r(7673),P=r.n(T),R="".concat("pspdfkit-lib","/"),M="".concat(R,"pspdfkit").concat("-"+I(),".wasm.js"),D="".concat(R,"pspdfkit").concat("-"+E(),".wasm"),L="".concat(R,"pspdfkit").concat("-"+F(),".asm.js"),N="".concat(R,"pspdfkit").concat("-"+P(),".asm.js.mem");function B(t){try{if(/Version\\/11\\..*Safari/i.test(t.navigator.userAgent))return!1}catch(t){}return"object"===c(t.WebAssembly)&&"function"==typeof t.WebAssembly.instantiate}function U(t,e,r){var n=r?{BUNDLE:"pspdfkit-lib",VERSION:"2022.4.3",REVISION:"d398572958",SERVER_PROTOCOL:4,HOSTED_CLOUD_PROTOCOL:1,INTERNAL_DEBUG:!1,STANDALONE_NATIVE:!1,STANDALONE_NATIVE_WINUI3:!1,WASM_IN_MAIN_THREAD:!1}.WASM_FILESIZE:{BUNDLE:"pspdfkit-lib",VERSION:"2022.4.3",REVISION:"d398572958",SERVER_PROTOCOL:4,HOSTED_CLOUD_PROTOCOL:1,INTERNAL_DEBUG:!1,STANDALONE_NATIVE:!1,STANDALONE_NATIVE_WINUI3:!1,WASM_IN_MAIN_THREAD:!1}.ASM_FILESIZE,o={wasmBinaryFile:t+D,locateFile:function(e){return"pspdfkit.asm.js.mem"===e?t+N:e},wasmBinary:undefined};if(r){var a=fetch(o.wasmBinaryFile,{credentials:"same-origin"});a.then((function(t){var e=t.headers.get("content-length");return e&&parseInt(e)>=n&&v("The WASM binary file is being served without compression. Due to its size, it\'s recommended to configure the server so application/wasm files are served with compression.\\n\\nFind more details in our Standalone performance guides: https://pspdfkit.com/guides/web/best-practices/performance/#standalone-performance"),t})).catch((function(t){throw new Error("Failed to load WASM binary file: ".concat(t))})),o.instantiateWasm=function(t,r){return i(u().mark((function n(){var i,c,s,f,l,p,h;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=function(){return a.then((function(t){if(!t.ok)throw new Error("Error loading ".concat(o.wasmBinaryFile,": ").concat(t.statusText));return t.arrayBuffer()})).then((function(e){return s=Date.now(),d("Download complete, took: ".concat(s-i,"ms")),WebAssembly.instantiate(new Uint8Array(e),t)}))},d("Start ".concat(o.wasmBinaryFile," download.")),i=Date.now(),(f=!e&&"function"==typeof WebAssembly.instantiateStreaming)?("edge"===x&&(p=WebAssembly.instantiateStreaming,WebAssembly.instantiateStreaming=function(t,e){return Promise.resolve(t).then((function(t){return p(t,e)}))}),c=WebAssembly.instantiateStreaming(a,t).then((function(t){return s=Date.now(),d("Download and Instantiation complete, took: ".concat(Date.now()-i,"ms")),t})).catch((function(t){if(/mime.*type/i.test(t.message))return y(t.message),null;throw t}))):c=l(),n.next=7,c;case 7:if(null!==(h=n.sent)){n.next=13;break}return y("Streaming instantiation failed! Falling back to classic instantiation. This might result in slower initialization time therefore we highly recommend to follow the troubleshooting instructions in our guides to fix this error: https://pspdfkit.com/guides/web/current/troubleshooting/common-issues/#response-has-unsupported-mime-type-error."),n.next=12,l();case 12:h=n.sent;case 13:!f&&s&&d("Compilation and Instantiation complete, took: ".concat(Date.now()-s,"ms")),r(h.instance,h.module);case 15:case"end":return n.stop()}}),n)})))(),{}}}return o}function C(t,e){t.PSPDFLoggingServices={error:function(t,e){y("[".concat(t,"] ").concat(e))},warn:function(t,e){v("[".concat(t,"] ").concat(e))},info:function(t,e){0},debug:function(t,e){0},trace:function(t,e){0}},t.BEEE5011DDCD4E47A799CDE7C2262CE6={stats:function(t){var r=JSON.parse(t);return r.bundle_id=function(t){var e;e=t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0];return e=(e=(e=(e=e.split(":")[0]).split("?")[0]).split("#")[0]).split("/")[0]}(e),r.pspdf_version="2022.4.3",r.system_version=navigator.userAgent,r.preferred_locale=navigator.language,JSON.stringify(r)}}}function J(t){return"object"===("undefined"==typeof process?"undefined":c(process))&&"object"===c(process.versions)&&void 0!==process.versions.node?Promise.resolve(r(2380)(t)):"object"===("undefined"==typeof window?"undefined":c(window))?new Promise((function(e,r){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.onload=function(){return e(window.PSPDFModuleInit)},n.onerror=r,n.src=t;var o=document.documentElement;l(o),o.appendChild(n)})):(self.importScripts(t),Promise.resolve(self.PSPDFModuleInit))}function W(t){var e=new FileReader;return new Promise((function(r,n){e.onerror=function(t){n(new Error(t))},e.onload=function(t){var e;r(new Uint8Array(null===(e=t.target)||void 0===e?void 0:e.result))},e.readAsArrayBuffer(t)}))}var V="text",q="documentA",z="documentB",G="result";function H(t){for(var e,r="",n=t.length,o=0;o<n;o++)e=t[o],r+=String.fromCodePoint(e>251&&e<254&&o+5<n?1073741824*(e-252)+(t[++o]-128<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>247&&e<252&&o+4<n?(e-248<<24)+(t[++o]-128<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>239&&e<248&&o+3<n?(e-240<<18)+(t[++o]-128<<12)+(t[++o]-128<<6)+t[++o]-128:e>223&&e<240&&o+2<n?(e-224<<12)+(t[++o]-128<<6)+t[++o]-128:e>191&&e<224&&o+1<n?(e-192<<6)+t[++o]-128:e);return r}function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $="/create.pdf",K="/save.pdf",Q="/embedded.pdf",Z="WebAssembly/asm.js module not loaded.",tt=null,et=!1,rt=!1,nt=null,ot=[],it=null,at=null;function ut(t){return null!=t&&null!=t.length&&0===t.length}var ct=["configurePDFJavaScriptSupport","closeDocument","setFormValues","openDocument","saveDocument","importXFDF","importInstantDocumentJSON"];function st(t){var e;l(tt,"WebAssembly/asm.js module not loaded.");for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=o.map((function(t){return ut(t)?JSON.stringify(t):t}));ct.includes(t)&&kt();var u=(e=tt)[t].apply(e,n(a))||\'{ "success": true }\',c=JSON.parse(u);if(!c.success)throw new Error(c.error);return c}function ft(t){var e;l(tt,"WebAssembly/asm.js module not loaded.");for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];ct.includes(t)&&kt();var a=o.map((function(t){return ut(t)?JSON.stringify(t):t})),u=(e=tt)[t].apply(e,n(a));return u}var lt=["run_pdf_formatting_scripts","run_pdf_javascript","set_form_values_get_script_changes","edit_document","prepare_sign_invisible","sign","on_keystroke_event","save_document"];function pt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(tt,"WebAssembly/asm.js module not loaded.");var r=JSON.stringify(X({type:t},e));lt.includes(t)&&kt();var n=tt.dispatchCommand(r);if(n.hasError()){var o=new Error(n.getErrorMessage()||"There was an error while executing the command: "+t);throw n.delete(),o}for(var i=[],a=0;a<n.getRepliesCount();a++)n.hasJSONReply(a)&&i.push(JSON.parse(n.getJSONReply(a))),n.hasBinaryReply(a)&&i.push(n.getBinaryReply(a).slice(0));return n.delete(),i}function ht(t,e){return"".concat(t,"/").concat(e,".pdf")}function dt(t,e,r){return l(tt,Z),tt.FS.analyzePath(t).exists||tt.FS.mkdir(t),tt.FS.writeFile(ht(t,e),r),e}function vt(t,e){l(tt,Z),tt.FS.unlink(ht(t,e))}function yt(t,e){return gt.apply(this,arguments)}function gt(){return gt=i(u().mark((function t(e,r){var n,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.random().toString(36).slice(-5),t.next=3,Promise.all(Object.entries(r).map(function(){var t=i(u().mark((function t(r){var o,i,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=g(r,2),i=o[0],a=o[1],e.forEach((function(t){t.document===i&&"importDocument"===t.type?(!1===t.treatImportedDocumentAsOnePage&&(t.treatImportedDocumentAsOnePage=void 0),t.document=ht(n,i)):(t.dataFilePath===i&&"applyInstantJson"===t.type||t.dataFilePath===i&&"applyXfdf"===t.type)&&(t.dataFilePath=ht(n,i))})),t.t0=i,t.next=5,W(a);case 5:return t.t1=t.sent,t.abrupt("return",{basename:t.t0,buffer:t.t1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:return(o=t.sent).forEach((function(t){dt(n,t.basename,t.buffer)})),t.abrupt("return",(function(){o.forEach((function(t){vt(n,t.basename)}))}));case 6:case"end":return t.stop()}}),t)}))),gt.apply(this,arguments)}function mt(t,e){l(tt,Z),tt.FS.mkdir(e),tt.FS.mount(tt.FS.filesystems.WORKERFS,{blobs:t},e)}function bt(){rt=!0;var t=st("configurePDFJavaScriptSupport",!0);return l(t.success,"An error occurred while executing the document level JavaScript."),t.changes||[]}function wt(t,e){var r;try{r=pt("edit_document",{save_path:e,operations:t})}catch(t){throw new Error("Error applying operations to document: ".concat(t.message))}return r}var xt,St=null,At=!1;function kt(){At||(St=null,xt=!1)}function Ot(t){At&&!t&&(At=!1,St&&_t(St)),At=t}function Et(){return null===St&&(St=pt("read_form_json_objects"),xt=!1),St}function _t(t){var e;if(At){if(null===t)throw At=!1,new Error("Error enqueuing form JSON objects: form fields JSON is null.");return St&&!xt&&(xt=!0),void(St=t)}if(xt||!At){try{kt(),e=pt("apply_form_json_objects",{form_fields_with_widgets:t})}catch(t){throw new Error("Error applying form JSON objects to /create.pdf: "+t.message)}return e}}function It(t,e,r,n,o){var i,a;l("number"==typeof t.pageIndex,"Annotation must have a pageIndex");try{if(l("number"==typeof t.pdfObjectId,"Cannot call renderAnnotation() for an annotation without pdfObjectId."),(a=ft("renderAnnotation",o,t.pdfObjectId,t.pageIndex,0,r,n)).hasError()||1!==a.getRepliesCount()){var u=a.getErrorMessage(),c=a.getErrorReason();throw new Error(c+": "+u)}i=a.getBinaryReply(0).slice(0)}catch(t){v(t.message)}finally{a&&a.delete()}return i}function jt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.push("pspdfkit/widget"),st("removeAllAnnotations",JSON.stringify(t),JSON.stringify(e))}var Ft=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_pdfObjectIdsForIds",{}),h(this,"comparisonDocuments",{}),h(this,"lastOpenedComparisonDocument",null),h(this,"persistedOpenDocument",null)}var e,r,o,a,c,s,g,m,b,w,x,S,k,O,E,_,I,j,F,T,P,R,D,N,Y,ut,ct,lt,ht,dt,vt,gt,xt,St,At,Ft,Pt,Rt,Mt,Dt,Lt,Nt,Bt,Ut,Ct,Jt,Wt,Vt,qt,zt,Gt,Ht,Yt,Xt,$t,Kt,Qt,Zt,te,ee,re,ne,oe,ie,ae;return e=t,r=[{key:"loadNativeModule",value:function(t,e){var r=e.mainThreadOrigin,n=e.disableWebAssembly,o=e.disableWebAssemblyStreaming,a=e.enableAutomaticLinkExtraction,c=e.overrideMemoryLimit;return at=Date.now(),et=a,nt=c,function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:self;return new Promise(function(){var a=i(u().mark((function i(a){var c,s,f,l,p,h;return u().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(c=!r&&B(o),s=U(t,n,c),!c){i.next=8;break}return i.next=5,J("".concat(t).concat(M));case 5:i.t0=i.sent,i.next=11;break;case 8:return i.next=10,J("".concat(t).concat(L));case 10:i.t0=i.sent;case 11:return f=i.t0,d("Using ".concat(c?"WASM":"ASM.js"," method")),C(o,e),i.next=16,f(s);case 16:l=i.sent,a({nativeModule:l}),void 0!==o.crypto||(p=l.FS,h=function(){return 256*Math.random()|0},p.unlink("/dev/random"),p.unlink("/dev/urandom"),p.createDevice("/dev","random",h),p.createDevice("/dev","urandom",h));case 20:case"end":return i.stop()}}),i)})));return function(t){return a.apply(this,arguments)}}())}(t,r,n,o).then((function(t){var e=t.nativeModule;tt=e;var r=st("PSPDFKitVersion").version;if(1!==r)throw new Error("Native version mismatch. Please update the dependencies. Expected ".concat(1," but got ").concat(r,"."))}))}},{key:"load",value:(ae=i(u().mark((function t(e,r,n){var o,i,a,c,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=n.mainThreadOrigin,i=n.customFonts,l(tt,Z),t.prev=2,c=i?"/fonts":"",i&&!tt.FS.analyzePath(c).exists&&mt(i,c),a=tt.initPSPDFKit(null==r?"":r,o,c,""),t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(2),void 0!==t.t0.message||!A){t.next=12;break}return t.abrupt("return");case 12:throw t.t0;case 13:if(s=JSON.parse(a),at&&d("Native initialization complete, took: ".concat(Date.now()-at,"ms")),s.success){t.next=17;break}throw new Error("Failed to initialize PSPDFKit: "+s.error);case 17:return t.abrupt("return",s);case 18:case"end":return t.stop()}}),t,null,[[2,8]])}))),function(t,e,r){return ae.apply(this,arguments)})},{key:"openDocument",value:(ie=i(u().mark((function t(e,r,n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(tt,Z),null!==nt&&st("overrideMemoryLimit",nt),it=r,tt.FS.writeFile($,new Uint8Array(e)),t.abrupt("return",this.openAndReturnDocumentInfo(n));case 6:return t.prev=6,this._pdfObjectIdsForIds={},t.finish(6);case 9:case"end":return t.stop()}}),t,this,[[0,,6,9]])}))),function(t,e,r){return ie.apply(this,arguments)})},{key:"reloadDocument",value:(oe=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,st("closeDocument"),t.abrupt("return",this.openAndReturnDocumentInfo());case 3:return t.prev=3,this._pdfObjectIdsForIds={},t.finish(3);case 6:case"end":return t.stop()}}),t,this,[[0,,3,6]])}))),function(){return oe.apply(this,arguments)})},{key:"openAndReturnDocumentInfo",value:(ne=i(u().mark((function t(e){var r,n,o,i,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(st("openDocument",$,JSON.stringify({password:it})),rt&&bt(),st("automaticLinkExtraction",et),!((r=st("getDocumentInfo").documentInfo).pageCount<=0)){t.next=6;break}return t.abrupt("return",r);case 6:if(n=[],"number"!=typeof e){t.next=14;break}return t.next=10,this.getPageInfo(e);case 10:for(o=t.sent,i=0;i<r.pageCount;i++)a=X(X({},o),{},{pageIndex:i,pageLabel:e===i?o.pageLabel:String(i+1)}),n.push(a);t.next=17;break;case 14:return t.next=16,this.getAllPageInfos(r.pageCount);case 16:n=t.sent;case 17:return r.pages=n,t.abrupt("return",r);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return ne.apply(this,arguments)})},{key:"getPageInfo",value:(re=i(u().mark((function t(e){var r,n,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(1===(r=pt("page_info",{query:"page_info",page:e})).length,"expected page_info result to return 1 result when specifying index."),n=H(r[0]),o=JSON.parse(n),t.abrupt("return",o.pageInfo);case 8:return t.prev=8,t.t0=t.catch(0),y("Dimensional information for page ".concat(e," unavailable, page will not be displayed.")),i={height:0,matrix:[0,0,0,0,0,0],pageLabel:"",reverseMatrix:[0,0,0,0,0,0],transformedBBox:[0,0,0,0],untransformedBBox:[0,0,0,0],width:0,pageIndex:e,rawPdfBoxes:{bleedBox:null,cropBox:null,mediaBox:null,trimBox:null}},t.abrupt("return",i);case 13:case"end":return t.stop()}}),t,null,[[0,8]])}))),function(t){return re.apply(this,arguments)})},{key:"getAllPageInfos",value:(ee=i(u().mark((function t(e){var r,n,o,i,a,c,s,f,p,h;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[];try{for(l((n=pt("page_info",{query:"page_info",page:"all"})).length===e,"expected the same length of page info response to page count."),o=0;o<n.length;o++)i=H(n[o]),a=JSON.parse(i),r.push(a.pageInfo)}catch(t){for(y("There was an error retrieving page information for all pages from core. Reverting to individual queries."),c=0;c<e;c++)try{l(1===(s=pt("page_info",{query:"page_info",page:c})).length,"expected page_info result to return 1 result when specifying index."),f=H(s[0]),p=JSON.parse(f),r.push(p.pageInfo)}catch(t){y("Dimensional information for page ".concat(c," unavailable, page will not be displayed.")),h={height:0,matrix:[0,0,0,0,0,0],pageLabel:"",reverseMatrix:[0,0,0,0,0,0],transformedBBox:[0,0,0,0],untransformedBBox:[0,0,0,0],width:0,pageIndex:c,rawPdfBoxes:{bleedBox:null,cropBox:null,mediaBox:null,trimBox:null}},r.push(h)}}return t.abrupt("return",r);case 3:case"end":return t.stop()}}),t)}))),function(t){return ee.apply(this,arguments)})},{key:"enablePDFJavaScriptSupport",value:(te=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",bt());case 1:case"end":return t.stop()}}),t)}))),function(){return te.apply(this,arguments)})},{key:"runPDFFormattingScripts",value:(Zt=i(u().mark((function t(e,r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l(rt,"PDF Formatting Scripts can only run after JavaScript is enabled."),t.prev=1,n=pt("run_pdf_formatting_scripts",{form_fields:e,only_if_no_ap_stream:r}),t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(1),new Error("An error occurred while executing the document level JavaScript formatting.\\n\\n"+t.t0.message);case 8:return t.abrupt("return",n[0].changes||[]);case 9:case"end":return t.stop()}}),t,null,[[1,5]])}))),function(t,e){return Zt.apply(this,arguments)})},{key:"openDocumentAt",value:(Qt=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw new Error("Should never be called");case 1:case"end":return t.stop()}}),t)}))),function(){return Qt.apply(this,arguments)})},{key:"getBookmarks",value:(Kt=i(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(1===(e=pt("get_bookmarks")).length,"expected only one response for getBookmarks"),t.abrupt("return",e[0].bookmarks||[]);case 3:case"end":return t.stop()}}),t)}))),function(){return Kt.apply(this,arguments)})},{key:"getFormJSON",value:($t=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("getFormJSON").formJSON);case 1:case"end":return t.stop()}}),t)}))),function(){return $t.apply(this,arguments)})},{key:"getFormValues",value:(Xt=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("getFormValues").formValues);case 1:case"end":return t.stop()}}),t)}))),function(){return Xt.apply(this,arguments)})},{key:"setFormValues",value:(Yt=i(u().mark((function t(e){var r,n,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=Et(),n=!1,o=r.map((function(t){var r=e.find((function(e){return e.name===t.formField.name}));return r?r.value===t.value||Array.isArray(r.value)&&Array.isArray(t.value)&&r.value.every((function(e,r){return e===t.value[r]}))?t:(n=!0,X(X({},t),{},{value:r.value})):t})),n&&_t(o);case 4:case"end":return t.stop()}}),t)}))),function(t){return Yt.apply(this,arguments)})},{key:"setFormFieldValue",value:(Ht=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setFormValues([e]);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return Ht.apply(this,arguments)})},{key:"applyOperations",value:(Gt=i(u().mark((function t(e,r){var n,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,yt(e,r);case 2:return n=t.sent,o=wt(e,$),n(),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)}))),function(t,e){return Gt.apply(this,arguments)})},{key:"exportPDFWithOperations",value:(zt=i(u().mark((function t(e,r){var n,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,yt(e,r);case 2:n=t.sent,l(tt,Z),t.prev=4,wt(e,K),o=tt.FS.readFile(K).buffer,t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(4),new Error("Error applying operations: "+t.t0.message);case 12:return n(),t.abrupt("return",o);case 14:case"end":return t.stop()}}),t,null,[[4,9]])}))),function(t,e){return zt.apply(this,arguments)})},{key:"getSignaturesInfo",value:(qt=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",pt("get_signatures",{certificate_check_time:"current_time"})[0]);case 4:throw t.prev=4,t.t0=t.catch(0),new Error("Error getting signatures info: ".concat(t.t0.message));case 7:case"end":return t.stop()}}),t,null,[[0,4]])}))),function(){return qt.apply(this,arguments)})},{key:"prepareSignInvisible",value:(Vt=i(u().mark((function t(e,r){var n,o,i,a,c,s,f,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=!1,i=!1,a="pdf",t.prev=3,n=pt("get_signatures",{certificate_check_time:"current_time"})[0],c="not_signed"!==n.status,st("saveDocument",K,!1,c,o,i,a),st("openDocument",K,JSON.stringify({password:it})),t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(3),new Error("Error saving document backup for invisible signing: ".concat(t.t0));case 14:t.prev=14,s=!r&&"not_signed"!==n.status,st("saveDocument",$,r,s,o,i,a),r&&(st("openDocument",$,JSON.stringify({password:it})),rt&&bt()),t.next=23;break;case 20:throw t.prev=20,t.t1=t.catch(14),new Error("Error saving document for invisible signing: ".concat(t.t1));case 23:t.prev=23,f=pt("prepare_sign_invisible",{signer_data_source:X(X({},e),{},{type:"pspdfkit/signer-data-source"}),signature_metadata:{type:"pspdfkit/signature-metadata"}}),t.next=30;break;case 27:throw t.prev=27,t.t2=t.catch(23),new Error("Error preparing document for invisible signing: ".concat(t.t2));case 30:return l(tt,Z),p=tt.FS.readFile(f[0].result.file_contents).buffer,tt.FS.unlink(f[0].result.file_contents),t.abrupt("return",{file:f[0].result.file,hash:f[0].result.hash,signatureFormFieldName:f[0].result.signature_form_fqn,dataToBeSigned:f[0].result.data_to_be_signed,fileContents:p});case 34:case"end":return t.stop()}}),t,null,[[3,11],[14,20],[23,27]])}))),function(t,e){return Vt.apply(this,arguments)})},{key:"sign",value:(Wt=i(u().mark((function t(e,r,n){var o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,o=pt("sign",{password:it,save_path:$,file_path:e,signature_form_fqn:r,pkcs7_container:n}),st("openDocument",$,JSON.stringify({password:it})),rt&&bt(),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error("Error signing document: ".concat(t.t0));case 9:return t.abrupt("return",o[0].result);case 10:case"end":return t.stop()}}),t,null,[[0,6]])}))),function(t,e,r){return Wt.apply(this,arguments)})},{key:"restoreToOriginalState",value:(Jt=i(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,st("openDocument",K,JSON.stringify({password:it})),rt&&bt(),e=pt("get_signatures",{certificate_check_time:"current_time"})[0],r="not_signed"!==e.status,st("saveDocument",$,!1,r,!1,!1,"pdf"),st("openDocument",$,JSON.stringify({password:it})),rt&&bt(),t.next=17;break;case 14:throw t.prev=14,t.t0=t.catch(0),new Error("Could not restore backup document: ".concat(t.t0));case 17:case"end":return t.stop()}}),t,null,[[0,14]])}))),function(){return Jt.apply(this,arguments)})},{key:"evalFormValuesActions",value:(Ct=i(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(1===(r=pt("set_form_values_get_script_changes",{form_values:e})).length,"expected only one response for evalFormValuesActions"),t.abrupt("return",r[0].changes);case 3:case"end":return t.stop()}}),t)}))),function(t){return Ct.apply(this,arguments)})},{key:"readFormJSONObjects",value:(Ut=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Et());case 1:case"end":return t.stop()}}),t)}))),function(){return Ut.apply(this,arguments)})},{key:"setFormJSONUpdateBatchMode",value:(Bt=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ot(e);case 2:case"end":return t.stop()}}),t)}))),function(t){return Bt.apply(this,arguments)})},{key:"evalScript",value:(Nt=i(u().mark((function t(e,r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(1===(n=pt("run_pdf_javascript",{pdf_javascript_contents:e,pdf_javascript_form_fqn:r})).length,"expected only one response for evalScript"),t.abrupt("return",n[0].changes);case 3:case"end":return t.stop()}}),t)}))),function(t,e){return Nt.apply(this,arguments)})},{key:"closeDocument",value:(Lt=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,ot=[],it=null,rt=!1,t.abrupt("return",st("closeDocument"));case 5:return t.prev=5,this._pdfObjectIdsForIds={},t.finish(5);case 8:case"end":return t.stop()}}),t,this,[[0,,5,8]])}))),function(){return Lt.apply(this,arguments)})},{key:"renderTile",value:(Dt=i(u().mark((function t(e,r,n,o,i,a,c){var s,f,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(tt,Z),s=Boolean(i||a),f=pt("render_tile",{render_annotations:s,print_rendering:o,page:e,bitmap_width:n.width,bitmap_height:n.height,bitmap_x:n.left,bitmap_y:n.top,page_width:r.width,page_height:r.height,format:Tt(c,{width:n.width,height:n.height})}),"bitmap"!==c){t.next=5;break}return t.abrupt("return",f[0]);case 5:return p=new Blob([f[0]],{type:"image/".concat(c)}),t.abrupt("return",URL.createObjectURL(p));case 7:case"end":return t.stop()}}),t)}))),function(t,e,r,n,o,i,a){return Dt.apply(this,arguments)})},{key:"renderAnnotation",value:(Mt=i(u().mark((function t(e,r,n,o,i){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=It,t.t1=X(X({},e),{},{pdfObjectId:this._getPdfObjectIdForObject(e)}),!r){t.next=8;break}return t.next=5,W(r);case 5:t.t2=t.sent,t.next=9;break;case 8:t.t2=null;case 9:return t.t3=t.t2,t.t4=n,t.t5=o,t.t6=i,t.abrupt("return",(0,t.t0)(t.t1,t.t3,t.t4,t.t5,t.t6));case 14:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n,o){return Mt.apply(this,arguments)})},{key:"renderPageAnnotations",value:(Rt=i(u().mark((function t(e,r,n,o,i){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.map((function(t,r){return It({pdfObjectId:t,pageIndex:e},0,n[r],o[r],Tt(i,{width:n[r],height:o[r]}))})));case 1:case"end":return t.stop()}}),t)}))),function(t,e,r,n,o){return Rt.apply(this,arguments)})},{key:"renderDetachedAnnotation",value:(Pt=i(u().mark((function t(e,r,n,o,i){var a,c,s,f,p,h,d,v;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(tt,Z),!r){t.next=7;break}return t.next=4,W(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0=null;case 8:if(a=t.t0,c=r?r.type:null,p=new tt.VectorUint8,t.prev=11,null!=a)for(h=0;h<a.byteLength;h++)p.push_back(a[h]);if((f=ft("renderDetachedAnnotation",i,JSON.stringify(X(X({},e),{},{pdfObjectId:this._getPdfObjectIdForObject(e),pageIndex:0})),0,n,o,p,c||"")).hasError()||1!==f.getRepliesCount()){t.next=18;break}s=f.getBinaryReply(0).slice(0),t.next=21;break;case 18:throw d=f.getErrorMessage(),v=f.getErrorReason(),new Error(v+": "+d);case 21:return t.prev=21,p&&p.delete(),f&&f.delete(),t.finish(21);case 25:return t.abrupt("return",s);case 26:case"end":return t.stop()}}),t,this,[[11,,21,25]])}))),function(t,e,r,n,o){return Pt.apply(this,arguments)})},{key:"loadCertificates",value:(Ft=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(pt("load_certificates",{certificates:e}).length>0)){t.next=3;break}throw new f("Internal error while loading certificates");case 3:case"end":return t.stop()}}),t)}))),function(t){return Ft.apply(this,arguments)})},{key:"getAttachment",value:(At=i(u().mark((function t(e){var r,n,o,i,a,c,s,f,l,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getEmbeddedFilesList();case 2:if(i=t.sent,a=null==i?void 0:i.map((function(t){return t.id})),c=null==a?void 0:a.includes(e),t.prev=5,!c){t.next=11;break}pt("extract_embedded_file",{id:e,file_path:Q}),r=tt.FS.readFile(Q).buffer,t.next=21;break;case 11:if((n=ft("getAnnotationAttachment",e)).hasError()||1!==n.getRepliesCount()){t.next=18;break}s=JSON.parse(n.getJSONReply(0)),o=s.encoding,r=n.getBinaryReply(0).slice(0),t.next=21;break;case 18:throw f=n.getErrorMessage(),l=n.getErrorReason(),new Error("Error fetching attachment: "+l+", "+f);case 21:return t.prev=21,null!==(p=tt.FS.analyzePath(Q))&&void 0!==p&&p.exists&&tt.FS.unlink(Q),n&&n.delete(),t.finish(21);case 25:return t.abrupt("return",[r,o]);case 26:case"end":return t.stop()}}),t,this,[[5,,21,25]])}))),function(t){return At.apply(this,arguments)})},{key:"textForPageIndex",value:(St=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("textForPageIndex",e).textBlocks);case 1:case"end":return t.stop()}}),t)}))),function(t){return St.apply(this,arguments)})},{key:"annotationsForPageIndex",value:(xt=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("annotationsForPageIndex",e).annotations);case 1:case"end":return t.stop()}}),t)}))),function(t){return xt.apply(this,arguments)})},{key:"createAnnotation",value:(gt=i(u().mark((function t(e,r){var n,o,i,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(tt,Z),l("number"==typeof e.pageIndex,"Annotation must have a pageIndex"),n=e.pdfObjectId,!r){t.next=9;break}return t.next=6,W(r);case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=null;case 10:o=t.t0,a=new tt.VectorUint8;try{if(null!=o)for(c=0;c<o.byteLength;c++)a.push_back(o[c]);"pspdfkit/widget"===e.type&&(Ot(!1),kt()),i=st("createAnnotation",JSON.stringify(X(X({},e),{},{pdfObjectId:null})),a)}finally{a&&a.delete()}return"number"==typeof n&&"number"==typeof this._pdfObjectIdsForIds[n.toString()]&&delete this._pdfObjectIdsForIds[n.toString()],this._pdfObjectIdsForIds[e.id||i.pdfObjectId.toString()]=i.pdfObjectId,t.abrupt("return",i.pdfObjectId);case 16:case"end":return t.stop()}}),t,this)}))),function(t,e){return gt.apply(this,arguments)})},{key:"updateAnnotation",value:(vt=i(u().mark((function t(e){var r,n,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l((r=X(X({},e),{},{pdfObjectId:this._getPdfObjectIdForObject(e)})).id,"Annotation must have an ID"),l("number"==typeof r.pageIndex,"Annotation must have a pageIndex"),"pspdfkit/widget"===r.type?(n=Et(),o="number"==typeof r.pdfObjectId?r.pdfObjectId.toString():r.id,_t(n.map((function(t){return t.formField.annotationIds.includes(o)||t.formField.annotationIds.includes(String(r.pdfObjectId))?X(X({},t),{},{widgets:t.widgets.map((function(t){return t.id===o||String(t.pdfObjectId)===o?r:t}))}):t})))):st("updateAnnotation",JSON.stringify(r),0,0);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return vt.apply(this,arguments)})},{key:"deleteAnnotation",value:(dt=i(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.APStreamCache){t.next=3;break}return t.next=3,this.updateAnnotation(e);case 3:if("pspdfkit/widget"!==e.type){t.next=15;break}t.prev=4,r=e.id,_t(Et().map((function(t){if(t.formField.annotationIds.includes(r)||t.formField.annotationIds.includes(String(e.pdfObjectId))){var n;if(("pspdfkit/form-field/checkbox"===t.formField.type||"pspdfkit/form-field/radio"===t.formField.type)&&t.formField.options.length===t.formField.annotationIds.length){var o=t.formField.annotationIds.indexOf(r);n=t.formField.options.filter((function(t,e){return e!==o}))}var i=t.widgets.filter((function(t){return r!==(t.id||String(t.pdfObjectId))})),a=t.formField.annotationIds.filter((function(t){return t!==r}));return i.length>0&&a.length>0?X(X({},t),{},{formField:X(X({},t.formField),{},{annotationIds:a},n?{options:n}:null),widgets:i}):null}return t})).filter(Boolean)),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(4),t.t0;case 13:t.next=16;break;case 15:try{pt("remove_annotations",{annotation_ids:[this._getPdfObjectIdForObject(e)]})}catch(t){v("Removing annotation failed for annotation: ".concat(JSON.stringify(e)))}case 16:delete this._pdfObjectIdsForIds[e.id||e.pdfObjectId.toString()];case 17:case"end":return t.stop()}}),t,this,[[4,10]])}))),function(t){return dt.apply(this,arguments)})},{key:"createFormField",value:(ht=i(u().mark((function t(e,r){var n,o,i=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_t(Et().concat([{type:"pspdfkit/form-field-with-widgets",formField:e,widgets:r}])),n=Et(),o=n.find((function(t){return t.formField.name===e.name}))){t.next=7;break}throw new Error("Error creating new form field in ".concat($,": created form field not found. ").concat(JSON.stringify({type:"pspdfkit/form-field-with-widgets",formField:e,widgets:r})));case 7:o.widgets.forEach((function(t){i._pdfObjectIdsForIds[t.id]=t.pdfObjectId}));case 8:case"end":return t.stop()}}),t)}))),function(t,e){return ht.apply(this,arguments)})},{key:"updateFormField",value:(lt=i(u().mark((function t(e,r){var o,i,a=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=Et(),i=o.find((function(t){return t.formField.name===e.name}))){t.next=4;break}throw new Error(\'Error updating form field with name "\'.concat(e.name,\'" in \').concat($,": form field not found. ").concat(JSON.stringify(o)));case 4:if(_t(o.map((function(t){return t.formField.name===e.name?X({type:"pspdfkit/form-field-with-widgets",formField:X(X({},t.formField),e),widgets:r.reduce((function(e,r){var o=t.widgets.find((function(t){return t.id===r.id||t.pdfObjectId===r.pdfObjectId}));return[].concat(n(e),[X(X({},o),r)])}),[])},void 0!==t.value?{value:t.value}:null):t}))),Et().find((function(t){return t.formField.name===e.name}))){t.next=10;break}throw new Error(\'Error updating form field "\'.concat(e.name,\'" in \').concat($,": updated form field not found. ").concat(JSON.stringify({type:"pspdfkit/form-field-with-widgets",formField:e,widgets:r})));case 10:i.widgets.forEach((function(t){r.some((function(e){return e.id===t.id}))||delete a._pdfObjectIdsForIds[t.id]}));case 11:case"end":return t.stop()}}),t)}))),function(t,e){return lt.apply(this,arguments)})},{key:"deleteFormField",value:(ct=i(u().mark((function t(e){var r,n,o,i,a=this;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Et(),n=r.find((function(t){return t.formField.name===e.name}))){t.next=4;break}return t.abrupt("return");case 4:if(_t(r.filter((function(t){return t.formField.name!==e.name}))),o=Et(),i=o.find((function(t){return t.formField.name===e.name}))){t.next=12;break}n.widgets.forEach((function(t){delete a._pdfObjectIdsForIds[t.id]})),t.next=13;break;case 12:throw new Error(\'Error deleting form field with name "\'.concat(e.name,\'" in \').concat($,": form field still present. ").concat(JSON.stringify(i)));case 13:case"end":return t.stop()}}),t)}))),function(t){return ct.apply(this,arguments)})},{key:"deleteFormFieldValue",value:(ut=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_t(Et().map((function(t){return t.formField.name===e?{formField:t.formField,widgets:t.widgets,type:t.type}:t})));case 2:case"end":return t.stop()}}),t)}))),function(t){return ut.apply(this,arguments)})},{key:"createBookmark",value:(Y=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,pt("append_bookmarks",{bookmarks:[e]}),t.next=7;break;case 4:throw t.prev=4,t.t0=t.catch(0),new Error("Error creating new bookmark in ".concat($,": ").concat(t.t0.message));case 7:case"end":return t.stop()}}),t,null,[[0,4]])}))),function(t){return Y.apply(this,arguments)})},{key:"updateBookmark",value:(N=i(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,pt("remove_bookmarks",{bookmarkIds:[null!==(r=e.id)&&void 0!==r?r:e.pdfBookmarkId]}),pt("append_bookmarks",{bookmarks:[e]}),t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error("Error updating bookmark in ".concat($,": ").concat(t.t0.message));case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),function(t){return N.apply(this,arguments)})},{key:"deleteBookmark",value:(D=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,pt("remove_bookmarks",{bookmarkIds:[e]}),t.next=7;break;case 4:throw t.prev=4,t.t0=t.catch(0),new Error("Error deleting bookmark in ".concat($,": ").concat(t.t0.message));case 7:case"end":return t.stop()}}),t,null,[[0,4]])}))),function(t){return D.apply(this,arguments)})},{key:"getTextFromRects",value:(R=i(u().mark((function t(e,r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=st("getTextFromRects",e,JSON.stringify(r.map((function(t){return[t.left,t.top,t.width,t.height]})))),t.abrupt("return",n.text);case 2:case"end":return t.stop()}}),t)}))),function(t,e){return R.apply(this,arguments)})},{key:"search",value:(P=i(u().mark((function t(e,r,n,o){var i,a,c=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>4&&void 0!==c[4]?c[4]:V,a={query:e,start_index:r,limit:n,case_sensitive:o,search_type:i},t.abrupt("return",pt("search",a));case 3:case"end":return t.stop()}}),t)}))),function(t,e,r,n){return P.apply(this,arguments)})},{key:"parseXFDF",value:(T=i(u().mark((function t(e){var r,n,o,i,a,c,s,f,l,p;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=function(t){for(var e="",r=new Uint8Array(t),n=r.byteLength,o=0;o<n;o++)e+=String.fromCharCode(r[o]);return e},r=function(t){for(var e=new ArrayBuffer(2*t.length),r=new Uint16Array(e),n=0,o=t.length;n<o;n++)r[n]=t.charCodeAt(n);return e},o=new tt.VectorUint8,t.prev=3,i=new Uint8Array(r(e)),a=0;a<i.byteLength;a++)o.push_back(i[a]);return t.next=8,tt.dispatchCommandWithBinary(JSON.stringify({type:"convert_xfdf_to_instant_json"}),o);case 8:if(!(c=t.sent).hasError()){t.next=13;break}throw s=new Error(c.getErrorMessage()||"There was an error while executing the command: convert_xfdf_to_instant_json"),c.delete(),s;case 13:for(f=[],l=0;l<c.getRepliesCount();l++)c.hasBinaryReply(l)&&f.push(c.getBinaryReply(l).slice(0));return p=n(f[0].buffer),c.delete(),t.abrupt("return",JSON.parse(p));case 20:throw t.prev=20,t.t0=t.catch(3),t.t0;case 23:case"end":return t.stop()}}),t,null,[[3,20]])}))),function(t){return T.apply(this,arguments)})},{key:"getEmbeddedFilesList",value:(F=i(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=pt("list_embedded_files"),t.abrupt("return",e[0].embeddedFiles||null);case 2:case"end":return t.stop()}}),t)}))),function(){return F.apply(this,arguments)})},{key:"exportFile",value:(j=i(u().mark((function t(e,r,n,o,i){var a,c,s,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={mimeType:"application/pdf",extension:"pdf"},t.prev=1,c=pt("save_document",{file_path:K,format:o,flatten_annotations:e,save_incrementally:r,apply_redactions:!1,save_for_printing:n,remove_all_annotations:i}),(s=c[0]).format&&(a={mimeType:s.format.mime_type,extension:s.format.extension}),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(1),new Error("Error saving to ".concat(K,": ").concat(t.t0.message));case 11:return l(tt,Z),f=tt.FS.readFile(K).buffer,t.abrupt("return",[f,a]);case 14:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,e,r,n,o){return j.apply(this,arguments)})},{key:"importXFDF",value:(I=i(u().mark((function t(e,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ot.push({source:e,keepCurrentAnnotations:r}),r||jt(),st("importXFDF",e);case 3:case"end":return t.stop()}}),t)}))),function(t,e){return I.apply(this,arguments)})},{key:"exportXFDF",value:(_=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("exportXFDF",[],[]).XFDF);case 1:case"end":return t.stop()}}),t)}))),function(){return _.apply(this,arguments)})},{key:"importInstantJSON",value:(E=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:st("importInstantDocumentJSON",JSON.stringify(e));case 1:case"end":return t.stop()}}),t)}))),function(t){return E.apply(this,arguments)})},{key:"exportInstantJSON",value:(O=i(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=st("exportInstantDocumentJSON"),t.abrupt("return",JSON.parse(e.InstantDocumentJSON));case 2:case"end":return t.stop()}}),t)}))),function(){return O.apply(this,arguments)})},{key:"getDocumentOutline",value:(k=i(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(1===(e=pt("get_outline")).length,"expected only one response for getDocumentOutline"),t.abrupt("return",e[0].outline||[]);case 3:case"end":return t.stop()}}),t)}))),function(){return k.apply(this,arguments)})},{key:"onKeystrokeEvent",value:(S=i(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(1===(r=pt("on_keystroke_event",{pdf_javascript_event:e})).length,"expected only one response for onKeystrokeEvent"),l((n=r[0].changes||[]).length>0&&4===n[0].change_type,"expected onKeystrokeEvent to return at least one JavaScript Event change."),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t){return S.apply(this,arguments)})},{key:"version",value:(x=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",st("PSPDFKitVersion").version);case 1:case"end":return t.stop()}}),t)}))),function(){return x.apply(this,arguments)})},{key:"getImportedXFDF",value:function(){return ot}},{key:"applyRedactions",value:(w=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",st("saveDocument",$,!1,!1,!0,!1,"pdf")||{});case 9:throw t.prev=9,t.t0=t.catch(0),new Error("Error applying redactions and saving to ".concat($,": ").concat(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),function(){return w.apply(this,arguments)})},{key:"clearAPStreamCache",value:(b=i(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:st("clearAPStreamCache");case 1:case"end":return t.stop()}}),t)}))),function(){return b.apply(this,arguments)})},{key:"setComparisonDocument",value:(m=i(u().mark((function t(e,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,t.t0){t.next=5;break}return t.next=4,this.exportFile(!1,!1,!1,"pdf",!1);case 4:t.t0=t.sent[0];case 5:this.comparisonDocuments[e]=t.t0;case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return m.apply(this,arguments)})},{key:"openComparisonDocument",value:(g=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l(this.comparisonDocuments[e]),!(e===this.lastOpenedComparisonDocument||e===q&&null===this.lastOpenedComparisonDocument&&this.persistedOpenDocument instanceof ArrayBuffer)){t.next=3;break}return t.abrupt("return",null);case 3:return this.lastOpenedComparisonDocument=e,t.abrupt("return",this.openDocument(this.comparisonDocuments[e],this.persistedOpenDocument===e?this.persistedOpenDocumentPassword:void 0));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"documentCompareAndOpen",value:(s=i(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(this.comparisonDocuments[q]&&this.comparisonDocuments[z],"One or both comparison input documents are missing."),r="".concat(q,".pdf"),n="".concat(z,".pdf"),tt.FS.writeFile(r,new Uint8Array(this.comparisonDocuments[q])),tt.FS.writeFile(n,new Uint8Array(this.comparisonDocuments[z])),pt("comparison",{documentA:{strokeColor:e.documentA.strokeColor,pageIndex:e.documentA.pageIndex,filePath:r},documentB:{strokeColor:e.documentB.strokeColor,pageIndex:e.documentB.pageIndex,filePath:n},options:X(X({},e.options),{},{outputFilePath:"output.pdf"})}),t.next=9,this.closeDocument();case 9:return this.comparisonDocuments[G]=tt.FS.readFile("output.pdf").buffer,this.lastOpenedComparisonDocument=G,t.abrupt("return",this.openDocument(this.comparisonDocuments[G],void 0));case 12:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"persistOpenDocument",value:(c=i(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}this.persistedOpenDocument=e,t.next=13;break;case 4:return t.prev=4,t.next=7,this.exportFile(!1,!1,!1,"pdf",!1);case 7:this.persistedOpenDocument=t.sent[0],t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(4),new Error("Error trying to persist a copy of the currently opened document: ".concat(t.t0.message));case 13:this.persistedOpenDocumentPassword=it;case 14:case"end":return t.stop()}}),t,this,[[4,10]])}))),function(t){return c.apply(this,arguments)})},{key:"cleanupDocumentComparison",value:(a=i(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(this.persistedOpenDocument,"No persisted previous document key or array buffer is available."),l(e=this.persistedOpenDocument instanceof ArrayBuffer?this.persistedOpenDocument:this.comparisonDocuments[this.persistedOpenDocument],"No persisted previous array buffer is available."),t.prev=3,t.next=6,this.closeDocument();case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(3),new Error("Error trying to close the current document: ".concat(t.t0.message));case 11:return r=this.openDocument(e,this.persistedOpenDocumentPassword),this.persistedOpenDocument=null,this.persistedOpenDocumentPassword=null,this.lastOpenedComparisonDocument=null,this.comparisonDocuments={},t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,this,[[3,8]])}))),function(){return a.apply(this,arguments)})},{key:"_getPdfObjectIdForObject",value:function(t){return"number"==typeof t.pdfObjectId?t.pdfObjectId:this._pdfObjectIdsForIds[t.id]}}],r&&p(e.prototype,r),o&&p(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function Tt(t,e){var r=e.width,n=e.height;return"webp"===t&&(r>16383||n>16383)?"png":t}var Pt=new Ft,Rt=self;if(Rt.global=Rt,Rt.module={},void 0===Rt.performance){var Mt=Date.now();Rt.performance={now:function(){return Date.now()-Mt}}}Rt.onmessage=function(){var t=i(u().mark((function t(e){var r,o,i,a,c,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.data,i=null,t.prev=2,t.next=5,Pt[r.action].apply(Pt,n(r.args));case 5:a=t.sent,o={id:r.id,result:a},Array.isArray(a)&&(c=a.filter((function(t){return t instanceof ArrayBuffer}))).length>0&&(i=c),a instanceof ArrayBuffer&&(i=[a]),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(2),(s=r.args.filter((function(t){return t instanceof ArrayBuffer}))).length>0&&(i=s),o={id:r.id,error:t.t0.message||t.t0.toString(),callArgs:r.args};case 17:Rt.postMessage(o,i||void 0);case 18:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}()}();',
						null
					)
				}
		},
		69855: function (
			t
		) {
			'use strict'
			var e =
				window.URL ||
				window.webkitURL
			t.exports =
				function (
					t,
					r
				) {
					try {
						try {
							var n
							try {
								;(n =
									new (window.BlobBuilder ||
										window.WebKitBlobBuilder ||
										window.MozBlobBuilder ||
										window.MSBlobBuilder)()).append(
									t
								),
									(n =
										n.getBlob())
							} catch (e) {
								n =
									new Blob(
										[
											t
										]
									)
							}
							return new Worker(
								e.createObjectURL(
									n
								)
							)
						} catch (e) {
							return new Worker(
								'data:application/javascript,' +
									encodeURIComponent(
										t
									)
							)
						}
					} catch (t) {
						if (
							!r
						)
							throw Error(
								'Inline worker is not supported'
							)
						return new Worker(
							r
						)
					}
				}
		}
	}
])
