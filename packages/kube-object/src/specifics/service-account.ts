/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObject } from "../kube-object";

import type {
  KubeJsonApiData,
  KubeObjectMetadata,
  KubeObjectScope,
  LocalObjectReference,
  NamespaceScopedMetadata,
  ObjectReference,
} from "../api-types";

export interface ServiceAccountData extends KubeJsonApiData<KubeObjectMetadata<KubeObjectScope.Namespace>, void, void> {
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: LocalObjectReference[];
  secrets?: ObjectReference[];
}

export class ServiceAccount extends KubeObject<NamespaceScopedMetadata, void, void> {
  static readonly kind = "ServiceAccount";

  static readonly namespaced = true;

  static readonly apiBase = "/api/v1/serviceaccounts";

  automountServiceAccountToken?: boolean;

  imagePullSecrets?: LocalObjectReference[];

  secrets?: ObjectReference[];

  constructor({ automountServiceAccountToken, imagePullSecrets, secrets, ...rest }: ServiceAccountData) {
    super(rest);
    this.automountServiceAccountToken = automountServiceAccountToken;
    this.imagePullSecrets = imagePullSecrets;
    this.secrets = secrets;
  }

  getSecrets() {
    return this.secrets || [];
  }

  getImagePullSecrets() {
    return this.imagePullSecrets || [];
  }
}
