<template>
  <noscript><strong>We're sorry but the ES-DOC Explorer doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
  <div id="app">
    <div>
      <nav class="navbar cim2-model-main-header navbar-light navbar-expand">
        <a href="https://www.wcrp-climate.org" target="_self" class="navbar-brand"><img src="../../src/assets/logo-wcrp-small.png" alt="Earth System Documentation" style="margin-top: -9px;"></a><a href="https://es-doc.org" target="_self" class="navbar-brand"><img src="data:image/png;base64,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" alt="Earth System Documentation" style="margin-top: -4px;">
        &nbsp;
        <b>ES-DOC</b> Explorer <span class="app-version">v1.1.5</span></a>
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
                      <td rowspan="1" class="caption"><strong>Value</strong></td>
                      <td>
                        {{ machine.partition }}
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
                      <td>
                        {{ machine.location }}
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
                      <td>
                        {{ machine.description }}
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
                      <td>
                        {{ machine.online_documentation }}
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
                      <td>
                        {{ machine.when_available_from }}
                      </td>
                    </tr>
                    <tr>
                      <td rowspan="1" class="caption"><strong>Value: To</strong></td>
                      <td>
                        {{ machine.when_available_to }}
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
                      <td>
                        {{ machine.os }}
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
                      <td>
                        {{ machine.vendor }}
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
                      <td>
                        {{ machine.model_number }}
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
                      <td>
                        {{ machine.compute_pool_1.name }}
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
                      <td>
                        {{ machine.compute_pool_1.description }}
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
                      <td>
                        {{ machine.compute_pool_1.vendor }}
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
                      <td>
                        {{ machine.compute_pool_1.model_number }}
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
                      <td>
                        {{ machine.compute_pool_1.number_of_nodes }}
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
                      <td>
                        {{ machine.compute_pool_1.memory_per_node }}
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
                      <td>
                        {{ machine.compute_pool_1.cpu_cores_per_node }}
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
                      <td>
                        {{ machine.compute_pool_1.accelerators_per_node }}
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
                      <td>
                        {{ machine.compute_pool_1.accelerator_type }}
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
                      <td>
                        {{ machine.compute_pool_1.cpu_type }}
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
                      <td>
                        {{ machine.compute_pool_1.clock_speed }}
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
                      <td>
                        {{ machine.compute_pool_1.concurrency }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_1.name }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_1.bandwidth }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_1.vendor }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_2.name }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_2.bandwidth }}
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
                      <td>
                        {{ machine.compute_pool_1.nic_2.vendor }}
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
                      <td>
                        {{ machine.compute_pool_2.name }}
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
                      <td>
                        {{ machine.compute_pool_2.description }}
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
                      <td>
                        {{ machine.compute_pool_2.vendor }}
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
                      <td>
                        {{ machine.compute_pool_2.model_number }}
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
                      <td>
                        {{ machine.compute_pool_2.number_of_nodes }}
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
                      <td>
                        {{ machine.compute_pool_2.memory_per_node }}
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
                      <td>
                        {{ machine.compute_pool_2.cpu_cores_per_node }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>

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
                      <td>
                        {{ machine.compute_pool_2.accelerators_per_node }}
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
                      <td>
                        {{ machine.compute_pool_2.accelerator_type }}
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
                      <td>
                        {{ machine.compute_pool_2.cpu_type }}
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
                      <td>
                        {{ machine.compute_pool_2.clock_speed }}
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
                      <td>
                        {{ machine.compute_pool_2.concurrency }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_1.name }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_1.bandwidth }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_1.vendor }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_2.name }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_2.bandwidth }}
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
                      <td>
                        {{ machine.compute_pool_2.nic_2.vendor }}
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
                      <td>
                        {{ machine.storage_pool_1.name }}
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
                      <td>
                        {{ machine.storage_pool_1.file_system_sizes }}
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
                      <td>
                        {{ machine.storage_pool_1.description }}
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
                      <td>
                        {{ machine.storage_pool_1.type }}
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
                      <td>
                        {{ machine.storage_pool_1.vendor }}
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
                      <td>
                        {{ machine.storage_pool_2.name }}
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
                      <td>
                        {{ machine.storage_pool_2.file_system_sizes }}
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
                      <td>
                        {{ machine.storage_pool_2.description }}
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
                      <td>
                        {{ machine.storage_pool_2.type }}
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
                      <td>
                        {{ machine.storage_pool_2.vendor }}
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
                    <td>
                      {{ machine.interconnect.name }}
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
                    <td>
                      {{ machine.interconnect.topology }}
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
                    <td>
                      {{ machine.interconnect.description }}
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
                    <td>
                      {{ machine.interconnect.vendor }}
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
                    <td>
                      {{ machine.benchmark_perf.peak }}
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
                    <td>
                      {{ machine.benchmark_perf.linpack }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!----><!---->
          </div>
        </div>
      </div>
    </div>
    <!----><!---->
  </div>
  </div>
</template>

<script>
// Define the data to use
const machine_data = {
  institute: {
    name: "[INSTITUTE NAME]",
  },
  machine: {
    name: "[MACHINE NAME]",
    partition: "[PARTITION VALUE]",
    location: "[LOCATION VALUE]",
    description: "[DESCRIPTION VALUE]",
    online_documentation: "[ONLINE DOCS VALUE]",
    when_available_from: "[WHEN AVAILABLE FROM VALUE]",
    when_available_to: "[WHEN AVAILABLE TO VALUE]",
    os: "[OS VALUE]",
    vendor: "[VENDOR VALUE]",
    model_number: "[MODEL NUMBER VALUE]",
    compute_pool_1: {
      name: "[CP1 NAME VALUE]",
      description: "[CP1 DESCRIPTION VALUE]",
      vendor: "[CP1 VENDOR VALUE]",
      model_number: "[CP1 MODEL NUMBER VALUE]",
      number_of_nodes: "[CP1 NUMBER OF NODES VALUE]",
      memory_per_node: "[CP1 MEMORY PER NODE VALUE]",
      cpu_cores_per_node: "[CP1 CPU CORES PER NODE VALUE]",
      accelerators_per_node: "[CP1 ACCELERATORS PER NODE VALUE]",
      accelerator_type: "[CP1 ACCELERATOR TYPE VALUE]",
      cpu_type: "[CP1 CPU TYPE VALUE]",
      clock_speed: "[CP1 CLOCK SPEED VALUE]",
      concurrency: "[CP1 CONCURRENCY VALUE]",
      nic_1: {
        name: "[CP1 N1 NAME VALUE]",
        bandwidth: "[CP1 N1 BANDWIDTH VALUE]",
        vendor: "[CP1 N1 VENDOR VALUE]",
      },
      nic_2: {
        name: "[CP1 N2 NAME VALUE]",
        bandwidth: "[CP1 N2 BANDWIDTH VALUE]",
        vendor: "[CP1 N2 VENDOR VALUE]",
      },
    },
    compute_pool_2: {
      name: "[CP2 NAME VALUE]",
      description: "[CP2 DESCRIPTION VALUE]",
      vendor: "[CP2 VENDOR VALUE]",
      model_number: "[CP2 MODEL NUMBER VALUE]",
      number_of_nodes: "[CP2 NUMBER OF NODES VALUE]",
      memory_per_node: "[CP2 MEMORY PER NODE VALUE]",
      cpu_cores_per_node: "[CP2 CPU CORES PER NODE VALUE]",
      accelerators_per_node: "[CP2 ACCELERATORS PER NODE VALUE]",
      accelerator_type: "[CP2 ACCELERATOR TYPE VALUE]",
      cpu_type: "[CP2 CPU TYPE VALUE]",
      clock_speed: "[CP2 CLOCK SPEED VALUE]",
      concurrency: "[CP2 CONCURRENCY VALUE]",
      nic_1: {
        name: "[CP2 N1 NAME VALUE]",
        bandwidth: "[CP2 N1 BANDWIDTH VALUE]",
        vendor: "[CP2 N1 VENDOR VALUE]",
      },
      nic_2: {
        name: "[CP2 N2 NAME VALUE]",
        bandwidth: "[CP2 N2 BANDWIDTH VALUE]",
        vendor: "[CP2 N2 VENDOR VALUE]",
      },
    },
    storage_pool_1: {
      name: "[SP1 NAME VALUE]",
      file_system_sizes: "[SP1 FILE_SYSTEM_SIZES VALUE]",
      description: "[SP1 DESCRIPTION VALUE]",
      type: "[SP1 TYPE VALUE]",
      vendor: "[SP1 VENDOR VALUE]",
    },
    storage_pool_2: {
      name: "[SP2 NAME VALUE]",
      file_system_sizes: "[SP2 FILE_SYSTEM_SIZES VALUE]",
      description: "[SP2 DESCRIPTION VALUE]",
      type: "[SP2 TYPE VALUE]",
      vendor: "[SP2 VENDOR VALUE]",
    },
    interconnect: {
      name: "[INTERCONNECT NAME VALUE]",
      topology: "[INTERCONNECT TOPOLOGY VALUE]",
      description: "[INTERCONNECT DESCRIPTION VALUE]",
      vendor: "[INTERCONNECT VENDOR VALUE]",
    },
    benchmark_perf: {
      peak: "[BENCHMARK PERFORMANCE PEAK VALUE]",
      linpack: "[BENCHMARK PERFORMANCE LINPACK VALUE]",
    },
  },
}

export default {
  name: 'Machine',
  data() {
    return machine_data
  }
}
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
