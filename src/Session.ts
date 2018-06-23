import { format } from 'util';
import * as log from './Logger';

enum SESSION_STATES {
    NEW = 0,
    ACTIVE,
    INACTIVE,
    CLOSED
}

class Session {
    private state: SESSION_STATES = SESSION_STATES.NEW;
    private teamId = '';
    private mazeId = '';

    constructor() { }
}

