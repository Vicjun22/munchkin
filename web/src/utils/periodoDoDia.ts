export function verificaPeriodoAtualDoDia() {

    const time: number = new Date().getHours();

    const periodoComSol: number[] = [10, 11, 12, 13, 14, 15, 16, 17];
    const periodoComPoucoSol: number[] = [6, 7, 8, 9, 18, 19, 20, 21];
  
    let periodoDoDia: string = periodoComSol.includes(time)
      ? 'background-com-sol'
      : periodoComPoucoSol.includes(time)
          ? 'background-com-pouco-sol'
          : 'background-sem-sol';

  return periodoDoDia;
};