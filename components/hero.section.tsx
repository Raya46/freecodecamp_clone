"use client";

import React from "react";
import Image from "next/image";
import landingfcc from "@/assets/landingfcc.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-64 mt-28">
      <div className="flex flex-col gap-10 text-white">
        <h2 className="text-5xl">Learn to code - for free</h2>
        <h2 className="text-5xl">Build projects.</h2>
        <h2 className="text-5xl">Earn certifications</h2>
        <p className="text-2xl">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
      </div>

      <div className="flex flex-row gap-10 items-center justify-between">
        <svg
          id="apple-logo"
          className="fill-[#D0D0CD]"
          height="50"
          width="50"
          viewBox="450 0 500 650"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d=" M 856.091 303.9 C 855.442 231.513 915.212 196.762 917.915 195.068 C 884.281 145.861 831.938 139.12 813.265 138.327 C 768.744 133.82 726.35 164.534 703.784 164.534 C 681.217 164.534 646.321 138.975 609.407 139.697 C 560.813 140.417 516.076 167.923 491.058 211.398 C 440.625 298.889 478.188 428.558 527.287 499.575 C 551.332 534.29 579.955 573.403 617.59 571.961 C 653.855 570.519 667.554 548.529 711.318 548.529 C 755.081 548.529 767.41 571.961 805.73 571.276 C 844.7 570.519 869.429 535.804 893.294 500.981 C 920.835 460.678 932.227 421.673 932.876 419.618 C 932.01 419.257 856.884 390.454 856.091 303.9 Z "></path>
            <path d=" M 784.1 91.348 C 804.071 67.159 817.553 33.524 813.839 0 C 785.07 1.155 750.249 19.179 729.592 43.368 C 711.099 64.746 694.877 98.991 699.273 131.833 C 731.358 134.32 764.125 115.501 784.1 91.348"></path>
          </g>
        </svg>
        <svg
          id="google-logo"
          className="fill-[#D0D0CD]"
          viewBox="1635 200 1185 600"
          height="80"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d=" M 2143.153 531.761 C 2143.153 587.997 2099.159 629.437 2045.169 629.437 C 1991.178 629.437 1947.184 587.997 1947.184 531.761 C 1947.184 475.128 1991.178 434.085 2045.169 434.085 C 2099.159 434.085 2143.153 475.128 2143.153 531.761 Z  M 2100.26 531.761 C 2100.26 496.619 2074.762 472.574 2045.169 472.574 C 2015.575 472.574 1990.077 496.619 1990.077 531.761 C 1990.077 566.551 2015.575 590.948 2045.169 590.948 C 2074.762 590.948 2100.26 566.507 2100.26 531.761 Z "></path>
            <path d=" M 2354.534 531.761 C 2354.534 587.997 2310.541 629.437 2256.55 629.437 C 2202.56 629.437 2158.566 587.997 2158.566 531.761 C 2158.566 475.172 2202.56 434.085 2256.55 434.085 C 2310.541 434.085 2354.534 475.128 2354.534 531.761 Z  M 2311.642 531.761 C 2311.642 496.619 2286.144 472.574 2256.55 472.574 C 2226.957 472.574 2201.459 496.619 2201.459 531.761 C 2201.459 566.551 2226.957 590.948 2256.55 590.948 C 2286.144 590.948 2311.642 566.507 2311.642 531.761 Z "></path>
            <path d=" M 2557.109 439.986 L 2557.109 615.345 C 2557.109 687.479 2514.568 716.94 2464.277 716.94 C 2416.936 716.94 2388.444 685.277 2377.698 659.383 L 2415.043 643.837 C 2421.692 659.735 2437.986 678.495 2464.233 678.495 C 2496.424 678.495 2516.374 658.634 2516.374 621.246 L 2516.374 607.198 L 2514.876 607.198 C 2505.276 619.044 2486.78 629.393 2463.44 629.393 C 2414.602 629.393 2369.86 586.852 2369.86 532.113 C 2369.86 476.978 2414.602 434.085 2463.44 434.085 C 2486.736 434.085 2505.232 444.434 2514.876 455.928 L 2516.374 455.928 L 2516.374 440.03 L 2557.109 440.03 L 2557.109 439.986 Z  M 2519.412 532.113 C 2519.412 497.72 2496.468 472.574 2467.271 472.574 C 2437.678 472.574 2412.885 497.72 2412.885 532.113 C 2412.885 566.154 2437.678 590.948 2467.271 590.948 C 2496.468 590.948 2519.412 566.154 2519.412 532.113 Z "></path>
            <path d=" M 2624.266 337.202 L 2624.266 623.448 L 2582.43 623.448 L 2582.43 337.202 L 2624.266 337.202 Z "></path>
            <path d=" M 2787.294 563.908 L 2820.587 586.104 C 2809.842 602.001 2783.948 629.393 2739.205 629.393 C 2683.717 629.393 2642.278 586.5 2642.278 531.717 C 2642.278 473.631 2684.07 434.041 2734.405 434.041 C 2785.093 434.041 2809.886 474.379 2817.989 496.178 L 2822.437 507.276 L 2691.864 561.354 C 2701.861 580.951 2717.406 590.948 2739.205 590.948 C 2761.048 590.948 2776.197 580.202 2787.294 563.908 Z  M 2684.818 528.766 L 2772.101 492.523 C 2767.301 480.325 2752.857 471.825 2735.858 471.825 C 2714.06 471.825 2683.717 491.07 2684.818 528.766 L 2684.818 528.766 Z "></path>
            <path d=" M 1788.824 506.351 L 1788.824 464.911 L 1928.468 464.911 C 1929.833 472.134 1930.538 480.677 1930.538 489.925 C 1930.538 521.016 1922.039 559.461 1894.647 586.852 C 1868.004 614.596 1833.963 629.393 1788.868 629.393 C 1705.284 629.393 1635 561.31 1635 477.726 C 1635 394.143 1705.284 326.06 1788.868 326.06 C 1835.108 326.06 1868.048 344.204 1892.798 367.852 L 1863.556 397.093 C 1845.809 380.447 1821.765 367.5 1788.824 367.5 C 1727.788 367.5 1680.051 416.69 1680.051 477.726 C 1680.051 538.763 1727.788 587.953 1788.824 587.953 C 1828.414 587.953 1850.962 572.055 1865.406 557.611 C 1877.12 545.897 1884.827 529.163 1887.865 506.307 L 1788.824 506.351 Z "></path>
          </g>
        </svg>
        <svg
          id="microsoft-logo"
          className="fill-[#D0D0CD]"
          viewBox="939.813 1185 1400 472"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d=" M 1430.669 1446.063 L 1422.38 1469.547 L 1421.69 1469.547 C 1420.308 1464.251 1417.776 1456.193 1413.631 1446.523 L 1369.196 1334.86 L 1325.683 1334.86 L 1325.683 1512.83 L 1354.462 1512.83 L 1354.462 1403.009 C 1354.462 1396.102 1354.462 1388.274 1354.231 1378.605 C 1354.001 1373.77 1353.541 1370.086 1353.31 1367.323 L 1354.001 1367.323 C 1355.383 1374.23 1356.994 1379.295 1358.145 1382.519 L 1411.559 1512.37 L 1431.82 1512.37 L 1484.773 1381.367 C 1485.924 1378.374 1487.076 1372.388 1488.227 1367.323 L 1488.917 1367.323 C 1488.227 1380.447 1487.766 1392.188 1487.536 1399.326 L 1487.536 1512.14 L 1518.157 1512.14 L 1518.157 1334.4 L 1476.255 1334.4 L 1430.669 1446.063 L 1430.669 1446.063 Z  M 1547.166 1384.591 L 1577.096 1384.591 L 1577.096 1512.14 L 1547.166 1512.14 L 1547.166 1384.591 Z  M 1562.362 1330.716 C 1557.297 1330.716 1553.152 1332.558 1549.699 1335.781 C 1546.245 1339.005 1544.403 1343.149 1544.403 1348.214 C 1544.403 1353.049 1546.245 1357.193 1549.699 1360.416 C 1553.152 1363.64 1557.297 1365.251 1562.362 1365.251 C 1567.427 1365.251 1571.801 1363.409 1575.024 1360.416 C 1578.478 1357.193 1580.32 1353.049 1580.32 1348.214 C 1580.32 1343.379 1578.478 1339.235 1575.024 1335.781 C 1572.031 1332.558 1567.657 1330.716 1562.362 1330.716 Z  M 1683.234 1383.44 C 1677.708 1382.288 1671.952 1381.598 1666.427 1381.598 C 1652.843 1381.598 1640.41 1384.591 1630.05 1390.577 C 1619.689 1396.563 1611.401 1404.851 1606.106 1415.212 C 1600.58 1425.802 1597.817 1438.005 1597.817 1452.049 C 1597.817 1464.251 1600.58 1475.072 1605.876 1484.972 C 1611.171 1494.642 1618.538 1502.47 1628.438 1507.765 C 1637.878 1513.06 1648.929 1515.823 1661.362 1515.823 C 1675.636 1515.823 1687.838 1512.83 1697.508 1507.305 L 1697.738 1507.074 L 1697.738 1479.447 L 1696.587 1480.367 C 1692.213 1483.591 1687.148 1486.353 1682.083 1487.965 C 1676.787 1489.807 1671.952 1490.728 1667.808 1490.728 C 1655.836 1490.728 1646.396 1487.274 1639.72 1479.677 C 1632.813 1472.309 1629.359 1462.179 1629.359 1449.516 C 1629.359 1436.393 1632.813 1426.033 1639.95 1418.435 C 1647.087 1410.837 1656.527 1406.923 1668.038 1406.923 C 1677.708 1406.923 1687.608 1410.147 1696.587 1416.593 L 1697.738 1417.514 L 1697.738 1388.274 L 1697.508 1388.044 C 1693.594 1386.433 1689.22 1384.591 1683.234 1383.44 M 1782.003 1382.519 C 1774.636 1382.519 1767.729 1384.821 1761.743 1389.656 C 1756.678 1393.8 1753.224 1399.786 1750.231 1406.923 L 1750.001 1406.923 L 1750.001 1384.591 L 1720.071 1384.591 L 1720.071 1512.14 L 1750.001 1512.14 L 1750.001 1446.984 C 1750.001 1435.933 1752.303 1426.723 1757.369 1420.047 C 1762.434 1413.14 1768.88 1409.686 1776.708 1409.686 C 1779.471 1409.686 1782.234 1410.377 1785.687 1410.837 C 1788.91 1411.758 1791.213 1412.679 1792.824 1413.83 L 1793.976 1414.751 L 1793.976 1384.821 L 1793.285 1384.591 C 1791.213 1383.209 1787.069 1382.519 1782.003 1382.519 M 1863.506 1381.828 C 1842.555 1381.828 1825.748 1388.044 1814.006 1400.247 C 1802.034 1412.449 1796.278 1429.256 1796.278 1450.437 C 1796.278 1470.237 1802.264 1486.353 1813.776 1498.095 C 1825.287 1509.607 1840.943 1515.593 1860.513 1515.593 C 1881.003 1515.593 1897.35 1509.377 1909.092 1496.944 C 1921.064 1484.512 1926.82 1467.935 1926.82 1447.444 C 1926.82 1427.184 1921.294 1411.067 1910.013 1399.326 C 1899.192 1387.584 1883.306 1381.828 1863.506 1381.828 M 1887.45 1479.907 C 1881.924 1487.044 1873.176 1490.498 1862.355 1490.498 C 1851.534 1490.498 1842.785 1487.044 1836.569 1479.447 C 1830.352 1472.309 1827.359 1461.949 1827.359 1448.826 C 1827.359 1435.242 1830.583 1424.881 1836.569 1417.514 C 1842.785 1410.147 1851.303 1406.463 1862.124 1406.463 C 1872.715 1406.463 1881.003 1409.916 1886.989 1417.053 C 1892.976 1424.191 1896.199 1434.551 1896.199 1448.135 C 1895.738 1461.949 1893.206 1472.77 1887.45 1479.907 M 1993.587 1437.544 C 1984.148 1433.63 1978.162 1430.637 1975.399 1428.105 C 1973.096 1425.802 1971.945 1422.579 1971.945 1418.435 C 1971.945 1414.981 1973.327 1411.528 1976.78 1409.226 C 1980.234 1406.923 1984.148 1405.772 1989.903 1405.772 C 1994.969 1405.772 2000.264 1406.693 2005.329 1408.074 C 2010.394 1409.456 2014.999 1411.528 2018.683 1414.291 L 2019.834 1415.212 L 2019.834 1387.123 L 2019.143 1386.893 C 2015.689 1385.512 2011.085 1384.13 2005.559 1382.979 C 2000.034 1382.058 1994.969 1381.598 1990.824 1381.598 C 1976.55 1381.598 1964.808 1385.051 1955.599 1392.649 C 1946.39 1399.786 1942.015 1409.456 1942.015 1420.737 C 1942.015 1426.723 1942.936 1432.019 1945.008 1436.393 C 1947.08 1440.767 1950.073 1444.912 1954.217 1448.365 C 1958.362 1451.588 1964.348 1455.272 1972.636 1458.726 C 1979.543 1461.719 1984.838 1464.021 1988.062 1465.863 C 1991.285 1467.705 1993.357 1469.777 1994.969 1471.388 C 1996.12 1473.23 1996.81 1475.533 1996.81 1478.526 C 1996.81 1487.044 1990.364 1491.188 1977.241 1491.188 C 1972.176 1491.188 1966.88 1490.267 1960.664 1488.195 C 1954.448 1486.123 1948.692 1483.13 1943.857 1479.677 L 1942.706 1478.756 L 1942.706 1507.995 L 1943.396 1508.226 C 1947.771 1510.298 1953.066 1511.679 1959.513 1513.291 C 1965.959 1514.442 1971.715 1515.363 1976.78 1515.363 C 1992.206 1515.363 2004.869 1511.909 2013.848 1504.312 C 2023.057 1496.944 2027.892 1487.505 2027.892 1475.302 C 2027.892 1466.784 2025.59 1459.186 2020.524 1453.43 C 2013.848 1447.905 2005.559 1442.149 1993.587 1437.544 M 2106.862 1381.828 C 2085.91 1381.828 2069.103 1388.044 2057.362 1400.247 C 2045.62 1412.449 2039.634 1429.256 2039.634 1450.437 C 2039.634 1470.237 2045.62 1486.353 2057.131 1498.095 C 2068.643 1509.607 2084.299 1515.593 2103.869 1515.593 C 2124.359 1515.593 2140.706 1509.377 2152.448 1496.944 C 2164.42 1484.512 2170.176 1467.935 2170.176 1447.444 C 2170.176 1427.184 2164.65 1411.067 2153.369 1399.326 C 2142.548 1387.584 2126.662 1381.828 2106.862 1381.828 M 2130.576 1479.907 C 2125.05 1487.044 2116.301 1490.498 2105.48 1490.498 C 2094.429 1490.498 2085.91 1487.044 2079.694 1479.447 C 2073.478 1472.309 2070.485 1461.949 2070.485 1448.826 C 2070.485 1435.242 2073.708 1424.881 2079.694 1417.514 C 2085.91 1410.147 2094.429 1406.463 2105.25 1406.463 C 2115.61 1406.463 2124.129 1409.916 2130.115 1417.053 C 2136.101 1424.191 2139.324 1434.551 2139.324 1448.135 C 2139.324 1461.949 2136.331 1472.77 2130.576 1479.907 M 2330.187 1409.226 L 2330.187 1384.591 L 2300.027 1384.591 L 2300.027 1346.833 L 2299.106 1347.063 L 2270.557 1355.581 L 2269.866 1355.812 L 2269.866 1384.591 L 2224.741 1384.591 L 2224.741 1368.474 C 2224.741 1361.107 2226.583 1355.351 2229.806 1351.667 C 2233.029 1347.984 2237.864 1346.142 2243.85 1346.142 C 2247.994 1346.142 2252.369 1347.063 2257.203 1349.135 L 2258.355 1349.826 L 2258.355 1323.809 L 2257.664 1323.579 C 2253.52 1322.198 2247.994 1321.277 2240.857 1321.277 C 2231.878 1321.277 2224.05 1323.349 2216.913 1326.802 C 2209.775 1330.716 2204.48 1336.012 2200.566 1343.149 C 2196.652 1350.056 2194.58 1357.884 2194.58 1366.863 L 2194.58 1384.591 L 2173.629 1384.591 L 2173.629 1408.995 L 2194.58 1408.995 L 2194.58 1512.14 L 2224.741 1512.14 L 2224.741 1409.226 L 2269.866 1409.226 L 2269.866 1474.842 C 2269.866 1501.779 2282.529 1515.363 2307.855 1515.363 C 2311.999 1515.363 2316.373 1514.672 2320.517 1513.981 C 2324.892 1513.06 2328.115 1511.909 2329.957 1510.988 L 2330.187 1510.758 L 2330.187 1486.123 L 2329.036 1487.044 C 2327.194 1488.195 2325.583 1489.116 2322.82 1489.807 C 2320.517 1490.498 2318.445 1490.728 2316.834 1490.728 C 2310.848 1490.728 2306.703 1489.347 2303.71 1485.893 C 2300.948 1482.67 2299.566 1477.374 2299.566 1469.547 L 2299.566 1409.226 L 2330.187 1409.226 L 2330.187 1409.226 Z "></path>
            <path d=" M 939.813 1275 L 1080.945 1275 L 1080.945 1416.133 L 939.813 1416.133 L 939.813 1275 Z "></path>
            <path d=" M 1095.68 1275 L 1236.813 1275 L 1236.813 1416.133 L 1095.68 1416.133 L 1095.68 1275 Z "></path>
            <path d=" M 939.813 1430.867 L 1080.945 1430.867 L 1080.945 1572 L 939.813 1572 L 939.813 1430.867 Z "></path>
            <path d=" M 1095.68 1430.867 L 1236.813 1430.867 L 1236.813 1572 L 1095.68 1572 L 1095.68 1430.867 Z "></path>
          </g>
        </svg>
        <svg
          id="spotify-logo"
          className="fill-[#D0D0CD]"
          viewBox="3018 235.379 1525 572"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d=" M 3254.79 285.379 C 3124.017 285.379 3018 391.394 3018 522.167 C 3018 652.946 3124.017 758.952 3254.79 758.952 C 3385.578 758.952 3491.584 652.946 3491.584 522.167 C 3491.584 391.402 3385.578 285.391 3254.788 285.391 L 3254.79 285.379 L 3254.79 285.379 Z  M 3363.381 626.895 C 3359.14 633.851 3350.035 636.056 3343.079 631.787 C 3287.483 597.827 3217.495 590.136 3135.071 608.968 C 3127.128 610.778 3119.211 605.801 3117.401 597.856 C 3115.583 589.91 3120.54 581.993 3128.502 580.183 C 3218.702 559.576 3296.073 568.449 3358.489 606.593 C 3365.445 610.863 3367.651 619.939 3363.381 626.895 L 3363.381 626.895 Z  M 3392.364 562.42 C 3387.02 571.107 3375.653 573.85 3366.972 568.505 C 3303.323 529.383 3206.3 518.053 3131.016 540.905 C 3121.252 543.854 3110.94 538.352 3107.977 528.605 C 3105.036 518.842 3110.541 508.549 3120.288 505.58 C 3206.283 479.487 3313.191 492.127 3386.285 537.043 C 3394.965 542.387 3397.708 553.754 3392.364 562.423 L 3392.364 562.42 Z  M 3394.852 495.282 C 3318.536 449.953 3192.623 445.785 3119.759 467.9 C 3108.059 471.449 3095.685 464.843 3092.139 453.143 C 3088.593 441.437 3095.193 429.071 3106.902 425.514 C 3190.545 400.123 3329.591 405.029 3417.456 457.189 C 3428.003 463.435 3431.452 477.027 3425.203 487.537 C 3418.983 498.062 3405.354 501.531 3394.863 495.282 L 3394.852 495.282 Z  M 3662.229 503.969 C 3621.342 494.219 3614.075 487.376 3614.075 472.998 C 3614.075 459.414 3626.855 450.273 3645.885 450.273 C 3664.321 450.273 3682.587 457.214 3701.758 471.505 C 3702.324 471.938 3703.059 472.11 3703.766 471.997 C 3704.501 471.89 3705.123 471.497 3705.547 470.906 L 3725.51 442.765 C 3726.33 441.606 3726.104 440.009 3725.001 439.124 C 3702.182 420.821 3676.508 411.922 3646.479 411.922 C 3602.34 411.922 3571.491 438.414 3571.491 476.318 C 3571.491 516.964 3598.099 531.357 3644.075 542.466 C 3683.181 551.478 3689.798 559.027 3689.798 572.521 C 3689.798 587.478 3676.451 596.781 3654.962 596.781 C 3631.097 596.781 3611.615 588.723 3589.842 569.891 C 3589.305 569.41 3588.57 569.212 3587.891 569.241 C 3587.156 569.297 3586.506 569.636 3586.053 570.174 L 3563.659 596.81 C 3562.726 597.941 3562.839 599.581 3563.913 600.542 C 3589.249 623.163 3620.409 635.095 3654.057 635.095 C 3701.617 635.095 3732.353 609.109 3732.353 568.873 C 3732.438 534.922 3712.107 516.119 3662.313 504.005 L 3662.229 503.969 L 3662.229 503.969 Z  M 3839.971 463.647 C 3819.358 463.647 3802.449 471.768 3788.48 488.408 L 3788.48 469.678 C 3788.48 468.2 3787.293 466.995 3785.822 466.995 L 3749.205 466.995 C 3747.735 466.995 3746.547 468.2 3746.547 469.678 L 3746.547 677.792 C 3746.547 679.262 3747.735 680.478 3749.205 680.478 L 3785.822 680.478 C 3787.293 680.478 3788.48 679.262 3788.48 677.792 L 3788.48 612.107 C 3802.449 627.743 3819.358 635.406 3839.971 635.406 C 3878.284 635.406 3917.079 605.914 3917.079 549.535 C 3917.135 493.145 3878.341 463.644 3839.999 463.644 L 3839.971 463.647 Z  M 3874.495 549.535 C 3874.495 578.232 3856.823 598.28 3831.488 598.28 C 3806.464 598.28 3787.575 577.327 3787.575 549.535 C 3787.575 521.74 3806.464 500.793 3831.488 500.793 C 3856.399 500.79 3874.495 521.285 3874.495 549.532 L 3874.495 549.535 Z  M 4016.468 463.647 C 3967.127 463.647 3928.474 501.639 3928.474 550.149 C 3928.474 598.138 3966.873 635.717 4015.875 635.717 C 4065.386 635.717 4104.152 597.856 4104.152 549.535 C 4104.152 501.378 4065.64 463.653 4016.468 463.653 L 4016.468 463.647 L 4016.468 463.647 Z  M 4016.468 598.563 C 3990.228 598.563 3970.435 577.469 3970.435 549.521 C 3970.435 521.446 3989.55 501.073 4015.875 501.073 C 4042.284 501.073 4062.191 522.158 4062.191 550.135 C 4062.191 578.204 4042.963 598.563 4016.468 598.563 L 4016.468 598.563 Z  M 4209.508 466.995 L 4169.215 466.995 L 4169.215 425.808 C 4169.215 424.332 4168.027 423.128 4166.557 423.128 L 4129.939 423.128 C 4128.469 423.128 4127.253 424.332 4127.253 425.808 L 4127.253 466.995 L 4109.666 466.995 C 4108.195 466.995 4107.008 468.2 4107.008 469.678 L 4107.008 501.141 C 4107.008 502.617 4108.195 503.824 4109.666 503.824 L 4127.253 503.824 L 4127.253 585.245 C 4127.253 618.13 4143.625 634.812 4175.944 634.812 C 4189.064 634.812 4199.951 632.098 4210.215 626.273 C 4211.063 625.821 4211.572 624.916 4211.572 623.954 L 4211.572 593.982 C 4211.572 593.077 4211.091 592.201 4210.299 591.72 C 4209.508 591.211 4208.518 591.183 4207.698 591.607 C 4200.657 595.141 4193.843 596.781 4186.208 596.781 C 4174.474 596.781 4169.215 591.437 4169.215 579.505 L 4169.215 503.839 L 4209.508 503.839 C 4210.978 503.839 4212.166 502.634 4212.166 501.155 L 4212.166 469.695 C 4212.222 468.217 4211.035 467.012 4209.536 467.012 L 4209.508 466.995 L 4209.508 466.995 Z  M 4349.869 467.156 L 4349.869 462.098 C 4349.869 447.216 4355.581 440.58 4368.361 440.58 C 4375.996 440.58 4382.132 442.095 4389.003 444.386 C 4389.851 444.651 4390.728 444.519 4391.406 444.012 C 4392.113 443.506 4392.509 442.695 4392.509 441.835 L 4392.509 410.986 C 4392.509 409.807 4391.774 408.764 4390.615 408.416 C 4383.376 406.259 4374.101 404.045 4360.19 404.045 C 4326.4 404.045 4308.501 423.085 4308.501 459.089 L 4308.501 466.837 L 4290.914 466.837 C 4289.444 466.837 4288.228 468.041 4288.228 469.517 L 4288.228 501.141 C 4288.228 502.617 4289.444 503.824 4290.914 503.824 L 4308.501 503.824 L 4308.501 629.383 C 4308.501 630.882 4309.717 632.069 4311.188 632.069 L 4347.777 632.069 C 4349.275 632.069 4350.463 630.882 4350.463 629.383 L 4350.463 503.833 L 4384.648 503.833 L 4437.015 629.383 C 4431.077 642.56 4425.224 645.189 4417.25 645.189 C 4410.803 645.189 4403.989 643.267 4397.061 639.449 C 4396.411 639.11 4395.619 639.054 4394.941 639.252 C 4394.234 639.506 4393.64 640.015 4393.357 640.694 L 4380.944 667.923 C 4380.35 669.224 4380.859 670.723 4382.104 671.401 C 4395.054 678.414 4406.732 681.411 4421.181 681.411 C 4448.212 681.411 4463.17 668.8 4476.319 634.925 L 4539.826 470.821 C 4540.166 469.995 4540.052 469.062 4539.543 468.33 C 4539.063 467.603 4538.243 467.165 4537.366 467.165 L 4499.25 467.165 C 4498.091 467.165 4497.073 467.891 4496.706 468.963 L 4457.657 580.466 L 4414.904 468.89 C 4414.508 467.852 4413.518 467.165 4412.415 467.165 L 4349.869 467.165 L 4349.869 467.156 L 4349.869 467.156 Z  M 4268.491 466.995 L 4231.874 466.995 C 4230.404 466.995 4229.188 468.2 4229.188 469.678 L 4229.188 629.383 C 4229.188 630.882 4230.404 632.069 4231.874 632.069 L 4268.491 632.069 C 4269.961 632.069 4271.177 630.882 4271.177 629.383 L 4271.177 469.69 C 4271.177 468.211 4269.99 467.006 4268.491 467.006 L 4268.491 466.995 Z  M 4250.395 394.272 C 4235.889 394.272 4224.126 406.013 4224.126 420.515 C 4224.126 435.026 4235.889 446.781 4250.395 446.781 C 4264.9 446.781 4276.635 435.026 4276.635 420.515 C 4276.635 406.015 4264.872 394.272 4250.395 394.272 Z  M 4571.099 518.347 C 4556.622 518.347 4545.34 506.711 4545.34 492.582 C 4545.34 478.452 4556.764 466.684 4571.241 466.684 C 4585.718 466.684 4597 478.317 4597 492.435 C 4597 506.564 4585.577 518.347 4571.099 518.347 Z  M 4571.241 469.246 C 4558.036 469.246 4548.055 479.736 4548.055 492.582 C 4548.055 505.422 4557.979 515.771 4571.099 515.771 C 4584.304 515.771 4594.285 505.289 4594.285 492.435 C 4594.285 479.595 4584.361 469.246 4571.241 469.246 L 4571.241 469.246 Z  M 4576.953 495.084 L 4584.248 505.286 L 4578.083 505.286 L 4571.523 495.927 L 4565.897 495.927 L 4565.897 505.286 L 4560.75 505.286 L 4560.75 478.243 L 4572.796 478.243 C 4579.101 478.243 4583.23 481.458 4583.23 486.87 C 4583.258 491.304 4580.685 494.013 4576.981 495.084 L 4576.953 495.084 Z  M 4572.598 482.883 L 4565.897 482.883 L 4565.897 491.437 L 4572.598 491.437 C 4575.934 491.437 4577.942 489.8 4577.942 487.156 C 4577.942 484.373 4575.934 482.883 4572.598 482.883 L 4572.598 482.883 Z "></path>
        </svg>
        <svg
          id="amazon-logo"
          className="fill-[#D0D0CD]"
          height="100"
          width="100"
          viewBox="93.907 250 1350 472"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d=" M 627.609 633.492 C 577.617 670.34 505.156 690 442.768 690 C 355.291 690 276.539 657.645 216.96 603.833 C 212.279 599.602 216.473 593.835 222.09 597.13 C 286.387 634.54 365.888 657.046 448.011 657.046 C 503.396 657.046 564.323 645.587 620.344 621.808 C 628.808 618.213 635.885 627.35 627.609 633.492"></path>
            <path d=" M 648.393 609.712 C 642.027 601.549 606.152 605.855 590.049 607.765 C 585.144 608.364 584.395 604.095 588.814 601.025 C 617.386 580.915 664.27 586.72 669.738 593.46 C 675.205 600.238 668.315 647.235 641.465 669.666 C 637.346 673.111 633.414 671.276 635.249 666.708 C 641.278 651.654 654.796 617.914 648.393 609.712"></path>
            <path d=" M 591.173 459.061 L 591.173 439.513 C 591.173 436.555 593.42 434.57 596.116 434.57 L 683.631 434.57 C 686.439 434.57 688.686 436.593 688.686 439.513 L 688.686 456.252 C 688.649 459.061 686.289 462.731 682.095 468.535 L 636.746 533.282 C 653.598 532.87 671.385 535.379 686.664 543.992 C 690.109 545.939 691.045 548.785 691.308 551.594 L 691.308 572.452 C 691.308 575.298 688.162 578.631 684.867 576.908 C 657.942 562.791 622.179 561.255 592.409 577.058 C 589.375 578.706 586.192 575.411 586.192 572.565 L 586.192 552.755 C 586.192 549.572 586.23 544.142 589.413 539.311 L 641.952 463.967 L 596.228 463.967 C 593.42 463.967 591.173 461.982 591.173 459.061"></path>
            <path d=" M 271.933 581.028 L 245.307 581.028 C 242.761 580.84 240.739 578.931 240.552 576.497 L 240.552 439.85 C 240.552 437.117 242.836 434.945 245.682 434.945 L 270.51 434.945 C 273.093 435.057 275.153 437.042 275.34 439.513 L 275.34 457.376 L 275.827 457.376 C 282.306 440.113 294.476 432.061 310.878 432.061 C 327.542 432.061 337.953 440.113 345.442 457.376 C 351.883 440.113 366.525 432.061 382.216 432.061 C 393.375 432.061 405.583 436.667 413.035 447.003 C 421.461 458.499 419.738 475.201 419.738 489.843 L 419.701 576.085 C 419.701 578.818 417.416 581.028 414.57 581.028 L 387.983 581.028 C 385.324 580.84 383.189 578.706 383.189 576.085 L 383.189 503.661 C 383.189 497.894 383.713 483.514 382.44 478.047 C 380.456 468.872 374.501 466.288 366.787 466.288 C 360.346 466.288 353.606 470.595 350.872 477.485 C 348.138 484.376 348.4 495.909 348.4 503.661 L 348.4 576.085 C 348.4 578.818 346.116 581.028 343.27 581.028 L 316.682 581.028 C 313.986 580.84 311.889 578.706 311.889 576.085 L 311.852 503.661 C 311.852 488.42 314.361 465.989 295.45 465.989 C 276.314 465.989 277.063 487.858 277.063 503.661 L 277.063 576.085 C 277.063 578.818 274.779 581.028 271.933 581.028"></path>
            <path d=" M 764.031 432.061 C 803.538 432.061 824.92 465.989 824.92 509.128 C 824.92 550.808 801.291 583.874 764.031 583.874 C 725.235 583.874 704.115 549.946 704.115 507.668 C 704.115 465.128 725.497 432.061 764.031 432.061 Z  M 764.255 459.96 C 744.633 459.96 743.397 486.697 743.397 503.362 C 743.397 520.063 743.135 555.713 764.031 555.713 C 784.664 555.713 785.638 526.953 785.638 509.428 C 785.638 497.894 785.151 484.113 781.668 473.179 C 778.673 463.667 772.718 459.96 764.255 459.96 Z "></path>
            <path d=" M 876.149 581.028 L 849.636 581.028 C 846.977 580.84 844.842 578.706 844.842 576.085 L 844.805 439.401 C 845.03 436.892 847.239 434.945 849.935 434.945 L 874.613 434.945 C 876.935 435.057 878.845 436.63 879.369 438.765 L 879.369 459.66 L 879.856 459.66 C 887.308 440.974 897.756 432.061 916.142 432.061 C 928.088 432.061 939.734 436.368 947.224 448.164 C 954.189 459.099 954.189 477.485 954.189 490.704 L 954.189 576.721 C 953.89 579.118 951.68 581.028 949.059 581.028 L 922.359 581.028 C 919.925 580.84 917.902 579.043 917.64 576.721 L 917.64 502.5 C 917.64 487.559 919.363 465.689 900.976 465.689 C 894.498 465.689 888.544 470.033 885.585 476.624 C 881.841 484.975 881.354 493.288 881.354 502.5 L 881.354 576.085 C 881.316 578.818 878.995 581.028 876.149 581.028"></path>
            <path d=" M 970.853 570.168 C 970.853 563.278 976.733 557.735 983.96 557.735 C 991.187 557.735 997.067 563.278 997.067 570.168 C 997.067 577.021 991.187 582.638 983.96 582.638 C 976.733 582.638 970.853 577.021 970.853 570.168 Z "></path>
            <path d=" M 1252.946 581.065 C 1250.174 580.953 1248.003 578.818 1248.003 576.122 L 1248.003 439.476 C 1248.152 437.042 1250.212 435.132 1252.758 434.982 L 1262.532 434.982 C 1265.228 434.982 1267.4 436.93 1267.625 439.476 L 1267.625 459.398 C 1274.59 443.595 1287.547 431.238 1303.912 431.238 L 1304.923 431.238 L 1305.896 431.238 C 1323.272 431.238 1335.967 444.045 1340.685 462.656 C 1348.062 444.269 1361.918 431.238 1380.192 431.238 L 1381.128 431.238 L 1382.214 431.238 C 1395.134 431.238 1407.566 439.551 1414.007 452.208 C 1420.224 464.304 1419.999 480.406 1419.999 493.925 L 1419.962 576.122 C 1419.999 578.743 1417.865 580.878 1415.206 581.065 L 1403.522 581.065 C 1400.976 580.953 1398.916 579.155 1398.579 576.796 L 1398.579 493.925 C 1398.579 484.151 1399.066 473.778 1395.096 464.865 C 1391.052 455.766 1383.301 450.074 1374.987 449.662 C 1365.7 450.111 1357.162 456.889 1351.62 466.026 C 1344.43 477.822 1344.692 488.457 1344.692 502.238 L 1344.692 576.871 C 1344.355 579.118 1342.37 580.878 1339.936 581.065 L 1328.328 581.065 C 1325.556 580.953 1323.347 578.818 1323.347 576.122 L 1323.272 488.457 C 1323.272 480.406 1322.785 470.932 1319.078 463.705 C 1314.772 455.466 1307.057 450.074 1298.969 449.662 C 1290.58 450.149 1282.117 456.552 1277.099 464.004 C 1270.621 473.516 1269.385 485.274 1269.385 497.37 L 1269.385 576.122 C 1269.385 578.743 1267.251 580.878 1264.592 581.065 L 1252.946 581.065"></path>
            <path d=" M 1172.733 583.911 C 1134.948 583.911 1118.022 545.378 1118.022 506.844 C 1118.022 466.326 1137.907 431.238 1175.953 431.238 L 1176.927 431.238 L 1177.976 431.238 C 1214.974 431.238 1233.398 468.61 1233.398 507.144 C 1233.398 547.961 1212.989 583.911 1174.718 583.911 L 1173.744 583.911 L 1172.733 583.911 M 1175.504 565.225 C 1187.937 564.813 1197.748 557.099 1203.552 544.254 C 1208.757 532.72 1209.769 519.501 1209.769 506.844 C 1209.769 493.063 1208.271 478.684 1201.792 466.888 C 1195.988 456.59 1186.027 450.036 1175.467 449.662 C 1163.708 450.074 1153.185 458.05 1147.905 470.333 C 1143.149 480.968 1141.689 495.086 1141.689 506.844 C 1141.689 520.063 1143.412 535.342 1148.879 546.838 C 1154.196 557.735 1164.42 564.813 1175.504 565.225"></path>
            <path d=" M 1054.661 564.626 C 1071.625 564.101 1080.537 550.508 1084.207 532.908 C 1084.956 530.698 1086.641 529.013 1089.113 529.013 L 1100.309 528.976 C 1102.968 529.088 1105.402 531.11 1105.178 533.582 C 1100.01 563.577 1081.923 583.911 1056.159 583.911 L 1055.11 583.911 L 1054.137 583.911 C 1016.614 583.911 1000.437 546.239 1000.437 508.005 C 1000.437 470.071 1016.839 431.238 1054.361 431.238 L 1055.372 431.238 L 1056.383 431.238 C 1082.447 431.238 1101.021 451.309 1105.065 481.305 C 1105.065 483.552 1102.968 485.499 1100.497 485.761 L 1088.776 485.611 C 1086.304 485.274 1084.694 483.177 1084.319 480.818 C 1081.511 464.079 1071.887 450.748 1055.859 450.223 C 1030.357 451.047 1023.093 482.428 1023.093 506.582 C 1023.093 529.837 1029.159 563.802 1054.661 564.626"></path>
            <path d=" M 521.408 515.757 C 521.408 526.13 521.67 534.78 516.427 543.992 C 512.196 551.482 505.455 556.088 498.003 556.088 C 487.78 556.088 481.789 548.299 481.789 536.802 C 481.789 514.109 502.123 509.99 521.408 509.99 L 521.408 515.757 Z  M 548.258 580.653 C 546.498 582.226 543.951 582.338 541.967 581.29 C 533.129 573.95 531.519 570.542 526.688 563.54 C 512.084 578.444 501.711 582.9 482.8 582.9 C 460.369 582.9 442.955 569.082 442.955 541.408 C 442.955 519.801 454.639 505.084 471.341 497.894 C 485.795 491.528 505.98 490.405 521.408 488.645 L 521.408 485.199 C 521.408 478.871 521.895 471.381 518.15 465.914 C 514.93 461.008 508.713 458.986 503.209 458.986 C 493.06 458.986 484.035 464.191 481.826 474.976 C 481.377 477.373 479.617 479.732 477.182 479.844 L 451.381 477.073 C 449.209 476.587 446.775 474.826 447.412 471.494 C 453.328 440.188 481.639 430.751 506.953 430.751 C 519.91 430.751 536.836 434.196 547.06 444.007 C 560.016 456.103 558.781 472.243 558.781 489.805 L 558.781 531.297 C 558.781 543.767 563.948 549.235 568.817 555.975 C 570.502 558.372 570.876 561.255 568.704 563.053 C 563.274 567.584 553.613 576.01 548.295 580.728 L 548.258 580.653"></path>
            <path d=" M 172.36 515.757 C 172.36 526.13 172.622 534.78 167.379 543.992 C 163.147 551.482 156.444 556.088 148.955 556.088 C 138.732 556.088 132.778 548.299 132.778 536.802 C 132.778 514.109 153.112 509.99 172.36 509.99 L 172.36 515.757 Z  M 199.209 580.653 C 197.449 582.226 194.903 582.338 192.918 581.29 C 184.081 573.95 182.508 570.542 177.64 563.54 C 163.035 578.444 152.7 582.9 133.751 582.9 C 111.358 582.9 93.907 569.082 93.907 541.408 C 93.907 519.801 105.628 505.084 122.292 497.894 C 136.747 491.528 156.931 490.405 172.36 488.645 L 172.36 485.199 C 172.36 478.871 172.846 471.381 169.139 465.914 C 165.881 461.008 159.665 458.986 154.198 458.986 C 144.049 458.986 134.987 464.191 132.778 474.976 C 132.328 477.373 130.568 479.732 128.172 479.844 L 102.333 477.073 C 100.161 476.587 97.764 474.826 98.363 471.494 C 104.317 440.188 132.59 430.751 157.905 430.751 C 170.862 430.751 187.788 434.196 198.011 444.007 C 210.968 456.103 209.732 472.243 209.732 489.805 L 209.732 531.297 C 209.732 543.767 214.9 549.235 219.768 555.975 C 221.491 558.372 221.865 561.255 219.693 563.053 C 214.263 567.584 204.602 576.01 199.284 580.728 L 199.209 580.653"></path>
          </g>
        </svg>
      </div>
      <div className="flex justify-center items-center h-full w-full mb-20">
        <Link
          href="/sign-in"
          className="border-4 border-[#FEAC32] bg-[#FFBC3F] h-full py-3 w-[30rem] flex items-center justify-center"
        >
          <p className="text-black text-xl">Get started (it's free)</p>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={landingfcc} alt="none" className="w-[750px] h-[442px]" />
        <p className="py-3">
          freeCodeCamp students at a local study group in South Korea.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
