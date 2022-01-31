<template>
  <noscript><strong>We're sorry but the ES-DOC Explorer doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
  <div id="app">
    <div>
      <nav class="navbar cim2-model-main-header navbar-light navbar-expand">
        <a href="https://www.wcrp-climate.org" target="_self" class="navbar-brand">
          <img src="../../src/assets/logo-wcrp-small.png" alt="Earth System Documentation" style="margin-top: -9px;">
        </a>
        <a href="https://es-doc.org" target="_self" class="navbar-brand">
          <img src="../../src/assets/logo-2-icon.png" alt="Earth System Documentation" style="margin-top: -4px;">
          &nbsp;
          <b>ES-DOC</b> Explorer <span class="app-version">v1.1.5</span>
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="navbar-text" style="color: black;"><b>CMIP6 Machine: {{ institute.name }} &gt; {{ machine.name }}</b></li>
        </ul>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div id="cim2-model-source-list">
              <div class="container">
                <div class="row sub-section">
                  <span style="width: 30%; font-weight: bold; margin-top: 6px;">Institute</span>
                  <select id="source-selector2" class="custom-select" style="width: 70%;">
                    <option value="[object Object]">{{ institute.name }}</option>
                    <option value="[object Object]">[all other institutes with available machines]</option>
                  </select>
                </div>
                <div class="row sub-section">
                  <span style="width: 30%; font-weight: bold; margin-top: 6px;">Machine</span>
                  <select id="source-selector2" class="custom-select" style="width: 70%;">
                    <option value="[object Object]">{{ machine.name }}</option>
                    <option value="[object Object]">[all other available machines for the institute in question]</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="sub-section"><strong>{{ institute.name }} &gt; {{ machine.name }}</strong></div>
            <div style="height: 1210px; overflow-y: auto;">
              <div>
                <div class="sub-section"><strong>Identity</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Identity &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of partition (or machine)
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <!-- Note: compulsory data field, so no need for v- if/else catch -->
                      <td>
                        {{ machine.name }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Identity &gt; Partition
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        If machine is partitioned, treat subpartitions as machines
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" classno_value_message="caption"><strong>Value</strong></td>
                      <td v-if="machine.partition && machine.partition.name">
                        {{ machine.partition.name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="sub-section"><strong>General Properties</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        General Properties &gt; Institution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Institutional location
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.institution">
                        {{ machine.institution }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        General Properties &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Textural description of machine
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.description">
                        {{ machine.description }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        General Properties &gt; Online documentation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Links to documentation
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.onlineDocumentation && machine.onlineDocumentation.length > 0">
                        {{ machine.onlineDocumentation[0] }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        General Properties &gt; When available
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        If no longer in use, the time period it was in use
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value: From</strong></td>
                      <td v-if="machine.whenUsed && machine.whenUsed.length > 0">
                        {{ machine.whenUsed[0] }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value: To</strong></td>
                      <td v-if="machine.whenUsed && machine.whenUsed.length > 1">
                        {{ machine.whenUsed[1] }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        General Properties &gt; Operating system
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Operating system
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.operatingSystem">
                        {{ machine.operatingSystem }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="sub-section"><strong>Vendor information</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Vendor information &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        The system integrator or vendor
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.vendor">
                        {{ machine.vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Vendor information &gt; Model number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor's model number/name - if it exists
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.modelNumber">
                        {{ machine.modelNumber }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="sub-section"><strong>Compute pools</strong></div>
                <div class="sub-section"><strong>Compute Pool 1</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of compute pool within a machine
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].name">
                        {{ machine.computePools[0].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Textural description of pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].description">
                        {{ machine.computePools[0].description }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Supplier of compute hardware in this pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].vendor">
                        {{ machine.computePools[0].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Model number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Model/Board number/type
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].modelNumber">
                        {{ machine.computePools[0].modelNumber }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Number of nodes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of nodes
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].numberOfNodes">
                        {{ machine.computePools[0].numberOfNodes }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Memory per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Memory per node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].memoryPerNode">
                        {{ machine.computePools[0].memoryPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Compute cores per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of CPU cores per node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].computeCoresPerNode">
                        {{ machine.computePools[0].computeCoresPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Accelerators per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of accelerator units on a node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].acceleratorsPerNode">
                        {{ machine.computePools[0].acceleratorsPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Accelerator type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Type of accelerator
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].acceleratorType">
                        {{ machine.computePools[0].acceleratorType }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; CPU type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        CPU type
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].cpuType">
                        {{ machine.computePools[0].cpuType }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Clock speed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        The clock speed of a single core, in units of GHz. E.g. 3.6
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].clockSpeed">
                        {{ machine.computePools[0].clockSpeed }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Clock cycle concurrency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        The number of operations which can be carried out concurrently in a single clock cycle of a single core. E.g. 4
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].ClockCycleConcurrency">
                        {{ machine.computePools[0].ClockCycleConcurrency }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 1 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of interface card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 0 && machine.computePools[0].networkCardsPerNode[0].name">
                        {{ machine.computePools[0].networkCardsPerNode[0].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 1 &gt; Bandwidth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Bandwidth to network
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 0 && machine.computePools[0].networkCardsPerNode[0].bandwidth">
                        {{ machine.computePools[0].networkCardsPerNode[0].bandwidth }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 1 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of network card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 0 && machine.computePools[0].networkCardsPerNode[0].vendor">
                        {{ machine.computePools[0].networkCardsPerNode[0].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 2 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of interface card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 1 && machine.computePools[0].networkCardsPerNode[1].name">
                        {{ machine.computePools[0].networkCardsPerNode[1].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 2 &gt; Bandwidth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Bandwidth to network
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 1 && machine.computePools[0].networkCardsPerNode[1].bandwidth">
                        {{ machine.computePools[0].networkCardsPerNode[1].bandwidth }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 1 &gt; Network cards per node &gt; Network cards per node 2 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of network card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 0 && machine.computePools[0].networkCardsPerNode && machine.computePools[0].networkCardsPerNode.length > 1 && machine.computePools[0].networkCardsPerNode[1].vendor">
                        {{ machine.computePools[0].networkCardsPerNode[1].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="sub-section"><strong>Compute Pool 2</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of compute pool within a machine
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].name">
                        {{ machine.computePools[1].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Textural description of pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].description">
                        {{ machine.computePools[1].description }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Supplier of compute hardware in this pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].vendor">
                        {{ machine.computePools[1].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Model number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Model/Board number/type
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].modelNumber">
                        {{ machine.computePools[1].modelNumber }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Number of nodes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of nodes
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].numberOfNodes">
                        {{ machine.computePools[1].numberOfNodes }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Memory per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Memory per node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].memoryPerNode">
                        {{ machine.computePools[1].memoryPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Compute cores per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of CPU cores per node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].computeCoresPerNode">
                        {{ machine.computePools[1].computeCoresPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Accelerators per node
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Number of accelerator units on a node
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].acceleratorsPerNode">
                        {{ machine.computePools[1].acceleratorsPerNode }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Accelerator type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Type of accelerator
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].acceleratorType">
                        {{ machine.computePools[1].acceleratorType }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; CPU type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        CPU type
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].cpuType">
                        {{ machine.computePools[1].cpuType }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Clock speed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        The clock speed of a single core, in units of GHz. E.g. 3.6
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].clockSpeed">
                        {{ machine.computePools[1].clockSpeed }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Clock cycle concurrency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        The number of operations which can be carried out concurrently in a single clock cycle of a single core. E.g. 4
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].ClockCycleConcurrency">
                        {{ machine.computePools[1].ClockCycleConcurrency }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 1 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of interface card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 0 && machine.computePools[1].networkCardsPerNode[0].name">
                        {{ machine.computePools[1].networkCardsPerNode[0].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 1 &gt; Bandwidth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Bandwidth to network
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 0 && machine.computePools[1].networkCardsPerNode[0].bandwidth">
                        {{ machine.computePools[1].networkCardsPerNode[0].bandwidth }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 1 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of network card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 0 && machine.computePools[1].networkCardsPerNode[0].vendor">
                        {{ machine.computePools[1].networkCardsPerNode[0].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 2 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of interface card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 1 && machine.computePools[1].networkCardsPerNode[1].name">
                        {{ machine.computePools[1].networkCardsPerNode[1].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 2 &gt; Bandwidth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Bandwidth to network
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 1 && machine.computePools[1].networkCardsPerNode[1].bandwidth">
                        {{ machine.computePools[1].networkCardsPerNode[1].bandwidth }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Compute Pool 2 &gt; Network cards per node &gt; Network cards per node 2 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of network card
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.computePools && machine.computePools.length > 1 && machine.computePools[1].networkCardsPerNode && machine.computePools[1].networkCardsPerNode.length > 1 && machine.computePools[1].networkCardsPerNode[1].vendor">
                        {{ machine.computePools[1].networkCardsPerNode[1].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="sub-section"><strong>Storage pools</strong></div>
                <div class="sub-section"><strong>Storage Pool 1</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 1 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of storage pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 0 && machine.storagePools[0].name">
                        {{ machine.storagePools[0].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 1 &gt; File system sizes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Sizes of constituent File Systems
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 0 && machine.storagePools[0].fileSystemSizes">
                        {{ machine.storagePools[0].fileSystemSizes }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 1 &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Description of the technology used
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 0 && machine.storagePools[0].description">
                        {{ machine.storagePools[0].description }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 1 &gt; Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Type of storage
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 0 && machine.storagePools[0].type">
                        {{ machine.storagePools[0].type }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 1 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of storage hardware
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 0 && machine.storagePools[0].vendor">
                        {{ machine.storagePools[0].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="sub-section"><strong>Storage Pool 2</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 2 &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of storage pool
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 1 && machine.storagePools[1].name">
                        {{ machine.storagePools[1].name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 2 &gt; File system sizes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Sizes of constituent File Systems
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 1 && machine.storagePools[1].fileSystemSizes">
                        {{ machine.storagePools[1].fileSystemSizes }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 2 &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Description of the technology used
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 1 && machine.storagePools[1].description">
                        {{ machine.storagePools[1].description }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 2 &gt; Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Type of storage
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 1 && machine.storagePools[1].type">
                        {{ machine.storagePools[1].type }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Storage Pool 2 &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Vendor of storage hardware
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Values</strong></td>
                      <td v-if="machine.storagePools && machine.storagePools.length > 1 && machine.storagePools[1].vendor">
                        {{ machine.storagePools[1].vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="sub-section"><strong>Interconnect</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Interconnect &gt; Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Name of interconnnect
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.interconnect && machine.interconnect.name">
                        {{ machine.interconnect.name }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Interconnect &gt; Topology
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Interconnect topology
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.interconnect && machine.interconnect.topology">
                        {{ machine.interconnect.topology }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Interconnect &gt; Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Technical description of interconnect layout
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.interconnect && machine.interconnect.topology">
                        {{ machine.interconnect.topology }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Interconnect &gt; Vendor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Supplier of the interconnect
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.interconnect && machine.interconnect.vendor">
                        {{ machine.interconnect.vendor }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="sub-section"><strong>Benchmark performance</strong></div>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Benchmark performance &gt; Peak performance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Total peak performance (RPeak in Top500 lingo)
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.peakPerformance">
                        {{ machine.peakPerformance }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-bordered table-sm small esdoc-table-info">
                  <thead>
                    <tr>
                      <th colspan="2">
                        Benchmark performance &gt; LINPACK performance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="caption"><strong>Description</strong></td>
                      <td>
                        Linpack performance (RMax in Top500 lingo)
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td v-if="machine.linpackPerformance">
                        {{ machine.linpackPerformance }}
                      </td>
                      <td v-else>
                        {{ no_value }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Get the data to use, which is in JSON form (valid in both JS and Python).
import machine_data from '../../../json-data/institute-machine.json';

const no_value_message = "--";

var machine_fe_data = {
  "institute": {
    "name": "[INSTITUTE NAME]"
  },
  "machine": machine_data,
  "no_value": no_value_message
};

export default {
  name: 'Machine',
  data() {
    return machine_fe_data;
  }
};
</script>


<style>
div.sub-section {
    margin-bottom: 16px;
    background-color: #337ab7;
    color: white;
    padding: 4px 2px 4px 5px;
    margin-bottom: 5px
}
</style>
