/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import readFileInjectable from "../fs/read-file.injectable";
import { loadValidatedConfig } from "../kube-helpers";
import resolveTildeInjectable from "../path/resolve-tilde.injectable";

import type { Cluster } from "../cluster/cluster";
import type { ValidateKubeConfigResult } from "../kube-helpers";

export type LoadValidatedClusterConfig = (cluster: Cluster) => Promise<ValidateKubeConfigResult>;

const loadValidatedClusterConfigInjectable = getInjectable({
  id: "load-validated-cluster-config",
  instantiate: (di): LoadValidatedClusterConfig => {
    const readFile = di.inject(readFileInjectable);
    const resolveTilde = di.inject(resolveTildeInjectable);

    return async (cluster) => {
      const data = await readFile(resolveTilde(cluster.kubeConfigPath.get()));

      return loadValidatedConfig(data, cluster.contextName.get());
    };
  },
});

export default loadValidatedClusterConfigInjectable;
