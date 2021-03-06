/**
 * Enum for alert levels
 * @readonly
 */
export enum AlertLevel {
    /** Info level for general alerts */
    info = 0,
    /** Warning level for more concerning alerts */
    warning = 1,
    /** Critical level for critical service alerts */
    critical = 2
}

/** A class to describe an Alert */
export class Alert {
    private m_level: AlertLevel;
    private m_title: String;
    private m_description: String;
    private m_sound: boolean;
    private m_timeout: number;
    private m_cleared: boolean;
    private m_timestamp: Date;

    /**
     * Create an Alert
     * @param level - The level of the alert
     * @param title - The title of the issue
     * @param description - The description of the issue
     * @param timeout - The timeout period of the alert in seconds
     * @param sound - Enable the sound of the alert
     */
    constructor(level: AlertLevel, title: String, description: String, timeout: number, sound: boolean) {
        this.m_level = level;
        this.m_title = title;
        this.m_description = description;
        this.m_timeout = timeout;
        this.m_sound = sound;
        this.m_cleared = false;
        this.m_timestamp = new Date();
    }

    /**
     * Get the alert's level
     * @returns The level of the alert
     */
    public getLevel() { return this.m_level; }

    /**
     * Get the alert's title
     * @returns The title of the alert
     */
    public getTitle() { return this.m_title; }

    /**
     * Get the alert's description
     * @returns The description of the alert
     */
    public getDescription() { return this.m_description; }

    /**
     * Get the alert's timeout period
     * @returns The timeout of the alert in milliseconds
     */
    public getTimeout() { return this.m_timeout; }

    /**
     * Check if the alert has sound enabled
     * @returns The sound status of the alert
     */
    public getSound() { return this.m_sound; }

    /**
     * Get the alert's timestamp
     * @returns The timestamp of when the alert was created
     */
    public getTimestamp() { return this.m_timestamp; }

    /** Clear this alert */
    public clear() { this.m_cleared = true; }

    /**
     * Check if this alert is cleared
     * @returns The cleared status of the alert
     */
    public isCleared() { return this.m_cleared; }
}
