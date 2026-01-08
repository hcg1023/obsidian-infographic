import {App, PluginSettingTab, } from "obsidian";
import InfographicPlugin from "./main";

export interface InfographicSettings {
	// 可以添加自定义设置选项
	empty?: boolean
}

export const DEFAULT_SETTINGS: InfographicSettings = {};

export class InfographicSettingTab extends PluginSettingTab {
	plugin: InfographicPlugin;

	constructor(app: App, plugin: InfographicPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;
		containerEl.empty();
	}
}
