import * as React from 'react';
import { StackedBarChart, IChartProps, IChartDataPoint, DataVizPalette } from '@fluentui/react-charting';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import type { JSXElement } from '@fluentui/utilities';

export class StackedBarChartBaseBarExample extends React.Component<{}, {}> {
  public render(): JSXElement {
    const points: IChartDataPoint[] = [
      { legend: 'first', color: DataVizPalette.color21 },
      { legend: 'second', color: DataVizPalette.color22 },
      { legend: 'third', color: DataVizPalette.color23 },
      { legend: 'forth', color: DataVizPalette.color24 },
    ];

    const chartTitle = 'Stacked Bar chart example';

    const data: IChartProps = {
      chartTitle,
      chartData: points,
    };

    return (
      <StackedBarChart
        data={data}
        barBackgroundColor={DefaultPalette.neutralSecondary}
        href={'https://developer.microsoft.com/en-us/'}
      />
    );
  }
}
