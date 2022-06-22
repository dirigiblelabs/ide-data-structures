/*
 * Copyright (c) 2010-2022 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

const viewData = {
	id: "datastructures",
	factory: "frame",
	region: "center",
	label: "Data Structures",
	link: "../ide-data-structures/views/data-structures.html"
};

if (typeof exports !== 'undefined') {
	exports.getView = function () {
		return viewData;
	}
}