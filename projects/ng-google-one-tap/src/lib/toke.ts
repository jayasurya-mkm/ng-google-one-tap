import { configuration } from './model/tap.model';
import { InjectionToken } from "@angular/core";

export const CONFIGURATION = new InjectionToken<configuration>('CONFIGURATION')