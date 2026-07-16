---
title: "Building a DMVPN Phase 3 Lab"
description: "A sample walkthrough — spinning up a hub-and-spoke DMVPN topology and watching spoke-to-spoke tunnels form."
pubDate: 2026-07-10
category: "Lab Walkthrough"
difficulty: "Advanced"
tags: ["DMVPN", "NHRP", "Cisco", "EVE-NG"]
---

> **Note:** This is a sample post demonstrating the write-up format. Replace it with your own labs — any markdown file dropped into `src/content/writeups/` becomes a post.

## The goal

Build a three-router DMVPN Phase 3 topology — one hub, two spokes — and verify that spoke-to-spoke traffic triggers a dynamic tunnel instead of hairpinning through the hub forever.

## Topology

| Device | Role  | Tunnel IP    | Physical (NBMA) |
| ------ | ----- | ------------ | --------------- |
| R1     | Hub   | 172.16.0.1   | 192.0.2.1       |
| R2     | Spoke | 172.16.0.2   | 192.0.2.2       |
| R3     | Spoke | 172.16.0.3   | 192.0.2.3       |

## Hub configuration

The hub is where Phase 3 earns its name — `nhrp redirect` tells spokes there's a shorter path:

```
interface Tunnel0
 ip address 172.16.0.1 255.255.255.0
 ip nhrp network-id 1
 ip nhrp redirect
 tunnel source GigabitEthernet0/0
 tunnel mode gre multipoint
```

## Spoke configuration

Spokes register with the hub and honor redirects with `nhrp shortcut`:

```
interface Tunnel0
 ip address 172.16.0.2 255.255.255.0
 ip nhrp network-id 1
 ip nhrp nhs 172.16.0.1 nbma 192.0.2.1 multicast
 ip nhrp shortcut
 tunnel source GigabitEthernet0/0
 tunnel mode gre multipoint
```

## The payoff

First ping from R2's LAN to R3's LAN takes the scenic route through the hub. Then NHRP does its thing:

```
R2# show dmvpn
Interface: Tunnel0, IPv4 NHRP Details
 # Ent  Peer NBMA Addr Peer Tunnel Add State  UpDn Tm Attrb
 ----- --------------- --------------- ----- -------- -----
     1 192.0.2.1            172.16.0.1    UP 00:41:12     S
     1 192.0.2.3            172.16.0.3    UP 00:00:07    DT1
```

That `DT1` entry is the dynamic spoke-to-spoke tunnel — traffic now flows directly between R2 and R3 without touching the hub.

## Takeaways

- Phase 3 needs both halves: `redirect` on the hub, `shortcut` on the spokes.
- Watch `show ip nhrp` during the first ping — the resolution process is half the learning.
- Split horizon will bite you with EIGRP on the hub tunnel; `no ip split-horizon eigrp <AS>` if spokes stop seeing each other's routes.
