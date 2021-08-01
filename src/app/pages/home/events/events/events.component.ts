import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  data = [
    {
      client_addr: '72.21.17.36',
      client_port: -7913,
      date_time: '2021-07-03 23:55:34',
      dns_array: 'null',
      first_packet: '2021-07-03 04:59:14',
      flow_direction: 1,
      is_dns: 0,
      last_packet: '2021-07-03 04:59:14',
      packet_count_cts: 1,
      packet_count_stc: 0,
      protocol: 'tcp',
      server_addr: '111.119.187.39',
      server_port: 23501,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: 'CEFAAC7A-BA02-42E0-B8FE-C497E565A34A',
      vol_pkt_cts: 1454,
      vol_pkt_stc: 0,
      _source: {
        client_addr: '72.21.17.36',
        client_port: -7913,
        date_time: '2021-07-03 23:55:34',
        dns_array: 'null',
        first_packet: '2021-07-03 04:59:14',
        flow_direction: 1,
        is_dns: 0,
        last_packet: '2021-07-03 04:59:14',
        packet_count_cts: 1,
        packet_count_stc: 0,
        protocol: 'tcp',
        server_addr: '111.119.187.39',
        server_port: 23501,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: 'CEFAAC7A-BA02-42E0-B8FE-C497E565A34A',
        vol_pkt_cts: 1454,
        vol_pkt_stc: 0,
      },
    },
    {
      client_addr: '111.119.187.47',
      client_port: -5552,
      date_time: '2021-07-03 23:55:08',
      dns_array: 'null',
      first_packet: '2021-07-03 02:39:33',
      flow_direction: 2,
      is_dns: 0,
      last_packet: '2021-07-03 02:39:33',
      packet_count_cts: 0,
      packet_count_stc: 1,
      protocol: 'tcp',
      server_addr: '23.237.162.26',
      server_port: 443,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: 'BBDE2846-174C-40DE-995E-2E811D1E05BE',
      vol_pkt_cts: 0,
      vol_pkt_stc: 66,
      _source: {
        client_addr: '111.119.187.47',
        client_port: -5552,
        date_time: '2021-07-03 23:55:08',
        dns_array: 'null',
        first_packet: '2021-07-03 02:39:33',
        flow_direction: 2,
        is_dns: 0,
        last_packet: '2021-07-03 02:39:33',
        packet_count_cts: 0,
        packet_count_stc: 1,
        protocol: 'tcp',
        server_addr: '23.237.162.26',
        server_port: 443,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: 'BBDE2846-174C-40DE-995E-2E811D1E05BE',
        vol_pkt_cts: 0,
        vol_pkt_stc: 66,
      },
    },
    {
      client_addr: '103.255.4.69',
      client_port: 9632,
      date_time: '2021-07-03 23:55:07',
      dns_array: 'null',
      first_packet: '2021-07-03 04:55:07',
      flow_direction: 1,
      is_dns: 0,
      last_packet: '2021-07-03 04:55:07',
      packet_count_cts: 1,
      packet_count_stc: 0,
      protocol: 'udp',
      server_addr: '146.70.20.94',
      server_port: 4500,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: 'F542DEF0-A7B6-4FF0-AED8-0C0258E6D72F',
      vol_pkt_cts: 66,
      vol_pkt_stc: 0,
      _source: {
        client_addr: '103.255.4.69',
        client_port: 9632,
        date_time: '2021-07-03 23:55:07',
        dns_array: 'null',
        first_packet: '2021-07-03 04:55:07',
        flow_direction: 1,
        is_dns: 0,
        last_packet: '2021-07-03 04:55:07',
        packet_count_cts: 1,
        packet_count_stc: 0,
        protocol: 'udp',
        server_addr: '146.70.20.94',
        server_port: 4500,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: 'F542DEF0-A7B6-4FF0-AED8-0C0258E6D72F',
        vol_pkt_cts: 66,
        vol_pkt_stc: 0,
      },
    },
    {
      client_addr: '111.119.187.42',
      client_port: 18899,
      date_time: '2021-07-03 23:53:53',
      dns_array: 'null',
      first_packet: '2021-07-03 04:48:32',
      flow_direction: 2,
      is_dns: 0,
      last_packet: '2021-07-03 04:48:32',
      packet_count_cts: 0,
      packet_count_stc: 1,
      protocol: 'tcp',
      server_addr: '142.250.27.109',
      server_port: 993,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: '652DE29F-B4A7-4336-B1BC-A0BD3460AE6A',
      vol_pkt_cts: 0,
      vol_pkt_stc: 1454,
      _source: {
        client_addr: '111.119.187.42',
        client_port: 18899,
        date_time: '2021-07-03 23:53:53',
        dns_array: 'null',
        first_packet: '2021-07-03 04:48:32',
        flow_direction: 2,
        is_dns: 0,
        last_packet: '2021-07-03 04:48:32',
        packet_count_cts: 0,
        packet_count_stc: 1,
        protocol: 'tcp',
        server_addr: '142.250.27.109',
        server_port: 993,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: '652DE29F-B4A7-4336-B1BC-A0BD3460AE6A',
        vol_pkt_cts: 0,
        vol_pkt_stc: 1454,
      },
    },
    {
      client_addr: '111.119.188.13',
      client_port: -26872,
      date_time: '2021-07-03 23:51:01',
      dns_array: 'null',
      first_packet: '2021-07-03 04:45:16',
      flow_direction: 2,
      is_dns: 0,
      last_packet: '2021-07-03 04:45:41',
      packet_count_cts: 0,
      packet_count_stc: 2,
      protocol: 'tcp',
      server_addr: '23.248.167.15',
      server_port: 443,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: '179794FB-D9FF-4A78-A91A-6505566D6B21',
      vol_pkt_cts: 0,
      vol_pkt_stc: 1710,
      _source: {
        client_addr: '111.119.188.13',
        client_port: -26872,
        date_time: '2021-07-03 23:51:01',
        dns_array: 'null',
        first_packet: '2021-07-03 04:45:16',
        flow_direction: 2,
        is_dns: 0,
        last_packet: '2021-07-03 04:45:41',
        packet_count_cts: 0,
        packet_count_stc: 2,
        protocol: 'tcp',
        server_addr: '23.248.167.15',
        server_port: 443,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: '179794FB-D9FF-4A78-A91A-6505566D6B21',
        vol_pkt_cts: 0,
        vol_pkt_stc: 1710,
      },
    },
    {
      client_addr: '111.119.187.3',
      client_port: 22504,
      date_time: '2021-07-03 23:45:19',
      dns_array: 'null',
      first_packet: '2021-07-03 04:39:59',
      flow_direction: 2,
      is_dns: 0,
      last_packet: '2021-07-03 04:39:59',
      packet_count_cts: 0,
      packet_count_stc: 1,
      protocol: 'tcp',
      server_addr: '38.128.66.142',
      server_port: 443,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: 'AB89FB3D-9345-4E9B-A3B2-4D8A2F3D4AFF',
      vol_pkt_cts: 0,
      vol_pkt_stc: 1454,
      _source: {
        client_addr: '111.119.187.3',
        client_port: 22504,
        date_time: '2021-07-03 23:45:19',
        dns_array: 'null',
        first_packet: '2021-07-03 04:39:59',
        flow_direction: 2,
        is_dns: 0,
        last_packet: '2021-07-03 04:39:59',
        packet_count_cts: 0,
        packet_count_stc: 1,
        protocol: 'tcp',
        server_addr: '38.128.66.142',
        server_port: 443,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: 'AB89FB3D-9345-4E9B-A3B2-4D8A2F3D4AFF',
        vol_pkt_cts: 0,
        vol_pkt_stc: 1454,
      },
    },
    {
      client_addr: '111.119.183.16',
      client_port: 14668,
      date_time: '2021-07-03 23:42:53',
      dns_array: 'null',
      first_packet: '2021-07-03 04:42:51',
      flow_direction: 2,
      is_dns: 0,
      last_packet: '2021-07-03 04:42:51',
      packet_count_cts: 0,
      packet_count_stc: 1,
      protocol: 'tcp',
      server_addr: '62.210.143.202',
      server_port: 443,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: 'DB764436-A2EB-4376-8F64-34D227748DB0',
      vol_pkt_cts: 0,
      vol_pkt_stc: 66,
      _source: {
        client_addr: '111.119.183.16',
        client_port: 14668,
        date_time: '2021-07-03 23:42:53',
        dns_array: 'null',
        first_packet: '2021-07-03 04:42:51',
        flow_direction: 2,
        is_dns: 0,
        last_packet: '2021-07-03 04:42:51',
        packet_count_cts: 0,
        packet_count_stc: 1,
        protocol: 'tcp',
        server_addr: '62.210.143.202',
        server_port: 443,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: 'DB764436-A2EB-4376-8F64-34D227748DB0',
        vol_pkt_cts: 0,
        vol_pkt_stc: 66,
      },
    },
    {
      client_addr: '67.216.91.201',
      client_port: 443,
      date_time: '2021-07-03 23:42:19',
      dns_array: 'null',
      first_packet: '2021-07-03 04:42:17',
      flow_direction: 1,
      is_dns: 0,
      last_packet: '2021-07-03 04:42:17',
      packet_count_cts: 1,
      packet_count_stc: 0,
      protocol: 'udp',
      server_addr: '111.119.183.18',
      server_port: 27487,
      service_type: 'null',
      sni: 'null',
      tags: '"[""basic"",""networking"",""standardized""]"',
      uuid: '498E5E41-E7A5-40DC-A7D0-477390066542',
      vol_pkt_cts: 146,
      vol_pkt_stc: 0,
      _source: {
        client_addr: '67.216.91.201',
        client_port: 443,
        date_time: '2021-07-03 23:42:19',
        dns_array: 'null',
        first_packet: '2021-07-03 04:42:17',
        flow_direction: 1,
        is_dns: 0,
        last_packet: '2021-07-03 04:42:17',
        packet_count_cts: 1,
        packet_count_stc: 0,
        protocol: 'udp',
        server_addr: '111.119.183.18',
        server_port: 27487,
        service_type: 'null',
        sni: 'null',
        tags: '"[""basic"",""networking"",""standardized""]"',
        uuid: '498E5E41-E7A5-40DC-A7D0-477390066542',
        vol_pkt_cts: 146,
        vol_pkt_stc: 0,
      },
    },
  ];

  loading = false;
  constructor() {}

  ngOnInit(): void {}
}
