/*
 * @Author: Lin 3194563857@qq.com
 * @Date: 2026-06-08 22:40:44
 * @LastEditors: Lin 3194563857@qq.com
 * @LastEditTime: 2026-06-08 22:48:23
 * @FilePath: \项目介绍\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ============================================================
//  配置文件 — 修改这里的内容即可更新网站
//  视频文件请放入 videos/ 文件夹，然后在这里填写文件名
// ============================================================

const SITE_CONFIG = {
  // -- 个人信息 --
  name: "林楚淮",
  title: "嵌入式开发工程师",
  bio: "专注于 STM32 / FreeRTOS / 物联网方向，3 年嵌入式开发经验",
  contact: "example@email.com",

  // -- 技能标签 --
  skills: [
    "STM32",
    "ESP32",
    "FreeRTOS",
    "MQTT",
    "C",
    "UART/I2C/SPI",
    "OTA",
  ],

  // -- 项目列表 --
  // 每个项目包含: name(项目名), description(简短描述), video(视频路径), tags(技术标签), detail(详细介绍)
  projects: [
    {
      name: "智能家居控制面板",
      description:
        "基于 STM32F407 + FreeRTOS，实现温湿度、光照等多传感器数据采集与远程控制",
      video: "videos/project1.mp4",
      tags: ["STM32", "FreeRTOS", "MQTT", "C"],
      detail:
        "该项目设计并实现了一套基于 STM32F407 微控制器的智能家居控制系统。系统采用 FreeRTOS 实时操作系统进行多任务调度，通过 MQTT 协议与云平台通信，实现了温湿度传感器、光照传感器、继电器控制等模块的协同工作。\n\n主要工作包括：传感器驱动开发和校准、FreeRTOS 多任务优先级设计及死锁避免、MQTT 协议栈的移植与优化、以及配套的 Android 端控制 App 开发。",
    },
    {
      name: "ESP32 物联网网关",
      description:
        "使用 ESP32 搭建边缘计算网关，支持多种协议转换，实现设备数据上云",
      video: "videos/project2.mp4",
      tags: ["ESP32", "WiFi", "Bluetooth", "MQTT"],
      detail:
        "本项目利用 ESP32 双核处理器特性，搭建了一款低功耗物联网边缘网关。网关支持 Modbus RTU、BLE、Zigbee 等多种下联协议，将工业设备数据统一转换为 MQTT 格式上报至云平台。\n\n主要工作包括：双核任务分配（Core 0 处理通信协议，Core 1 处理数据处理）、SPIFFS 文件系统实现离线数据缓存、以及基于 FreeRTOS 事件组的低功耗模式设计。",
    },
    {
      name: "Linux 车载终端",
      description:
        "基于 ARM Linux 的车载信息娱乐终端，集成多媒体播放、导航与车辆诊断功能",
      video: "videos/project3.mp4",
      tags: ["Linux", "Qt", "CAN", "ARM"],
      detail:
        "该项目基于 i.MX6 处理器平台，开发了一套车载信息娱乐系统的核心软件。系统运行定制 Yocto Linux，上层采用 Qt5 框架构建图形界面，集成了多媒体播放、GPS 导航、蓝牙电话以及通过 CAN 总线读取车辆诊断信息等功能。\n\n主要工作包括：Yocto BSP 的适配与裁剪、Qt 界面架构设计与多语言支持、CAN 总线驱动调试与诊断协议实现、以及系统启动时间优化（冷启动 < 3s）。",
    },
    {
      name: "电机控制算法验证平台",
      description:
        "搭建基于 MATLAB/Simulink + STM32 的 FOC 电机控制算法快速验证平台",
      video: "videos/project4.mp4",
      tags: ["STM32", "FOC", "Simulink", "PID"],
      detail:
        "为加速永磁同步电机（PMSM）控制算法的开发迭代，搭建了一套从仿真到实物的快速验证平台。使用 MATLAB/Simulink 进行 FOC 控制算法的建模与仿真，通过 Embedded Coder 自动生成代码并部署到 STM32G4 系列 MCU 上运行。\n\n主要工作包括：Simulink 模型搭建与仿真验证、自动代码生成流程配置、电流采样与位置检测硬件电路设计、以及 FOC 参数在线整定算法的研究与实现。",
    },
  ],
};
