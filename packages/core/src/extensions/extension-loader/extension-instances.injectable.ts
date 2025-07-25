/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import { observable } from "mobx";

import type { LegacyLensExtension, LensExtensionId } from "@freelensapp/legacy-extensions";

const extensionInstancesInjectable = getInjectable({
  id: "extension-instances",
  instantiate: () => observable.map<LensExtensionId, LegacyLensExtension>(),
});

export default extensionInstancesInjectable;
