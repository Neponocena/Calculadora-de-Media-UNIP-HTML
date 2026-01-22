function lerNota(descricao) {
      let nota = prompt(descricao);

      if (nota === null) {
        alert("Operação cancelada");
        return null;
      }

      nota = parseFloat(nota.replace(",", "."));

      if (isNaN(nota)) {
        alert("Digite uma nota válida");
        return null;
      }

      if (nota < 0 || nota > 10) {
        alert("A nota deve estar entre 0 e 10");
        return null;
      }

      return nota;
    }

    function resultado() {
      const np1 = lerNota("NOTA DA NP1:");
      if (np1 === null) return;

      const np2 = lerNota("NOTA DA NP2:");
      if (np2 === null) return;

      const pim = lerNota("NOTA DO PIM:");
      if (pim === null) return;

      const media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2);

      if (media >= 7) {
        alert(`Sua média é ${media.toFixed(2)}. Você está APROVADO!`);
      } else {
        alert(`Sua média é ${media.toFixed(2)}. Você está de EXAME!`);

        const exame = lerNota("Digite a nota do exame:");
        if (exame === null) return;

        if (media + exame >= 10) {
          alert("Você está aprovado!");
        } else {
          alert("Você está de DP!");
        }
      }
    }