import {App, PluginSettingTab, Setting} from "obsidian";
import InfographicPlugin from "./main";

export interface InfographicSettings {
	// 可以添加自定义设置选项
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
		containerEl.createEl('h2', {text: 'Infographic 插件设置'});
		containerEl.createEl('p', {text: '当前版本暂无可配置选项'});
	}
}
