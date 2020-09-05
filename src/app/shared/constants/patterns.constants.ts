import { Injectable } from '@angular/core';

@Injectable()

export class PatternsConstants {
    static readonly PATTERN_EMAIL = /^[a-z0-9]+((\.[a-z0-9]+)*|(-[a-z0-9]+)*|(_[a-z0-9]+)*)@[a-z0-9]+((-[a-z0-9]+)*|(_[a-z0-9]+)*)*\.[a-z]{2,}$/;
    static readonly PATTERN_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).[a-zA-Z\d*@$!%*#?&]{8,}$/;
    static readonly PATTERN_NAME = /^([A-Za-z`'-]+){3,30}$/;
    static readonly PATTERN_SURNAME = /^([A-Za-z`'-]+){3,50}$/;
}