// Copyright (c) The Move Contributors
// SPDX-License-Identifier: Apache-2.0

import * as assert from "assert";
import * as Mocha from "mocha";
import * as vscode from "vscode";

Mocha.suite("ext", () => {
  Mocha.test("ext_exists", () => {
    const ext = vscode.extensions.getExtension("movingco.move-analyzer-plus");
    assert.ok(ext);
  });
});
