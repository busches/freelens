/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import { observable } from "mobx";

import type { Cluster } from "../../../../common/cluster/cluster";
import type { ClusterId } from "../../../../common/cluster-types";

const clustersStateInjectable = getInjectable({
  id: "clusters-state",
  instantiate: () => observable.map<ClusterId, Cluster>(),
});

export default clustersStateInjectable;
