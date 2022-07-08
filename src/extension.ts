// Copyright (c) The Diem Core Contributors
// Copyright (c) The Move Contributors
// SPDX-License-Identifier: Apache-2.0

import * as assert from "assert";
import * as vscode from "vscode";

/** Information related to this extension itself, such as its identifier and version. */
export class Extension {
  /** The string used to uniquely identify this particular extension to VS Code. */
  readonly identifier = "movingco.move-analyzer-plus";

  private readonly _extension: vscode.Extension<unknown>;

  constructor() {
    const extension = vscode.extensions.getExtension(this.identifier);
    assert.ok(
      extension !== undefined,
      `extension ${this.identifier} is not available`
    );
    this._extension = extension;
  }

  /** The version string. */
  get version(): string {
    for (const entry of Object.entries(
      this._extension.packageJSON as Record<string, unknown>
    )) {
      if (entry[0] === "version") {
        return entry[1] as string;
      }
    }
    return "unknown";
  }
}
